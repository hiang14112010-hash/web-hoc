/**
 * Fernora Async Layout-Aware Zero-Dependency OOXML (.pptx) Exporter
 * Generates a valid 16:9 PowerPoint presentation (.pptx) supporting all 20 editorial
 * slide layouts, per-slide surface tone polarity, CORS-safe image fetching + Canvas JPEG
 * normalization, Morph transition metadata, and graceful styled-frame fallbacks.
 */
(function (global) {
  'use strict';

  const SLIDE_W = 12192000; // 16:9 widescreen width in EMUs (13.333 in)
  const SLIDE_H = 6858000;  // 16:9 widescreen height in EMUs (7.5 in)
  const MX = 680000;        // Standard horizontal margin
  const CW = SLIDE_W - MX * 2; // 10832000 usable content width
  const IMG_MAX_W = 1280;
  const IMG_MAX_H = 720;
  const IMG_JPEG_QUALITY = 0.80;
  const IMG_FETCH_TIMEOUT_MS = 5000;
  const IMG_FETCH_CONCURRENCY = 6;

  // ---------- XML & Color Utilities ----------
  function xmlEsc(str) {
    return String(str == null ? '' : str)
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/g, '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  function hex6(color) {
    const clean = String(color || '#111111').replace('#', '').trim();
    if (/^[0-9a-fA-F]{3}$/.test(clean)) {
      return clean.split('').map(ch => ch + ch).join('').toUpperCase();
    }
    const filtered = clean.replace(/[^0-9a-fA-F]/g, '');
    return (filtered || '111111').slice(0, 6).padEnd(6, '0').toUpperCase();
  }

  function hexToRgb(hex) {
    const h = hex6(hex);
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16)
    ];
  }

  function rgbToHex(r, g, b) {
    const clamp = v => Math.max(0, Math.min(255, Math.round(v)));
    return [clamp(r), clamp(g), clamp(b)]
      .map(v => v.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }

  function mixHex(c1, c2, t) {
    const [r1, g1, b1] = hexToRgb(c1);
    const [r2, g2, b2] = hexToRgb(c2);
    return rgbToHex(
      r1 + (r2 - r1) * t,
      g1 + (g2 - g1) * t,
      b1 + (b2 - b1) * t
    );
  }

  function darkenHex(hex, amount) {
    return mixHex(hex, '080B10', amount);
  }

  function lightenHex(hex, amount) {
    return mixHex(hex, 'FFFFFF', amount);
  }

  function isDarkHex(hex) {
    const [r, g, b] = hexToRgb(hex);
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return lum < 0.45;
  }

  function getToneTheme(palette, tone) {
    const p = palette || {};
    const pBg = hex6(p.bg || '#F7F4EC');
    const pInk = hex6(p.ink || '#161A1D');
    const pSurface = hex6(p.surface || mixHex(pBg, pInk, 0.05));
    const pMuted = hex6(p.muted || mixHex(pInk, pBg, 0.45));
    const pAccent = hex6(p.accent || '#2B6E57');
    const pAccent2 = hex6(p.accent2 || '#C58B2A');

    if (tone === 'dark') {
      const darkBg = isDarkHex(pBg) ? darkenHex(pBg, 0.15) : mixHex(pInk, '0D131A', 0.48);
      return {
        tone: 'dark',
        bg: darkBg,
        surface: lightenHex(darkBg, 0.09),
        surfaceAlt: lightenHex(darkBg, 0.14),
        ink: 'F5F2EB',
        muted: 'B8C2CF',
        accent: lightenHex(pAccent, 0.24),
        accent2: lightenHex(pAccent2, 0.24),
        border: lightenHex(darkBg, 0.20),
        onAccent: '0E1418'
      };
    }

    if (tone === 'photo') {
      const photoBg = mixHex(pInk, '070A0E', 0.70);
      return {
        tone: 'photo',
        bg: photoBg,
        surface: '151D26',
        surfaceAlt: '1F2935',
        ink: 'FFFFFF',
        muted: 'D6DCE5',
        accent: lightenHex(pAccent, 0.28),
        accent2: lightenHex(pAccent2, 0.28),
        border: '3A4656',
        onAccent: '0B1014'
      };
    }

    if (tone === 'accent') {
      const accBg = isDarkHex(pAccent) ? darkenHex(pAccent, 0.12) : darkenHex(pAccent, 0.34);
      return {
        tone: 'accent',
        bg: accBg,
        surface: darkenHex(accBg, 0.22),
        surfaceAlt: lightenHex(accBg, 0.10),
        ink: 'FAF8F2',
        muted: 'E3DDD1',
        accent: 'F6E7C8',
        accent2: lightenHex(pAccent2, 0.32),
        border: lightenHex(accBg, 0.22),
        onAccent: accBg
      };
    }

    // Default: 'light'
    return {
      tone: 'light',
      bg: pBg,
      surface: pSurface,
      surfaceAlt: mixHex(pSurface, pAccent, 0.08),
      ink: pInk,
      muted: pMuted,
      accent: pAccent,
      accent2: pAccent2,
      border: mixHex(pInk, pBg, 0.82),
      onAccent: 'FFFFFF'
    };
  }

  // ---------- CRC32 & ZIP Builder (STORE, UTF-8) ----------
  const CRC_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      t[i] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) {
      c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function buildZipBlob(entries) {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    for (const entry of entries) {
      const nameBytes = encoder.encode(entry.name);
      const dataBytes = typeof entry.data === 'string'
        ? encoder.encode(entry.data)
        : (entry.data instanceof Uint8Array ? entry.data : new Uint8Array(entry.data));
      const crc = crc32(dataBytes);

      const localHeader = new Uint8Array(30 + nameBytes.length);
      const lv = new DataView(localHeader.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0x0800, true); // UTF-8 flag
      lv.setUint16(8, 0, true);      // STORE
      lv.setUint16(10, 0, true);
      lv.setUint16(12, 0, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, dataBytes.length, true);
      lv.setUint32(22, dataBytes.length, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      localHeader.set(nameBytes, 30);

      localParts.push(localHeader, dataBytes);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const cv = new DataView(centralHeader.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0x0800, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, 0, true);
      cv.setUint16(14, 0, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, dataBytes.length, true);
      cv.setUint32(24, dataBytes.length, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, offset, true);
      centralHeader.set(nameBytes, 46);

      centralParts.push(centralHeader);
      offset += localHeader.length + dataBytes.length;
    }

    const centralSize = centralParts.reduce((s, b) => s + b.length, 0);
    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);

    return new Blob([...localParts, ...centralParts, eocd], {
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    });
  }

  // ---------- CORS-Safe Image Fetch & Canvas JPEG Normalization ----------
  function getSlidePrimaryMedia(template, slide) {
    if (slide && slide.media && slide.media.url) return slide.media;
    if (slide && slide.image && slide.image.url) return slide.image;
    if (slide && slide.layout === 'cover' && template) {
      if (template.coverMedia && template.coverMedia.url) return template.coverMedia;
      if (template.coverImage && template.coverImage.url) return template.coverImage;
    }
    return null;
  }

  function getSlideGallery(slide) {
    if (slide && Array.isArray(slide.gallery) && slide.gallery.length) return slide.gallery;
    if (slide && Array.isArray(slide.images) && slide.images.length) return slide.images;
    return [];
  }

  function collectUniqueImageUrls(template, slides) {
    const urls = [];
    const seen = new Set();
    const add = u => {
      if (typeof u === 'string' && u.trim() && !seen.has(u.trim())) {
        seen.add(u.trim());
        urls.push(u.trim());
      }
    };
    for (const slide of slides) {
      const primary = getSlidePrimaryMedia(template, slide);
      if (primary) add(primary.url);
      const gallery = getSlideGallery(slide);
      for (const item of gallery) {
        if (item && item.url) add(item.url);
      }
    }
    return urls;
  }

  async function blobToJpegBytes(blob) {
    // 1. Try createImageBitmap + OffscreenCanvas or HTMLCanvasElement
    if (typeof createImageBitmap === 'function') {
      let bitmap = null;
      try {
        bitmap = await createImageBitmap(blob);
        const bw = bitmap.width || 1;
        const bh = bitmap.height || 1;
        const scale = Math.min(1, IMG_MAX_W / bw, IMG_MAX_H / bh);
        const w = Math.max(1, Math.round(bw * scale));
        const h = Math.max(1, Math.round(bh * scale));

        if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('2D context unavailable');
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(bitmap, 0, 0, w, h);
          const outBlob = await new Promise((resolve, reject) => {
            canvas.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/jpeg', IMG_JPEG_QUALITY);
          });
          const buf = await outBlob.arrayBuffer();
          return { bytes: new Uint8Array(buf), width: w, height: h };
        } else if (typeof OffscreenCanvas !== 'undefined') {
          const canvas = new OffscreenCanvas(w, h);
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Offscreen 2D context unavailable');
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(bitmap, 0, 0, w, h);
          const outBlob = await canvas.convertToBlob({ type: 'image/jpeg', quality: IMG_JPEG_QUALITY });
          const buf = await outBlob.arrayBuffer();
          return { bytes: new Uint8Array(buf), width: w, height: h };
        }
      } finally {
        if (bitmap && typeof bitmap.close === 'function') {
          try { bitmap.close(); } catch (_) {}
        }
      }
    }

    // 2. Fallback: HTML Image + canvas
    if (typeof Image !== 'undefined' && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function' && typeof document !== 'undefined') {
      const objUrl = URL.createObjectURL(blob);
      try {
        const img = await new Promise((resolve, reject) => {
          const el = new Image();
          el.crossOrigin = 'anonymous';
          el.onload = () => resolve(el);
          el.onerror = () => reject(new Error('Image decode failed'));
          el.src = objUrl;
        });
        const bw = img.naturalWidth || img.width || 1;
        const bh = img.naturalHeight || img.height || 1;
        const scale = Math.min(1, IMG_MAX_W / bw, IMG_MAX_H / bh);
        const w = Math.max(1, Math.round(bw * scale));
        const h = Math.max(1, Math.round(bh * scale));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('2D context unavailable');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        const outBlob = await new Promise((resolve, reject) => {
          canvas.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/jpeg', IMG_JPEG_QUALITY);
        });
        const buf = await outBlob.arrayBuffer();
        return { bytes: new Uint8Array(buf), width: w, height: h };
      } finally {
        URL.revokeObjectURL(objUrl);
      }
    }

    throw new Error('No canvas encoder available');
  }

  async function fetchAndNormalizeImage(url) {
    if (typeof fetch !== 'function') return null;
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller
      ? setTimeout(() => { try { controller.abort(); } catch (_) {} }, IMG_FETCH_TIMEOUT_MS)
      : null;

    try {
      const res = await fetch(url, {
        mode: 'cors',
        credentials: 'omit',
        signal: controller ? controller.signal : undefined
      });
      if (!res || !res.ok) return null;
      const blob = await res.blob();
      if (!blob || blob.size === 0) return null;
      const normalized = await blobToJpegBytes(blob);
      if (!normalized || !normalized.bytes || normalized.bytes.length < 4) return null;
      // Verify JPEG magic header FF D8
      if (normalized.bytes[0] !== 0xFF || normalized.bytes[1] !== 0xD8) return null;
      return normalized;
    } catch (_) {
      return null;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  async function fetchAllImages(urls, onEachDone) {
    const mediaMap = new Map();
    let failedImages = 0;
    let nextIdx = 0;
    let mediaSeq = 0;

    async function worker() {
      while (nextIdx < urls.length) {
        const myIdx = nextIdx++;
        const url = urls[myIdx];
        const result = await fetchAndNormalizeImage(url);
        if (result) {
          mediaSeq += 1;
          mediaMap.set(url, {
            mediaIndex: mediaSeq,
            fileName: `image${mediaSeq}.jpg`,
            bytes: result.bytes,
            width: result.width,
            height: result.height
          });
        } else {
          failedImages += 1;
        }
        if (onEachDone) onEachDone();
      }
    }

    const poolSize = Math.min(IMG_FETCH_CONCURRENCY, urls.length);
    const workers = [];
    for (let i = 0; i < poolSize; i++) workers.push(worker());
    await Promise.all(workers);

    return { mediaMap, failedImages };
  }

  // ---------- DrawingML Shape & Text Helpers ----------
  function makePara(text, opts) {
    const o = opts || {};
    const sz = o.sz || 1500;
    const color = hex6(o.color || '161A1D');
    const algn = o.algn || 'l';
    const font = o.font || 'Manrope';
    const bold = o.bold ? ' b="1"' : '';
    const italic = o.italic ? ' i="1"' : '';
    const spcBef = o.spcBef != null ? `<a:spcBef><a:spcPts val="${o.spcBef}"/></a:spcBef>` : '';
    const spcAft = o.spcAft != null ? `<a:spcAft><a:spcPts val="${o.spcAft}"/></a:spcAft>` : '';
    const lnSpc = o.lnSpc != null ? `<a:lnSpc><a:spcPct val="${o.lnSpc}"/></a:lnSpc>` : '';

    return `<a:p><a:pPr algn="${algn}">${lnSpc}${spcBef}${spcAft}</a:pPr><a:r><a:rPr lang="vi-VN" sz="${sz}"${bold}${italic} dirty="0"><a:solidFill><a:srgbClr val="${color}"/></a:solidFill><a:latin typeface="${xmlEsc(font)}"/></a:rPr><a:t>${xmlEsc(text)}</a:t></a:r></a:p>`;
  }

  function makeRect(id, name, x, y, cx, cy, opts) {
    const o = opts || {};
    const prst = o.prst || 'roundRect';
    const avLst = prst === 'roundRect'
      ? `<a:avLst><a:gd name="adj" fmla="val ${o.radius != null ? o.radius : 4500}"/></a:avLst>`
      : '<a:avLst/>';
    let fillXml = '<a:noFill/>';
    if (o.fill) {
      const alphaXml = o.alpha != null ? `<a:alpha val="${o.alpha}"/>` : '';
      fillXml = `<a:solidFill><a:srgbClr val="${hex6(o.fill)}">${alphaXml}</a:srgbClr></a:solidFill>`;
    }
    const lnXml = o.border
      ? `<a:ln w="${o.borderW || 12700}"><a:solidFill><a:srgbClr val="${hex6(o.border)}"/></a:solidFill></a:ln>`
      : '<a:ln><a:noFill/></a:ln>';

    return `
      <p:sp>
        <p:nvSpPr><p:cNvPr id="${id}" name="${xmlEsc(name)}"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="${Math.round(x)}" y="${Math.round(y)}"/><a:ext cx="${Math.max(1000, Math.round(cx))}" cy="${Math.max(1000, Math.round(cy))}"/></a:xfrm>
          <a:prstGeom prst="${prst}">${avLst}</a:prstGeom>
          ${fillXml}
          ${lnXml}
        </p:spPr>
      </p:sp>`;
  }

  function makeTextBox(id, name, x, y, cx, cy, parasXml, opts) {
    const o = opts || {};
    const prst = o.prst || (o.fill ? 'roundRect' : 'rect');
    const avLst = prst === 'roundRect'
      ? `<a:avLst><a:gd name="adj" fmla="val ${o.radius != null ? o.radius : 4500}"/></a:avLst>`
      : '<a:avLst/>';
    let fillXml = '<a:noFill/>';
    if (o.fill) {
      const alphaXml = o.alpha != null ? `<a:alpha val="${o.alpha}"/>` : '';
      fillXml = `<a:solidFill><a:srgbClr val="${hex6(o.fill)}">${alphaXml}</a:srgbClr></a:solidFill>`;
    }
    const lnXml = o.border
      ? `<a:ln w="${o.borderW || 12700}"><a:solidFill><a:srgbClr val="${hex6(o.border)}"/></a:solidFill></a:ln>`
      : '<a:ln><a:noFill/></a:ln>';
    const anchor = o.anchor || 't';
    const lIns = o.padX != null ? o.padX : (o.fill ? 160000 : 30000);
    const rIns = o.padX != null ? o.padX : (o.fill ? 160000 : 30000);
    const tIns = o.padY != null ? o.padY : (o.fill ? 120000 : 20000);
    const bIns = o.padY != null ? o.padY : (o.fill ? 120000 : 20000);
    const bodyContent = parasXml && parasXml.trim() ? parasXml : '<a:p><a:endParaRPr lang="vi-VN"/></a:p>';

    return `
      <p:sp>
        <p:nvSpPr><p:cNvPr id="${id}" name="${xmlEsc(name)}"/><p:cNvSpPr${o.fill ? '' : ' txBox="1"'}/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="${Math.round(x)}" y="${Math.round(y)}"/><a:ext cx="${Math.max(1000, Math.round(cx))}" cy="${Math.max(1000, Math.round(cy))}"/></a:xfrm>
          <a:prstGeom prst="${prst}">${avLst}</a:prstGeom>
          ${fillXml}
          ${lnXml}
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square" anchor="${anchor}" lIns="${lIns}" tIns="${tIns}" rIns="${rIns}" bIns="${bIns}"/>
          <a:lstStyle/>
          ${bodyContent}
        </p:txBody>
      </p:sp>`;
  }

  function makePicOrFallback(nextId, media, x, y, cx, cy, relCtx, theme, opts) {
    const o = opts || {};
    const url = media && media.url ? media.url.trim() : '';
    const rel = url ? relCtx.addImage(url) : null;

    if (rel) {
      const id = nextId();
      const prst = o.bleed ? 'rect' : 'roundRect';
      const avLst = o.bleed ? '<a:avLst/>' : '<a:avLst><a:gd name="adj" fmla="val 3500"/></a:avLst>';
      const lnXml = o.bleed
        ? '<a:ln><a:noFill/></a:ln>'
        : `<a:ln w="9525"><a:solidFill><a:srgbClr val="${theme.border}"/></a:solidFill></a:ln>`;
      const descr = (media && (media.alt || media.caption)) || o.fallbackLabel || 'Hình minh họa';
      return `
      <p:pic>
        <p:nvPicPr>
          <p:cNvPr id="${id}" name="${xmlEsc(o.name || 'Illustration')}" descr="${xmlEsc(descr)}"/>
          <p:cNvPicPr><a:picLocks noChangeAspect="0"/></p:cNvPicPr>
          <p:nvPr/>
        </p:nvPicPr>
        <p:blipFill>
          <a:blip r:embed="${rel.rId}"/>
          <a:stretch><a:fillRect/></a:stretch>
        </p:blipFill>
        <p:spPr>
          <a:xfrm><a:off x="${Math.round(x)}" y="${Math.round(y)}"/><a:ext cx="${Math.max(1000, Math.round(cx))}" cy="${Math.max(1000, Math.round(cy))}"/></a:xfrm>
          <a:prstGeom prst="${prst}">${avLst}</a:prstGeom>
          ${lnXml}
        </p:spPr>
      </p:pic>`;
    }

    // Graceful styled accent placeholder frame
    const shapes = [];
    const label = (media && (media.caption || media.alt)) || o.fallbackLabel || 'Khung hình minh họa học thuật';
    const credit = media && media.credit ? media.credit : '';

    shapes.push(makeRect(nextId(), 'VisualFrameBg', x, y, cx, cy, {
      prst: o.bleed ? 'rect' : 'roundRect',
      fill: theme.surface,
      border: o.bleed ? null : theme.accent,
      borderW: 15875
    }));
    // Decorative accent strip on left edge of placeholder
    shapes.push(makeRect(nextId(), 'VisualFrameAccent', x + (o.bleed ? 0 : 120000), y + 180000, 75000, Math.min(cy - 360000, 1400000), {
      prst: 'roundRect',
      fill: theme.accent
    }));

    const paras = [
      makePara('✦ MINH HỌA HỌC THUẬT', { sz: 1000, bold: true, color: theme.accent, algn: 'ctr' }),
      makePara(label, { sz: 1350, bold: true, color: theme.ink, algn: 'ctr', spcBef: 400 })
    ];
    if (credit) {
      paras.push(makePara(credit, { sz: 950, italic: true, color: theme.muted, algn: 'ctr', spcBef: 300 }));
    }
    shapes.push(makeTextBox(nextId(), 'VisualFrameText', x + 200000, y + 200000, cx - 400000, cy - 400000, paras.join(''), {
      anchor: 'ctr'
    }));

    return shapes.join('');
  }

  function makeStandardHeader(nextId, template, slide, theme, opts) {
    const o = opts || {};
    const x = o.x != null ? o.x : MX;
    const w = o.w != null ? o.w : CW;
    const kickerY = o.kickerY != null ? o.kickerY : 420000;
    const titleY = o.titleY != null ? o.titleY : 780000;
    const titleH = o.titleH != null ? o.titleH : 880000;
    const titleSz = o.titleSz || 2700;

    const kicker = slide.kicker || template.subjectLabel || 'FERNORA';
    const title = slide.title || slide.chapterName || template.title || '';

    let xml = '';
    xml += makeTextBox(nextId(), 'Kicker', x, kickerY, w, 320000,
      makePara(String(kicker).toUpperCase(), { sz: 1050, bold: true, color: theme.accent2, algn: o.algn || 'l' })
    );
    xml += makeTextBox(nextId(), 'Title', x, titleY, w, titleH,
      makePara(title, { sz: titleSz, bold: true, color: theme.ink, font: 'Be Vietnam Pro', algn: o.algn || 'l' })
    );
    return xml;
  }

  function makeBulletsText(lines, theme, opts) {
    const o = opts || {};
    const count = lines.length;
    const sz = o.sz || (count > 9 ? 1150 : count > 6 ? 1300 : 1450);
    const spc = count > 8 ? 300 : 550;
    return lines.map(line =>
      makePara(line, { sz, color: o.color || theme.ink, spcBef: spc, algn: o.algn || 'l' })
    ).join('');
  }

  function formatCaptionLine(media, fallback) {
    const parts = [];
    if (media && media.caption) parts.push(media.caption);
    else if (media && media.alt) parts.push(media.alt);
    else if (fallback) parts.push(fallback);
    if (media && media.credit) parts.push(`Nguồn: ${media.credit}`);
    return parts.join(' · ');
  }

  // ---------- 20 Layout-Aware Slide Content Builders ----------
  function buildLayoutShapes(nextId, template, slide, theme, relCtx) {
    const layout = slide.layout || 'split-visual';
    const media = getSlidePrimaryMedia(template, slide);
    const gallery = getSlideGallery(slide);
    let shapes = '';

    // 1. COVER
    if (layout === 'cover') {
      const hasMedia = Boolean(media && media.url);
      const leftW = hasMedia ? 6100000 : 7200000;
      shapes += makeTextBox(nextId(), 'CoverKicker', MX, 860000, leftW, 380000,
        makePara((slide.kicker || template.subjectLabel || 'FERNORA').toUpperCase(), {
          sz: 1200, bold: true, color: theme.accent2
        })
      );
      shapes += makeTextBox(nextId(), 'CoverTitle', MX, 1340000, leftW, 2100000,
        makePara(slide.title || template.title, {
          sz: 3800, bold: true, color: theme.ink, font: 'Be Vietnam Pro'
        })
      );
      if (slide.subtitle || slide.lead) {
        shapes += makeTextBox(nextId(), 'CoverSubtitle', MX, 3520000, leftW, 1100000,
          makePara(slide.subtitle || slide.lead, { sz: 1650, color: theme.muted })
        );
      }
      if (Array.isArray(slide.meta) && slide.meta.length) {
        const metaText = slide.meta.join('   •   ');
        shapes += makeTextBox(nextId(), 'CoverMeta', MX, 4920000, leftW, 660000,
          makePara(metaText, { sz: 1200, bold: true, color: theme.accent }),
          { fill: theme.surface, border: theme.border, anchor: 'ctr' }
        );
      }
      if (hasMedia) {
        shapes += makePicOrFallback(nextId, media, 7180000, 760000, 4332000, 4760000, relCtx, theme, {
          name: 'CoverHeroImage',
          fallbackLabel: template.title
        });
        const cap = formatCaptionLine(media, '');
        if (cap) {
          shapes += makeTextBox(nextId(), 'CoverCaption', 7180000, 5600000, 4332000, 480000,
            makePara(cap, { sz: 950, italic: true, color: theme.muted, algn: 'r' })
          );
        }
      } else {
        const cardX = 8240000;
        const cardW = 3272000;
        shapes += makeRect(nextId(), 'CoverAccentCard', cardX, 1160000, cardW, 4420000, {
          fill: theme.surface, border: theme.accent, borderW: 19050
        });
        const chaps = Array.isArray(template.chapters) ? template.chapters : [];
        const cardParas = [
          makePara('CẤU TRÚC BÀI TRÌNH CHIẾU', { sz: 1050, bold: true, color: theme.accent }),
          ...chaps.map((ch, idx) => makePara(`${String(idx + 1).padStart(2, '0')}. ${ch}`, {
            sz: 1200, color: theme.ink, spcBef: 450
          }))
        ];
        shapes += makeTextBox(nextId(), 'CoverChapterList', cardX + 180000, 1360000, cardW - 360000, 4020000, cardParas.join(''));
      }
      return shapes;
    }

    // 2. HERO-PHOTO-BLEED
    if (layout === 'hero-photo-bleed') {
      shapes += makePicOrFallback(nextId, media, 0, 0, SLIDE_W, SLIDE_H, relCtx, theme, {
        bleed: true,
        name: 'HeroPhotoBleed',
        fallbackLabel: slide.title || template.title
      });
      // Translucent dark scrim over lower 60% for crisp white typography
      shapes += makeRect(nextId(), 'HeroScrim', 0, 2350000, SLIDE_W, SLIDE_H - 2350000, {
        prst: 'rect',
        fill: '090E14',
        alpha: 74000
      });
      shapes += makeTextBox(nextId(), 'BleedKicker', MX, 2720000, CW, 360000,
        makePara((slide.kicker || slide.chapterName || template.subjectLabel).toUpperCase(), {
          sz: 1150, bold: true, color: theme.accent
        })
      );
      shapes += makeTextBox(nextId(), 'BleedTitle', MX, 3140000, CW, 1450000,
        makePara(slide.title || template.title, {
          sz: 3600, bold: true, color: 'FFFFFF', font: 'Be Vietnam Pro'
        })
      );
      if (slide.subtitle || slide.lead) {
        shapes += makeTextBox(nextId(), 'BleedSubtitle', MX, 4660000, 8600000, 960000,
          makePara(slide.subtitle || slide.lead, { sz: 1550, color: 'E4E9F0' })
        );
      }
      const cap = formatCaptionLine(media, slide.visualCaption);
      if (cap) {
        shapes += makeTextBox(nextId(), 'BleedCaption', MX, 5740000, CW, 420000,
          makePara(cap, { sz: 1000, italic: true, color: 'C4CEDB', algn: 'r' })
        );
      }
      return shapes;
    }

    // 3. EDITORIAL-SPLIT-PHOTO
    if (layout === 'editorial-split-photo') {
      const photoLeft = slide.mediaPosition === 'left';
      const photoX = photoLeft ? MX : 6440000;
      const photoW = 5072000;
      const textX = photoLeft ? 6120000 : MX;
      const textW = 5392000;

      shapes += makePicOrFallback(nextId, media, photoX, 620000, photoW, 4760000, relCtx, theme, {
        name: 'EditorialPhoto',
        fallbackLabel: slide.visualCaption || slide.title
      });
      const cap = formatCaptionLine(media, slide.visualCaption);
      if (cap) {
        shapes += makeTextBox(nextId(), 'EditorialCaption', photoX, 5480000, photoW, 640000,
          makePara(cap, { sz: 1000, italic: true, color: theme.muted }),
          { fill: theme.surface, border: theme.border, anchor: 'ctr' }
        );
      }

      shapes += makeStandardHeader(nextId, template, slide, theme, {
        x: textX, w: textW, kickerY: 560000, titleY: 920000, titleH: 1050000, titleSz: 2500
      });
      const bodyLines = [];
      if (slide.lead) bodyLines.push(slide.lead);
      if (Array.isArray(slide.bullets)) slide.bullets.forEach(b => bodyLines.push(`•  ${b}`));
      if (Array.isArray(slide.items)) slide.items.forEach(it => bodyLines.push(`${it.num || '•'} ${it.title}: ${it.desc}`));

      const bodyH = slide.note ? 2980000 : 3960000;
      shapes += makeTextBox(nextId(), 'EditorialBody', textX, 2060000, textW, bodyH,
        makeBulletsText(bodyLines, theme)
      );
      if (slide.note) {
        shapes += makeTextBox(nextId(), 'EditorialNote', textX, 5200000, textW, 920000,
          makePara(`✦ ${slide.note}`, { sz: 1200, italic: true, color: theme.accent }),
          { fill: theme.surface, border: theme.accent, anchor: 'ctr' }
        );
      }
      return shapes;
    }

    // 4. PHOTO-GALLERY-TRIPTYCH
    if (layout === 'photo-gallery-triptych') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2600 });
      const items = gallery.length ? gallery.slice(0, 3) : (media ? [media] : [
        { alt: 'Ảnh minh họa 1', caption: slide.subtitle || 'Khung hình 01' },
        { alt: 'Ảnh minh họa 2', caption: 'Khung hình 02' },
        { alt: 'Ảnh minh họa 3', caption: 'Khung hình 03' }
      ]);
      const cols = Math.max(1, items.length);
      const gap = 260000;
      const colW = Math.floor((CW - gap * (cols - 1)) / cols);
      items.forEach((item, idx) => {
        const x = MX + idx * (colW + gap);
        shapes += makePicOrFallback(nextId, item, x, 1820000, colW, 3150000, relCtx, theme, {
          name: `GalleryPhoto${idx + 1}`,
          fallbackLabel: item.caption || item.alt || `Ảnh ${idx + 1}`
        });
        const capParas = [
          makePara(item.caption || item.alt || `Hình ${idx + 1}`, { sz: 1150, bold: true, color: theme.ink })
        ];
        if (item.credit) {
          capParas.push(makePara(item.credit, { sz: 950, italic: true, color: theme.muted, spcBef: 200 }));
        }
        shapes += makeTextBox(nextId(), `GalleryCaption${idx + 1}`, x, 5070000, colW, 1080000, capParas.join(''), {
          fill: theme.surface, border: theme.border
        });
      });
      return shapes;
    }

    // 5. STAT-SHOWCASE
    if (layout === 'stat-showcase') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const hs = slide.heroStat || { value: slide.bigNum || '100%', unit: '', label: slide.subtitle || 'Chỉ số nổi bật', context: slide.lead || '' };
      const leftW = 5000000;
      const rightX = MX + leftW + 340000;
      const rightW = CW - leftW - 340000;

      shapes += makeRect(nextId(), 'StatCardBg', MX, 1820000, leftW, 4280000, {
        fill: theme.surface, border: theme.accent, borderW: 19050
      });
      shapes += makeRect(nextId(), 'StatAccentBar', MX + 240000, 2060000, 1200000, 90000, {
        fill: theme.accent
      });
      const statDisplay = hs.unit ? `${hs.value} ${hs.unit}` : String(hs.value || '');
      shapes += makeTextBox(nextId(), 'StatValue', MX + 200000, 2260000, leftW - 400000, 1550000,
        makePara(statDisplay, { sz: 5400, bold: true, color: theme.accent, font: 'Be Vietnam Pro' }),
        { anchor: 'ctr' }
      );
      shapes += makeTextBox(nextId(), 'StatLabel', MX + 200000, 3860000, leftW - 400000, 920000,
        makePara(hs.label || '', { sz: 1700, bold: true, color: theme.ink, font: 'Be Vietnam Pro' })
      );
      if (hs.context) {
        shapes += makeTextBox(nextId(), 'StatContext', MX + 200000, 4820000, leftW - 400000, 1100000,
          makePara(hs.context, { sz: 1250, color: theme.muted })
        );
      }

      const supportLines = [];
      if (slide.lead && slide.lead !== hs.context) supportLines.push(slide.lead);
      if (Array.isArray(slide.bullets)) slide.bullets.forEach(b => supportLines.push(`•  ${b}`));
      if (Array.isArray(slide.cards)) slide.cards.forEach(c => supportLines.push(`${c.tag || c.num || '✦'} ${c.title}: ${c.body}`));
      if (slide.note) supportLines.push(`Ghi chú: ${slide.note}`);

      shapes += makeTextBox(nextId(), 'StatSupport', rightX, 1820000, rightW, 4280000,
        makeBulletsText(supportLines.length ? supportLines : [slide.subtitle || 'Phân tích số liệu trọng tâm'], theme),
        { fill: theme.surfaceAlt, border: theme.border }
      );
      return shapes;
    }

    // 6. ANNOTATED-DIAGRAM
    if (layout === 'annotated-diagram') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const leftW = 5560000;
      const rightX = MX + leftW + 320000;
      const rightW = CW - leftW - 320000;

      shapes += makePicOrFallback(nextId, media, MX, 1820000, leftW, 3720000, relCtx, theme, {
        name: 'DiagramMedia',
        fallbackLabel: slide.visualCaption || slide.title
      });
      const cap = formatCaptionLine(media, slide.visualCaption);
      if (cap) {
        shapes += makeTextBox(nextId(), 'DiagramCaption', MX, 5600000, leftW, 520000,
          makePara(cap, { sz: 950, italic: true, color: theme.muted })
        );
      }

      const callouts = Array.isArray(slide.callouts) && slide.callouts.length
        ? slide.callouts
        : (Array.isArray(slide.annotations) ? slide.annotations.map((a, i) => ({ num: String(i + 1).padStart(2, '0'), label: a.tag, text: a.text })) : []);

      const totalH = 4280000;
      const count = Math.max(1, callouts.length);
      const gap = 140000;
      const cardH = Math.floor((totalH - gap * (count - 1)) / count);
      const textSz = count > 4 ? 1100 : 1250;

      callouts.forEach((c, idx) => {
        const y = 1820000 + idx * (cardH + gap);
        shapes += makeRect(nextId(), `CalloutCard${idx + 1}`, rightX, y, rightW, cardH, {
          fill: theme.surface, border: theme.border
        });
        shapes += makeTextBox(nextId(), `CalloutNum${idx + 1}`, rightX + 120000, y + 120000, 620000, Math.min(540000, cardH - 240000),
          makePara(c.num || String(idx + 1).padStart(2, '0'), { sz: 1300, bold: true, color: theme.onAccent, algn: 'ctr' }),
          { fill: theme.accent, anchor: 'ctr', padX: 40000, padY: 40000 }
        );
        const cParas = [
          makePara(c.label || `Điểm ${idx + 1}`, { sz: textSz + 100, bold: true, color: theme.ink }),
          makePara(c.text || '', { sz: textSz, color: theme.muted, spcBef: 180 })
        ];
        shapes += makeTextBox(nextId(), `CalloutText${idx + 1}`, rightX + 820000, y + 70000, rightW - 940000, cardH - 140000, cParas.join(''), {
          anchor: 'ctr'
        });
      });
      return shapes;
    }

    // 7. CASE-STUDY-CARD
    if (layout === 'case-study-card') {
      const hasMedia = Boolean(media && media.url);
      const headW = hasMedia ? 7600000 : CW;
      shapes += makeStandardHeader(nextId, template, slide, theme, { w: headW, titleSz: 2500 });

      const cs = slide.caseStudy || {
        meta: slide.meta || [],
        context: slide.lead || slide.subtitle || '',
        mechanism: Array.isArray(slide.bullets) ? slide.bullets.join(' · ') : '',
        takeaway: slide.note || ''
      };
      if (Array.isArray(cs.meta) && cs.meta.length) {
        shapes += makeTextBox(nextId(), 'CaseMeta', MX, 1740000, headW, 440000,
          makePara(cs.meta.join('   ·   '), { sz: 1100, bold: true, color: theme.accent }),
          { fill: theme.surface, border: theme.border, anchor: 'ctr' }
        );
      }
      if (hasMedia) {
        shapes += makePicOrFallback(nextId, media, 8580000, 440000, 2932000, 1740000, relCtx, theme, {
          name: 'CaseStudyThumb',
          fallbackLabel: slide.title
        });
      }

      const cols = [
        { label: '01 · BỐI CẢNH', body: cs.context || '', color: theme.accent },
        { label: '02 · CƠ CHẾ & PHÂN TÍCH', body: cs.mechanism || '', color: theme.accent2 },
        { label: '03 · BÀI HỌC RÚT RA', body: cs.takeaway || '', color: theme.accent }
      ];
      const gap = 240000;
      const colW = Math.floor((CW - gap * 2) / 3);
      cols.forEach((col, idx) => {
        const x = MX + idx * (colW + gap);
        shapes += makeRect(nextId(), `CaseCard${idx + 1}`, x, 2400000, colW, 3700000, {
          fill: theme.surface, border: theme.border
        });
        shapes += makeRect(nextId(), `CaseBar${idx + 1}`, x + 160000, 2560000, colW - 320000, 70000, {
          fill: col.color
        });
        const paras = [
          makePara(col.label, { sz: 1150, bold: true, color: col.color }),
          makePara(col.body, { sz: 1350, color: theme.ink, spcBef: 500 })
        ];
        shapes += makeTextBox(nextId(), `CaseBody${idx + 1}`, x + 140000, 2740000, colW - 280000, 3220000, paras.join(''));
      });
      return shapes;
    }

    // 8. SECTION-BREAK
    if (layout === 'section-break') {
      const numText = slide.bigNum || String(slide.chapterIndex + 1).padStart(2, '0');
      shapes += makeTextBox(nextId(), 'SectionBigNum', MX, 1500000, 2700000, 2600000,
        makePara(numText, { sz: 8000, bold: true, color: theme.accent, font: 'Be Vietnam Pro', algn: 'r' }),
        { anchor: 'ctr' }
      );
      shapes += makeRect(nextId(), 'SectionDivider', 3620000, 1750000, 70000, 2500000, {
        fill: theme.accent2
      });
      shapes += makeTextBox(nextId(), 'SectionKicker', 4020000, 1780000, 7400000, 420000,
        makePara((slide.kicker || `PHẦN ${numText}`).toUpperCase(), { sz: 1200, bold: true, color: theme.accent2 })
      );
      shapes += makeTextBox(nextId(), 'SectionTitle', 4020000, 2280000, 7400000, 1650000,
        makePara(slide.title || slide.chapterName || '', { sz: 3800, bold: true, color: theme.ink, font: 'Be Vietnam Pro' })
      );
      if (slide.subtitle || slide.lead) {
        shapes += makeTextBox(nextId(), 'SectionSub', 4020000, 4050000, 7400000, 1100000,
          makePara(slide.subtitle || slide.lead, { sz: 1600, color: theme.muted })
        );
      }
      return shapes;
    }

    // 9. SPLIT-VISUAL
    if (layout === 'split-visual') {
      const leftW = 5560000;
      const rightX = MX + leftW + 360000;
      const rightW = CW - leftW - 360000;

      shapes += makeStandardHeader(nextId, template, slide, theme, { w: leftW, titleSz: 2500 });
      const lines = [];
      if (slide.lead) lines.push(slide.lead);
      if (Array.isArray(slide.bullets)) slide.bullets.forEach(b => lines.push(`•  ${b}`));
      if (slide.note) lines.push(`→ ${slide.note}`);
      shapes += makeTextBox(nextId(), 'SplitText', MX, 1860000, leftW, 4240000, makeBulletsText(lines, theme));

      shapes += makePicOrFallback(nextId, media, rightX, 780000, rightW, 4520000, relCtx, theme, {
        name: 'SplitVisualMedia',
        fallbackLabel: slide.visualCaption || slide.title
      });
      const cap = formatCaptionLine(media, slide.visualCaption);
      if (cap) {
        shapes += makeTextBox(nextId(), 'SplitCaption', rightX, 5380000, rightW, 680000,
          makePara(cap, { sz: 1000, italic: true, color: theme.muted, algn: 'ctr' }),
          { fill: theme.surface, border: theme.border, anchor: 'ctr' }
        );
      }
      return shapes;
    }

    // 10. FORMULA-SPOTLIGHT
    if (layout === 'formula-spotlight') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      shapes += makeRect(nextId(), 'FormulaBox', MX, 1780000, CW, 1620000, {
        fill: theme.surface, border: theme.accent, borderW: 22225
      });
      shapes += makeRect(nextId(), 'FormulaLeftBar', MX, 1780000, 120000, 1620000, {
        prst: 'rect', fill: theme.accent
      });
      shapes += makeTextBox(nextId(), 'FormulaText', MX + 260000, 1860000, CW - 520000, 1460000,
        makePara(slide.formula || slide.subtitle || '', { sz: 2600, bold: true, color: theme.ink, font: 'Be Vietnam Pro', algn: 'ctr' }),
        { anchor: 'ctr' }
      );

      const anns = Array.isArray(slide.annotations) ? slide.annotations : [];
      if (anns.length) {
        const cols = Math.min(anns.length, anns.length <= 3 ? anns.length : 2);
        const rows = Math.ceil(anns.length / cols);
        const gapX = 220000;
        const gapY = 180000;
        const cardW = Math.floor((CW - gapX * (cols - 1)) / cols);
        const cardH = Math.floor((2420000 - gapY * (rows - 1)) / rows);

        anns.forEach((a, idx) => {
          const r = Math.floor(idx / cols);
          const c = idx % cols;
          const x = MX + c * (cardW + gapX);
          const y = 3680000 + r * (cardH + gapY);
          const paras = [
            makePara(a.tag || `Thành phần ${idx + 1}`, { sz: 1200, bold: true, color: theme.accent }),
            makePara(a.text || '', { sz: 1250, color: theme.ink, spcBef: 240 })
          ];
          shapes += makeTextBox(nextId(), `FormulaAnn${idx + 1}`, x, y, cardW, cardH, paras.join(''), {
            fill: theme.surfaceAlt, border: theme.border, anchor: 'ctr'
          });
        });
      }
      return shapes;
    }

    // 11. DATA-CHART
    if (layout === 'data-chart') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const chartW = 6560000;
      const rightX = MX + chartW + 320000;
      const rightW = CW - chartW - 320000;

      shapes += makeRect(nextId(), 'ChartPanel', MX, 1820000, chartW, 4280000, {
        fill: theme.surface, border: theme.border
      });
      const bars = Array.isArray(slide.bars) ? slide.bars : [];
      const maxVal = Math.max(1, ...bars.map(b => Number(b.val) || 0));
      const count = Math.max(1, bars.length);
      const rowH = Math.floor(3800000 / count);
      const trackX = MX + 200000;
      const trackW = chartW - 1400000;

      bars.forEach((b, idx) => {
        const y = 2020000 + idx * rowH;
        const val = Number(b.val) || 0;
        const unit = b.unit || '%';
        const fillW = Math.max(220000, Math.round((val / maxVal) * trackW));
        shapes += makeTextBox(nextId(), `BarLabel${idx + 1}`, trackX, y, trackW, 280000,
          makePara(b.label || `Nhóm ${idx + 1}`, { sz: 1150, bold: true, color: theme.ink })
        );
        shapes += makeRect(nextId(), `BarTrack${idx + 1}`, trackX, y + 310000, trackW, Math.min(260000, Math.max(140000, rowH - 440000)), {
          fill: theme.border
        });
        shapes += makeRect(nextId(), `BarFill${idx + 1}`, trackX, y + 310000, fillW, Math.min(260000, Math.max(140000, rowH - 440000)), {
          fill: idx % 2 === 0 ? theme.accent : theme.accent2
        });
        shapes += makeTextBox(nextId(), `BarVal${idx + 1}`, trackX + trackW + 100000, y + 240000, 1000000, 340000,
          makePara(`${val}${unit}`, { sz: 1250, bold: true, color: theme.accent, algn: 'r' }),
          { anchor: 'ctr' }
        );
      });

      shapes += makeRect(nextId(), 'InsightCard', rightX, 1820000, rightW, 4280000, {
        fill: theme.surfaceAlt, border: theme.accent, borderW: 15875
      });
      shapes += makeRect(nextId(), 'InsightTopBar', rightX + 180000, 2020000, 1200000, 80000, {
        fill: theme.accent
      });
      const insParas = [
        makePara(slide.insightTitle || 'NHẬN ĐỊNH TRỌNG TÂM', { sz: 1500, bold: true, color: theme.ink, font: 'Be Vietnam Pro' }),
        makePara(slide.insightBody || slide.lead || '', { sz: 1350, color: theme.muted, spcBef: 450 })
      ];
      if (slide.note) {
        insParas.push(makePara(`✦ ${slide.note}`, { sz: 1150, italic: true, color: theme.accent, spcBef: 600 }));
      }
      shapes += makeTextBox(nextId(), 'InsightText', rightX + 180000, 2240000, rightW - 360000, 3660000, insParas.join(''));
      return shapes;
    }

    // 12. TIMELINE
    if (layout === 'timeline') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const nodes = (Array.isArray(slide.items) && slide.items.length)
        ? slide.items
        : (Array.isArray(slide.steps) ? slide.steps.map(s => ({ num: s.step, title: s.title, desc: s.desc })) : []);
      const count = Math.max(1, nodes.length);
      const trackY = 2500000;
      shapes += makeRect(nextId(), 'TimelineTrack', MX + 300000, trackY, CW - 600000, 65000, {
        prst: 'rect', fill: theme.accent
      });
      const gap = 180000;
      const colW = Math.floor((CW - gap * (count - 1)) / count);
      const descSz = count > 4 ? 1100 : 1250;

      nodes.forEach((n, idx) => {
        const x = MX + idx * (colW + gap);
        const nodeW = Math.min(1100000, colW - 100000);
        const nodeX = x + Math.floor((colW - nodeW) / 2);
        shapes += makeTextBox(nextId(), `TimelineNode${idx + 1}`, nodeX, trackY - 240000, nodeW, 540000,
          makePara(n.num || String(idx + 1).padStart(2, '0'), { sz: 1300, bold: true, color: theme.onAccent, algn: 'ctr' }),
          { fill: idx % 2 === 0 ? theme.accent : theme.accent2, anchor: 'ctr', padX: 40000, padY: 40000 }
        );
        const paras = [
          makePara(n.title || `Mốc ${idx + 1}`, { sz: descSz + 150, bold: true, color: theme.ink, font: 'Be Vietnam Pro', algn: 'ctr' }),
          makePara(n.desc || '', { sz: descSz, color: theme.muted, spcBef: 350, algn: 'ctr' })
        ];
        shapes += makeTextBox(nextId(), `TimelineCard${idx + 1}`, x, 3040000, colW, 3040000, paras.join(''), {
          fill: theme.surface, border: theme.border
        });
      });
      return shapes;
    }

    // 13. PROCESS-FLOW
    if (layout === 'process-flow') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const steps = (Array.isArray(slide.steps) && slide.steps.length)
        ? slide.steps
        : (Array.isArray(slide.items) ? slide.items.map(it => ({ step: it.num, title: it.title, desc: it.desc })) : []);
      const count = Math.max(1, steps.length);
      const arrowW = count > 1 ? 260000 : 0;
      const cardW = Math.floor((CW - arrowW * (count - 1)) / count);
      const textSz = count > 4 ? 1100 : 1250;

      steps.forEach((s, idx) => {
        const x = MX + idx * (cardW + arrowW);
        shapes += makeRect(nextId(), `ProcessCard${idx + 1}`, x, 2000000, cardW, 3960000, {
          fill: theme.surface, border: theme.border
        });
        shapes += makeTextBox(nextId(), `ProcessBadge${idx + 1}`, x + 140000, 2180000, cardW - 280000, 440000,
          makePara(s.step || `BƯỚC ${idx + 1}`, { sz: 1100, bold: true, color: theme.onAccent, algn: 'ctr' }),
          { fill: theme.accent, anchor: 'ctr', padX: 40000, padY: 30000 }
        );
        const paras = [
          makePara(s.title || '', { sz: textSz + 200, bold: true, color: theme.ink, font: 'Be Vietnam Pro' }),
          makePara(s.desc || '', { sz: textSz, color: theme.muted, spcBef: 400 })
        ];
        shapes += makeTextBox(nextId(), `ProcessBody${idx + 1}`, x + 120000, 2760000, cardW - 240000, 3040000, paras.join(''));

        if (idx < count - 1) {
          shapes += makeTextBox(nextId(), `ProcessArrow${idx + 1}`, x + cardW, 3550000, arrowW, 600000,
            makePara('→', { sz: 2200, bold: true, color: theme.accent2, algn: 'ctr' }),
            { anchor: 'ctr' }
          );
        }
      });
      return shapes;
    }

    // 14. COMPARISON
    if (layout === 'comparison') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const gap = 360000;
      const colW = Math.floor((CW - gap) / 2);

      const cols = [
        { x: MX, title: slide.leftTitle || 'Phương diện A', pts: slide.leftPoints || [], accent: theme.accent },
        { x: MX + colW + gap, title: slide.rightTitle || 'Phương diện B', pts: slide.rightPoints || [], accent: theme.accent2 }
      ];
      cols.forEach((col, idx) => {
        shapes += makeRect(nextId(), `CompCard${idx + 1}`, col.x, 1820000, colW, 4280000, {
          fill: theme.surface, border: theme.border
        });
        shapes += makeTextBox(nextId(), `CompHead${idx + 1}`, col.x, 1820000, colW, 660000,
          makePara(col.title, { sz: 1650, bold: true, color: theme.onAccent, font: 'Be Vietnam Pro' }),
          { fill: col.accent, anchor: 'ctr' }
        );
        const lines = col.pts.map(pt => `•  ${pt}`);
        shapes += makeTextBox(nextId(), `CompBody${idx + 1}`, col.x + 140000, 2600000, colW - 280000, 3360000,
          makeBulletsText(lines, theme)
        );
      });
      return shapes;
    }

    // 15. BENTO-GRID
    if (layout === 'bento-grid') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const cards = Array.isArray(slide.cards) ? slide.cards : [];
      const count = Math.max(1, cards.length);
      const cols = count <= 3 ? count : (count === 4 ? 2 : 3);
      const rows = Math.ceil(count / cols);
      const gapX = 220000;
      const gapY = 200000;
      const cardW = Math.floor((CW - gapX * (cols - 1)) / cols);
      const cardH = Math.floor((4280000 - gapY * (rows - 1)) / rows);

      cards.forEach((c, idx) => {
        const r = Math.floor(idx / cols);
        const col = idx % cols;
        const x = MX + col * (cardW + gapX);
        const y = 1820000 + r * (cardH + gapY);
        const paras = [];
        if (c.tag || c.num) {
          paras.push(makePara(String(c.tag || c.num).toUpperCase(), { sz: 1000, bold: true, color: theme.accent }));
        }
        paras.push(makePara(c.title || '', { sz: 1450, bold: true, color: theme.ink, font: 'Be Vietnam Pro', spcBef: 180 }));
        if (c.body) {
          paras.push(makePara(c.body, { sz: 1200, color: theme.muted, spcBef: 240 }));
        }
        if (c.stat) {
          paras.push(makePara(c.stat, { sz: 1500, bold: true, color: theme.accent2, spcBef: 280 }));
        }
        shapes += makeTextBox(nextId(), `BentoCard${idx + 1}`, x, y, cardW, cardH, paras.join(''), {
          fill: idx === 0 ? theme.surfaceAlt : theme.surface,
          border: idx === 0 ? theme.accent : theme.border
        });
      });
      return shapes;
    }

    // 16. OBJECTIVES
    if (layout === 'objectives') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2500 });
      const items = (Array.isArray(slide.items) && slide.items.length)
        ? slide.items
        : (Array.isArray(slide.bullets) ? slide.bullets.map((b, i) => ({ num: String(i + 1).padStart(2, '0'), title: b, desc: '' })) : []);
      const count = Math.max(1, items.length);
      const gap = 140000;
      const rowH = Math.floor((4280000 - gap * (count - 1)) / count);
      const textSz = count > 5 ? 1100 : 1300;

      items.forEach((it, idx) => {
        const y = 1820000 + idx * (rowH + gap);
        shapes += makeRect(nextId(), `ObjRow${idx + 1}`, MX, y, CW, rowH, {
          fill: theme.surface, border: theme.border
        });
        shapes += makeRect(nextId(), `ObjStrip${idx + 1}`, MX, y, 100000, rowH, {
          prst: 'rect', fill: idx % 2 === 0 ? theme.accent : theme.accent2
        });
        shapes += makeTextBox(nextId(), `ObjNum${idx + 1}`, MX + 180000, y + 60000, 760000, rowH - 120000,
          makePara(it.num || String(idx + 1).padStart(2, '0'), { sz: 1700, bold: true, color: theme.accent, algn: 'ctr' }),
          { anchor: 'ctr' }
        );
        const paras = [
          makePara(it.title || '', { sz: textSz + 150, bold: true, color: theme.ink, font: 'Be Vietnam Pro' })
        ];
        if (it.desc) {
          paras.push(makePara(it.desc, { sz: textSz, color: theme.muted, spcBef: 140 }));
        }
        shapes += makeTextBox(nextId(), `ObjText${idx + 1}`, MX + 1020000, y + 40000, CW - 1180000, rowH - 80000, paras.join(''), {
          anchor: 'ctr'
        });
      });
      return shapes;
    }

    // 17. QUOTE-FOCUS
    if (layout === 'quote-focus') {
      shapes += makeTextBox(nextId(), 'QuoteKicker', MX, 660000, CW, 360000,
        makePara((slide.kicker || 'TRÍCH DẪN & TƯ TƯỞNG').toUpperCase(), {
          sz: 1100, bold: true, color: theme.accent2, algn: 'ctr'
        })
      );
      shapes += makeTextBox(nextId(), 'QuoteMark', MX, 1060000, CW, 920000,
        makePara('“', { sz: 7200, bold: true, color: theme.accent, font: 'Be Vietnam Pro', algn: 'ctr' })
      );
      shapes += makeTextBox(nextId(), 'QuoteBody', MX + 600000, 1980000, CW - 1200000, 2600000,
        makePara(slide.quote || slide.title || '', {
          sz: 2600, italic: true, color: theme.ink, font: 'Be Vietnam Pro', algn: 'ctr'
        }),
        { anchor: 'ctr' }
      );
      shapes += makeRect(nextId(), 'QuoteRule', Math.floor((SLIDE_W - 1400000) / 2), 4740000, 1400000, 55000, {
        fill: theme.accent
      });
      if (slide.author) {
        shapes += makeTextBox(nextId(), 'QuoteAuthor', MX, 4940000, CW, 560000,
          makePara(`— ${slide.author}`, { sz: 1500, bold: true, color: theme.accent2, algn: 'ctr' })
        );
      }
      if (slide.note) {
        shapes += makeTextBox(nextId(), 'QuoteNote', MX + 900000, 5540000, CW - 1800000, 520000,
          makePara(slide.note, { sz: 1150, color: theme.muted, algn: 'ctr' })
        );
      }
      return shapes;
    }

    // 18. QUIZ-CHECK
    if (layout === 'quiz-check') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleY: 740000, titleH: 980000, titleSz: 2300 });
      const opts = Array.isArray(slide.options) ? slide.options : [];
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      const cols = 2;
      const rows = Math.max(1, Math.ceil(opts.length / 2));
      const gapX = 280000;
      const gapY = 220000;
      const cardW = Math.floor((CW - gapX) / cols);
      const cardH = Math.floor((3460000 - gapY * (rows - 1)) / rows);

      opts.forEach((optText, idx) => {
        const r = Math.floor(idx / 2);
        const c = idx % 2;
        const x = MX + c * (cardW + gapX);
        const y = 1920000 + r * (cardH + gapY);
        const isCorrect = idx === slide.answer;

        shapes += makeRect(nextId(), `QuizOpt${idx + 1}`, x, y, cardW, cardH, {
          fill: isCorrect ? theme.surfaceAlt : theme.surface,
          border: isCorrect ? theme.accent : theme.border,
          borderW: isCorrect ? 22225 : 12700
        });
        shapes += makeTextBox(nextId(), `QuizLetter${idx + 1}`, x + 140000, y + 180000, 520000, 520000,
          makePara(letters[idx] || String(idx + 1), { sz: 1400, bold: true, color: theme.onAccent, algn: 'ctr' }),
          { fill: isCorrect ? theme.accent : theme.accent2, anchor: 'ctr', padX: 30000, padY: 30000 }
        );
        shapes += makeTextBox(nextId(), `QuizText${idx + 1}`, x + 780000, y + 100000, cardW - 920000, cardH - 200000,
          makePara(optText, { sz: 1350, bold: isCorrect, color: theme.ink }),
          { anchor: 'ctr' }
        );
      });

      const ansIdx = typeof slide.answer === 'number' && opts[slide.answer] ? slide.answer : -1;
      const hintText = ansIdx >= 0
        ? `✓ Gợi ý đáp án: ${letters[ansIdx]}. ${opts[ansIdx]}${slide.note ? ` — ${slide.note}` : ''}`
        : (slide.note || 'Thảo luận nhanh tại lớp trước khi công bố đáp án.');
      shapes += makeTextBox(nextId(), 'QuizHint', MX, 5580000, CW, 560000,
        makePara(hintText, { sz: 1150, bold: true, color: theme.accent }),
        { fill: theme.surface, border: theme.accent, anchor: 'ctr' }
      );
      return shapes;
    }

    // 19. AGENDA
    if (layout === 'agenda') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2600 });
      const items = Array.isArray(slide.items) ? slide.items : [];
      const count = Math.max(1, items.length);
      const cols = count >= 4 ? 2 : 1;
      const rows = Math.ceil(count / cols);
      const gapX = 300000;
      const gapY = 160000;
      const cardW = Math.floor((CW - gapX * (cols - 1)) / cols);
      const cardH = Math.floor((4240000 - gapY * (rows - 1)) / rows);

      items.forEach((it, idx) => {
        const c = Math.floor(idx / rows);
        const r = idx % rows;
        const x = MX + c * (cardW + gapX);
        const y = 1840000 + r * (cardH + gapY);
        shapes += makeRect(nextId(), `AgendaCard${idx + 1}`, x, y, cardW, cardH, {
          fill: theme.surface, border: theme.border
        });
        shapes += makeTextBox(nextId(), `AgendaNum${idx + 1}`, x + 120000, y + 60000, 680000, cardH - 120000,
          makePara(it.num || String(idx + 1).padStart(2, '0'), { sz: 1800, bold: true, color: theme.accent, font: 'Be Vietnam Pro', algn: 'ctr' }),
          { anchor: 'ctr' }
        );
        const paras = [
          makePara(it.title || '', { sz: 1350, bold: true, color: theme.ink, font: 'Be Vietnam Pro' })
        ];
        if (it.desc) {
          paras.push(makePara(it.desc, { sz: 1150, color: theme.muted, spcBef: 140 }));
        }
        shapes += makeTextBox(nextId(), `AgendaBody${idx + 1}`, x + 860000, y + 40000, cardW - 980000, cardH - 80000, paras.join(''), {
          anchor: 'ctr'
        });
      });
      return shapes;
    }

    // 20. SUMMARY-CLOSING
    if (layout === 'summary-closing') {
      shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2800 });
      const lines = [];
      if (slide.subtitle) lines.push(slide.subtitle);
      if (Array.isArray(slide.bullets)) slide.bullets.forEach(b => lines.push(`✦  ${b}`));
      if (Array.isArray(slide.items)) slide.items.forEach(it => lines.push(`${it.num || '✦'} ${it.title}${it.desc ? ` — ${it.desc}` : ''}`));

      shapes += makeTextBox(nextId(), 'SummaryBody', MX, 1820000, CW, 2960000,
        makeBulletsText(lines.length ? lines : ['Tổng kết những điểm cốt lõi của bài thuyết trình.'], theme),
        { fill: theme.surface, border: theme.border }
      );
      const closingText = [slide.note, ...(Array.isArray(slide.meta) ? slide.meta : [])].filter(Boolean).join('   ·   ') || 'Cảm ơn Thầy/Cô và các bạn đã lắng nghe!';
      shapes += makeTextBox(nextId(), 'SummaryBanner', MX, 5020000, CW, 1040000,
        makePara(closingText, { sz: 1550, bold: true, color: theme.onAccent, font: 'Be Vietnam Pro', algn: 'ctr' }),
        { fill: theme.accent, anchor: 'ctr' }
      );
      return shapes;
    }

    // Generic fallback for any future/custom layout (zero truncation)
    shapes += makeStandardHeader(nextId, template, slide, theme, { titleSz: 2600 });
    const fallbackLines = [];
    if (slide.subtitle) fallbackLines.push(slide.subtitle);
    if (slide.lead) fallbackLines.push(slide.lead);
    if (slide.formula) fallbackLines.push(`Công thức: ${slide.formula}`);
    if (slide.quote) fallbackLines.push(`"${slide.quote}" — ${slide.author || ''}`);
    if (Array.isArray(slide.bullets)) slide.bullets.forEach(b => fallbackLines.push(`•  ${b}`));
    if (Array.isArray(slide.items)) slide.items.forEach(i => fallbackLines.push(`${i.num || '•'}. ${i.title} — ${i.desc || ''}`));
    if (Array.isArray(slide.cards)) slide.cards.forEach(c => fallbackLines.push(`${c.tag || c.num || '•'} ${c.title}: ${c.body || ''}`));
    if (slide.note) fallbackLines.push(slide.note);
    shapes += makeTextBox(nextId(), 'FallbackBody', MX, 1840000, CW, 4240000, makeBulletsText(fallbackLines, theme));
    return shapes;
  }

  function buildSlideXml(template, slide, totalSlides, mediaMap) {
    const theme = getToneTheme(template.palette, slide.tone || 'light');
    const rels = [];
    const urlToRelId = new Map();

    const relCtx = {
      addImage(url) {
        if (!mediaMap || !mediaMap.has(url)) return null;
        const info = mediaMap.get(url);
        if (urlToRelId.has(url)) {
          return { rId: urlToRelId.get(url), width: info.width, height: info.height };
        }
        const rId = `rId${rels.length + 2}`; // rId1 is slideLayout1.xml
        urlToRelId.set(url, rId);
        rels.push({ rId, target: `../media/${info.fileName}` });
        return { rId, width: info.width, height: info.height };
      }
    };

    let shapeSeq = 2; // id=1 is nvGrpSpPr, id=2 is !!MorphAccentBar
    const nextId = () => ++shapeSeq;

    // Optional-chained Morph accent bar coordinates
    const ribbon = (slide.morph && slide.morph.ribbon) || { x: 6, y: 12, w: 14, opacity: 1 };
    const ribX = Math.round(((Number(ribbon.x) || 6) / 100) * SLIDE_W);
    const ribY = Math.round(((Number(ribbon.y) || 12) / 100) * SLIDE_H);
    const ribW = Math.max(900000, Math.round(((Number(ribbon.w) || 14) / 100) * SLIDE_W));

    const layoutShapes = buildLayoutShapes(nextId, template, slide, theme, relCtx);

    const footerText = `${template.subjectLabel || 'Fernora'} · ${slide.chapterName || ''}  |  ${String(slide.number || 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    const footerColor = slide.layout === 'hero-photo-bleed' ? 'D4DCE6' : theme.muted;
    const footerXml = makeTextBox(nextId(), 'Footer', MX, 6360000, CW, 340000,
      makePara(footerText, { sz: 950, color: footerColor })
    );

    const slideXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
       xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"
       xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
       xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main"
       xmlns:p159="http://schemas.microsoft.com/office/powerpoint/2015/09/main">
  <p:cSld>
    <p:bg>
      <p:bgPr>
        <a:solidFill><a:srgbClr val="${theme.bg}"/></a:solidFill>
        <a:effectLst/>
      </p:bgPr>
    </p:bg>
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr>
        <a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm>
      </p:grpSpPr>
      <p:sp>
        <p:nvSpPr><p:cNvPr id="2" name="!!MorphAccentBar"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="${ribX}" y="${ribY}"/><a:ext cx="${ribW}" cy="55000"/></a:xfrm>
          <a:prstGeom prst="roundRect"><a:avLst/></a:prstGeom>
          <a:solidFill><a:srgbClr val="${theme.accent}"/></a:solidFill>
          <a:ln><a:noFill/></a:ln>
        </p:spPr>
      </p:sp>
      ${layoutShapes}
      ${footerXml}
    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
  <mc:AlternateContent>
    <mc:Choice Requires="p159">
      <p:transition spd="med" p14:dur="800"><p159:morph option="byObject"/></p:transition>
    </mc:Choice>
    <mc:Fallback>
      <p:transition spd="med"><p:fade/></p:transition>
    </mc:Fallback>
  </mc:AlternateContent>
</p:sld>`;

    return { slideXml, rels };
  }

  // ---------- Main Async Export Function ----------
  async function exportDeckToPPTX(template, slides, optionsOrFileName) {
    const safeTemplate = template || { id: 'fernora', title: 'Fernora Deck', subjectLabel: 'Học thuật', palette: {} };
    const safeSlides = Array.isArray(slides) ? slides : [];
    const opts = typeof optionsOrFileName === 'string'
      ? { fileName: optionsOrFileName }
      : (optionsOrFileName && typeof optionsOrFileName === 'object' ? optionsOrFileName : {});

    const fileName = opts.fileName || `fernora-${safeTemplate.id || 'deck'}-${safeSlides.length}slides.pptx`;
    const embedImages = opts.embedImages !== false;
    const onProgress = typeof opts.onProgress === 'function' ? opts.onProgress : null;
    const shouldDownload = opts.download !== false;

    const uniqueUrls = embedImages ? collectUniqueImageUrls(safeTemplate, safeSlides) : [];
    const totalSteps = Math.max(1, uniqueUrls.length + safeSlides.length);
    let doneSteps = 0;
    const reportProgress = () => {
      if (onProgress) {
        try { onProgress(Math.min(doneSteps, totalSteps), totalSteps); } catch (_) {}
      }
    };

    reportProgress();

    let mediaMap = new Map();
    let failedImages = 0;

    if (embedImages && uniqueUrls.length > 0) {
      const fetched = await fetchAllImages(uniqueUrls, () => {
        doneSteps += 1;
        reportProgress();
      });
      mediaMap = fetched.mediaMap;
      failedImages = fetched.failedImages;
    }

    const entries = [];
    const slideOverrides = [];
    const sldIdList = [];
    const presRels = [
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>'
    ];

    // Add deduplicated media binaries
    for (const info of mediaMap.values()) {
      entries.push({
        name: `ppt/media/${info.fileName}`,
        data: info.bytes
      });
    }

    // Build all slides
    for (let idx = 0; idx < safeSlides.length; idx++) {
      const slide = safeSlides[idx];
      const n = idx + 1;
      const rId = `rId${n + 1}`;
      slideOverrides.push(`<Override PartName="/ppt/slides/slide${n}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`);
      sldIdList.push(`<p:sldId id="${256 + n}" r:id="${rId}"/>`);
      presRels.push(`<Relationship Id="${rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${n}.xml"/>`);

      const { slideXml, rels } = buildSlideXml(safeTemplate, slide, safeSlides.length, mediaMap);
      entries.push({
        name: `ppt/slides/slide${n}.xml`,
        data: slideXml
      });

      const relNodes = [
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>',
        ...rels.map(r => `  <Relationship Id="${r.rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="${xmlEsc(r.target)}"/>`)
      ];
      entries.push({
        name: `ppt/slides/_rels/slide${n}.xml.rels`,
        data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${relNodes.join('\n')}
</Relationships>`
      });

      doneSteps += 1;
      reportProgress();
    }

    entries.push({
      name: '[Content_Types].xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="jpg" ContentType="image/jpeg"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>
  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
  ${slideOverrides.join('\n  ')}
</Types>`
    });

    entries.push({
      name: '_rels/.rels',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`
    });

    entries.push({
      name: 'ppt/presentation.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
                xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>
  <p:sldIdLst>${sldIdList.join('')}</p:sldIdLst>
  <p:sldSz cx="${SLIDE_W}" cy="${SLIDE_H}"/>
  <p:notesSz cx="6858000" cy="9144000"/>
</p:presentation>`
    });

    entries.push({
      name: 'ppt/_rels/presentation.xml.rels',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${presRels.join('\n  ')}
</Relationships>`
    });

    entries.push({
      name: 'ppt/slideMasters/slideMaster1.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
             xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
             xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/></p:spTree></p:cSld>
  <p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>
  <p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst>
</p:sldMaster>`
    });

    entries.push({
      name: 'ppt/slideMasters/_rels/slideMaster1.xml.rels',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>
</Relationships>`
    });

    entries.push({
      name: 'ppt/slideLayouts/slideLayout1.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
             xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
             xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank">
  <p:cSld name="Blank"><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr/></p:spTree></p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sldLayout>`
    });

    entries.push({
      name: 'ppt/slideLayouts/_rels/slideLayout1.xml.rels',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>
</Relationships>`
    });

    const pal = safeTemplate.palette || {};
    entries.push({
      name: 'ppt/theme/theme1.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="FernoraTheme">
  <a:themeElements>
    <a:clrScheme name="Fernora">
      <a:dk1><a:srgbClr val="${hex6(pal.ink || '#161A1D')}"/></a:dk1>
      <a:lt1><a:srgbClr val="${hex6(pal.bg || '#F7F4EC')}"/></a:lt1>
      <a:dk2><a:srgbClr val="${hex6(pal.muted || '#5C646D')}"/></a:dk2>
      <a:lt2><a:srgbClr val="${hex6(pal.surface || '#EFECE3')}"/></a:lt2>
      <a:accent1><a:srgbClr val="${hex6(pal.accent || '#2B6E57')}"/></a:accent1>
      <a:accent2><a:srgbClr val="${hex6(pal.accent2 || '#C58B2A')}"/></a:accent2>
      <a:accent3><a:srgbClr val="5C7A67"/></a:accent3>
      <a:accent4><a:srgbClr val="C58B2A"/></a:accent4>
      <a:accent5><a:srgbClr val="3D5A80"/></a:accent5>
      <a:accent6><a:srgbClr val="8F4F4F"/></a:accent6>
      <a:hlink><a:srgbClr val="${hex6(pal.accent || '#2B6E57')}"/></a:hlink>
      <a:folHlink><a:srgbClr val="${hex6(pal.accent2 || '#C58B2A')}"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="FernoraFonts">
      <a:majorFont><a:latin typeface="Be Vietnam Pro"/><a:ea typeface=""/><a:cs typeface=""/></a:majorFont>
      <a:minorFont><a:latin typeface="Manrope"/><a:ea typeface=""/><a:cs typeface=""/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="FernoraFmt">
      <a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst>
      <a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst>
      <a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst>
      <a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
</a:theme>`
    });

    const blob = buildZipBlob(entries);
    doneSteps = totalSteps;
    reportProgress();

    if (shouldDownload && typeof document !== 'undefined' && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }

    return {
      fileName,
      slideCount: safeSlides.length,
      embeddedImages: mediaMap.size,
      failedImages,
      byteLength: blob.size
    };
  }

  global.FERNORA_PPTX = {
    exportDeckToPPTX
  };
})(typeof window !== 'undefined' ? window : globalThis);
