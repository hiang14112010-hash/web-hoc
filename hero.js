(() => {
  'use strict';

  // Compatibility shims for app.js (zero WebGL, zero rAF loops)
  window.__fernoraRevealUI = () => {};
  window.__fernoraValley = { stopHoverTransition() {} };

  const soundBtn = document.getElementById('sound');
  let ambientAudio = null;

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      if (!ambientAudio) {
        ambientAudio = new Audio('valley/audio/ge-ambient.mp3');
        ambientAudio.loop = true;
        ambientAudio.volume = 0.28;
        ambientAudio.preload = 'auto';
        ambientAudio.addEventListener('pause', () => {
          soundBtn.setAttribute('aria-pressed', 'false');
        });
        ambientAudio.addEventListener('play', () => {
          soundBtn.setAttribute('aria-pressed', 'true');
        });
      }

      if (ambientAudio.paused) {
        ambientAudio.play().then(() => {
          soundBtn.setAttribute('aria-pressed', 'true');
        }).catch(() => {
          soundBtn.setAttribute('aria-pressed', 'false');
        });
      } else {
        ambientAudio.pause();
        soundBtn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  const openHowtoBtn = document.getElementById('open-howto');
  if (openHowtoBtn) {
    openHowtoBtn.addEventListener('click', () => {
      const navHowto = document.getElementById('nav-howto');
      if (navHowto) navHowto.click();
    });
  }
})();
