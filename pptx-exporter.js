/**
 * Fernora Zero-Dependency OOXML (.pptx) Exporter
 * Generates a valid 16:9 PowerPoint presentation (.pptx) with all 40+ slides,
 * theme colors, editable text boxes, and Morph transition metadata for seamless import into Canva.
 */
(function (global) {
  'use strict';

  function xmlEsc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  function hex6(color) {
    const clean = String(color || '#111111').replace('#', '').trim();
    if (clean.length === 3) {
      return clean.split('').map(ch => ch + ch).join('').toUpperCase();
    }
    return clean.slice(0, 6).padEnd(6, '0').toUpperCase();
  }

  // CRC32 table for valid ZIP archives
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
      const dataBytes = typeof entry.data === 'string' ? encoder.encode(entry.data) : entry.data;
      const crc = crc32(dataBytes);

      const localHeader = new Uint8Array(30 + nameBytes.length);
      const lv = new DataView(localHeader.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0x0800, true); // UTF-8 flag
      lv.setUint16(8, 0, true); // STORE
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

  function extractSlideLines(slide) {
    const lines = [];
    if (slide.subtitle) lines.push(slide.subtitle);
    if (slide.lead) lines.push(slide.lead);
    if (slide.formula) lines.push(`Công thức: ${slide.formula}`);
    if (slide.quote) lines.push(`"${slide.quote}" — ${slide.author || ''}`);
    if (slide.note) lines.push(slide.note);
    if (slide.meta) lines.push(slide.meta.join(' · '));
    if (slide.bullets) slide.bullets.forEach(b => lines.push(`• ${b}`));
    if (slide.items) slide.items.forEach(i => lines.push(`${i.num}. ${i.title} — ${i.desc}`));
    if (slide.cards) slide.cards.forEach(c => lines.push(`${c.num || c.tag || '•'} ${c.title}: ${c.body}`));
    if (slide.annotations) slide.annotations.forEach(a => lines.push(`${a.tag}: ${a.text}`));
    if (slide.bars) slide.bars.forEach(b => lines.push(`${b.label}: ${b.val}%`));
    if (slide.insightBody) lines.push(slide.insightBody);
    if (slide.steps) slide.steps.forEach(s => lines.push(`${s.step} — ${s.title}: ${s.desc}`));
    if (slide.leftTitle) {
      lines.push(`[${slide.leftTitle}] ${(slide.leftPoints || []).join(' • ')}`);
      lines.push(`[${slide.rightTitle}] ${(slide.rightPoints || []).join(' • ')}`);
    }
    if (slide.options) {
      slide.options.forEach((o, i) => {
        const mark = i === slide.answer ? ' (Đáp án đúng)' : '';
        lines.push(`${['A', 'B', 'C', 'D'][i]}. ${o}${mark}`);
      });
    }
    return lines.slice(0, 8);
  }

  function buildSlideXml(template, slide, totalSlides) {
    const p = template.palette;
    const bgHex = hex6(p.bg);
    const inkHex = hex6(p.ink);
    const mutedHex = hex6(p.muted);
    const accentHex = hex6(p.accent);
    const accent2Hex = hex6(p.accent2);

    const kicker = xmlEsc(slide.kicker || template.subjectLabel);
    const title = xmlEsc(slide.title || slide.quote || template.title);
    const lines = extractSlideLines(slide);
    const footerText = xmlEsc(`${template.subjectLabel} · ${slide.chapterName}  |  ${String(slide.number).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`);

    // Shared persistent Morph accent bar coordinates (in EMUs for 16:9 12192000 x 6858000)
    const ribX = Math.round((slide.morph.ribbon.x / 100) * 12192000);
    const ribY = Math.round((slide.morph.ribbon.y / 100) * 6858000);
    const ribW = Math.max(1200000, Math.round((slide.morph.ribbon.w / 100) * 12192000));

    const bodyParagraphs = lines.map(line => `
      <a:p>
        <a:pPr marL="0" algn="l"><a:spcBef><a:spcPts val="800"/></a:spcBef></a:pPr>
        <a:r>
          <a:rPr lang="vi-VN" sz="1600" dirty="0">
            <a:solidFill><a:srgbClr val="${inkHex}"/></a:solidFill>
            <a:latin typeface="Manrope"/>
          </a:rPr>
          <a:t>${xmlEsc(line)}</a:t>
        </a:r>
      </a:p>`).join('');

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
       xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"
       xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
       xmlns:p14="http://schemas.microsoft.com/office/powerpoint/2010/main"
       xmlns:p159="http://schemas.microsoft.com/office/powerpoint/2015/09/main">
  <p:cSld>
    <p:bg>
      <p:bgPr>
        <a:solidFill><a:srgbClr val="${bgHex}"/></a:solidFill>
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
          <a:solidFill><a:srgbClr val="${accentHex}"/></a:solidFill>
          <a:ln><a:noFill/></a:ln>
        </p:spPr>
      </p:sp>
      <p:sp>
        <p:nvSpPr><p:cNvPr id="3" name="Kicker"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="720000" y="540000"/><a:ext cx="10752000" cy="420000"/></a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
          <a:noFill/>
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square"/>
          <a:lstStyle/>
          <a:p>
            <a:r>
              <a:rPr lang="vi-VN" sz="1100" b="1" dirty="0">
                <a:solidFill><a:srgbClr val="${accent2Hex}"/></a:solidFill>
                <a:latin typeface="Manrope"/>
              </a:rPr>
              <a:t>${kicker}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>
      <p:sp>
        <p:nvSpPr><p:cNvPr id="4" name="Title"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="720000" y="980000"/><a:ext cx="10752000" cy="1280000"/></a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
          <a:noFill/>
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square"/>
          <a:lstStyle/>
          <a:p>
            <a:r>
              <a:rPr lang="vi-VN" sz="3200" b="1" dirty="0">
                <a:solidFill><a:srgbClr val="${inkHex}"/></a:solidFill>
                <a:latin typeface="Be Vietnam Pro"/>
              </a:rPr>
              <a:t>${title}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>
      <p:sp>
        <p:nvSpPr><p:cNvPr id="5" name="Body"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="720000" y="2320000"/><a:ext cx="10752000" cy="3680000"/></a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
          <a:noFill/>
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square"/>
          <a:lstStyle/>
          ${bodyParagraphs || '<a:p><a:endParaRPr lang="vi-VN"/></a:p>'}
        </p:txBody>
      </p:sp>
      <p:sp>
        <p:nvSpPr><p:cNvPr id="6" name="Footer"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr>
        <p:spPr>
          <a:xfrm><a:off x="720000" y="6220000"/><a:ext cx="10752000" cy="360000"/></a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
          <a:noFill/>
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square"/>
          <a:lstStyle/>
          <a:p>
            <a:r>
              <a:rPr lang="vi-VN" sz="1000" dirty="0">
                <a:solidFill><a:srgbClr val="${mutedHex}"/></a:solidFill>
                <a:latin typeface="Manrope"/>
              </a:rPr>
              <a:t>${footerText}</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>
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
  }

  function exportDeckToPPTX(template, slides, fileName) {
    const entries = [];
    const slideOverrides = [];
    const sldIdList = [];
    const presRels = [
      `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>`
    ];

    slides.forEach((slide, idx) => {
      const n = idx + 1;
      const rId = `rId${n + 1}`;
      slideOverrides.push(`<Override PartName="/ppt/slides/slide${n}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`);
      sldIdList.push(`<p:sldId id="${256 + n}" r:id="${rId}"/>`);
      presRels.push(`<Relationship Id="${rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${n}.xml"/>`);

      entries.push({
        name: `ppt/slides/slide${n}.xml`,
        data: buildSlideXml(template, slide, slides.length)
      });
      entries.push({
        name: `ppt/slides/_rels/slide${n}.xml.rels`,
        data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>
</Relationships>`
      });
    });

    entries.push({
      name: '[Content_Types].xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
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
  <p:sldSz cx="12192000" cy="6858000"/>
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

    entries.push({
      name: 'ppt/theme/theme1.xml',
      data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="FernoraTheme">
  <a:themeElements>
    <a:clrScheme name="Fernora">
      <a:dk1><a:srgbClr val="${hex6(template.palette.ink)}"/></a:dk1>
      <a:lt1><a:srgbClr val="${hex6(template.palette.bg)}"/></a:lt1>
      <a:dk2><a:srgbClr val="${hex6(template.palette.muted)}"/></a:dk2>
      <a:lt2><a:srgbClr val="${hex6(template.palette.surface)}"/></a:lt2>
      <a:accent1><a:srgbClr val="${hex6(template.palette.accent)}"/></a:accent1>
      <a:accent2><a:srgbClr val="${hex6(template.palette.accent2)}"/></a:accent2>
      <a:accent3><a:srgbClr val="5C7A67"/></a:accent3>
      <a:accent4><a:srgbClr val="C58B2A"/></a:accent4>
      <a:accent5><a:srgbClr val="3D5A80"/></a:accent5>
      <a:accent6><a:srgbClr val="8F4F4F"/></a:accent6>
      <a:hlink><a:srgbClr val="${hex6(template.palette.accent)}"/></a:hlink>
      <a:folHlink><a:srgbClr val="${hex6(template.palette.accent2)}"/></a:folHlink>
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
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || `fernora-${template.id}-${slides.length}slides.pptx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  global.FERNORA_PPTX = {
    exportDeckToPPTX
  };
})(window);
