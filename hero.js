(() => {
  const loader = document.getElementById('loader');
  const ui = document.getElementById('ui');
  const sound = document.getElementById('sound');
  const go = document.getElementById('go');
  let introShown = false;

  const revealInterface = () => {
    if (introShown) return;
    introShown = true;
    ui.inert = false;
    ui.classList.add('on');
    loader.classList.add('gone');
  };
  window.__fernoraRevealUI = revealInterface;
  setTimeout(revealInterface, 2500);

  try {
    // Start the original scene outside its React page.
    let requireChunk;
    self.webpackChunk_N_E.push([[90001], {}, require => { requireChunk = require; }]);
    requireChunk(889);
    const Valley = window.__GE.et();
    const audioStore = window.__GE.Y();
    const valley = new Valley(
      document.getElementById('valley'),
      () => loader.classList.add('gone'),
      revealInterface
    );
    window.__fernoraValley = valley;

    sound.disabled = true;
    audioStore().initAudio().then(() => {
      sound.disabled = !audioStore().isInitialized;
    });
    sound.addEventListener('click', () => {
      const state = audioStore();
      if (!state.isInitialized) return;
      const context = state.audioManager.audioContext;
      if (state.isMuted && context.state === 'suspended') {
        context.resume().catch(console.error);
      }
      const muted = state.toggleMute();
      sound.setAttribute('aria-pressed', String(!muted));
    });

    go.addEventListener('pointerenter', () => valley.startHoverTransition());
    go.addEventListener('pointerleave', () => valley.stopHoverTransition());
  } catch (error) {
    console.error('Unable to start the valley.', error);
    loader.classList.add('gone');
    sound.disabled = true;
    revealInterface();
  }
})();
