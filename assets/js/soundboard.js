const soundboard = {
  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  kickElement: null,
  hihatElement: null,
  snareElement: null,
  wobbleElement: null,
  vocalElement: null,
  scratchElement: null,

  /**
   * Propriétés liées à l'Audio
   * les valeurs appropriées seront données par la la méthode "preloadSamples"
   */
  kickAudio: null,
  hihatAudio: null,
  snareAudio: null,
  wobbleAudio: null,
  vocalAudio: null,
  scratchAudio: null,

  /**
   * Méthode permettant d'initialiser la sound board
   */
  init: function () {
    console.log("soundboard.init");
    soundboard.definePads();
    soundboard.preloadSamples();
    soundboard.attachEvents();
  },

  /**
   * Méthode permettant de sélectionner dans le DOM
   * les différents éléments pads
   */
  definePads: function () {
    soundboard.kickElement = document.querySelector(".pad-1");
    soundboard.hihatElement = document.querySelector(".pad-2");
    soundboard.snareElement = document.querySelector(".pad-3");
    soundboard.wobbleElement = document.querySelector(".pad-4");
    soundboard.vocalElement = document.querySelector(".pad-5");
    soundboard.scratchElement = document.querySelector(".pad-6");
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function () {
    soundboard.kickAudio = new Audio("assets/audio/kick.opus");
    soundboard.hihatAudio = new Audio("assets/audio/hihat.opus");
    soundboard.snareAudio = new Audio("assets/audio/snare.opus");
    soundboard.wobbleAudio = new Audio("assets/audio/wobble.opus");
    soundboard.vocalAudio = new Audio("assets/audio/voice.opus");
    soundboard.scratchAudio = new Audio("assets/audio/scratch.opus");
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "kick" est pressé
   */
  handleKickClick: function () {
    soundboard.kickAudio.currentTime = 0;
    soundboard.kickAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "hi-hat" est appuyé
   */
  handleHihatClick: function () {
    soundboard.hihatAudio.currentTime = 0;
    soundboard.hihatAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "snare" est appuyé
   */
  handleSnareClick: function () {
    soundboard.snareAudio.currentTime = 0;
    soundboard.snareAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "wobble" est appuyé
   */
  handleWobbleClick: function () {
    soundboard.wobbleAudio.currentTime = 0;
    soundboard.wobbleAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "vocal" est appuyé
   */
  handleFxClick: function () {
    soundboard.vocalAudio.currentTime = 0;
    soundboard.vocalAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "scratch" est appuyé
   */
  handleScratchClick: function () {
    soundboard.scratchAudio.currentTime = 0;
    soundboard.scratchAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque n'importe quelle touche du clavier est pressée
   */
  handleKeyboard: function (event) {
    if (event.key === "a") {
      soundboard.kickElement.classList.add("active");
      soundboard.kickElement.click();
    }
    if (event.key === "z") {
      soundboard.hihatElement.classList.add("active");
      soundboard.hihatElement.click();
    }
    if (event.key === "e") {
      soundboard.snareElement.classList.add("active");
      soundboard.snareElement.click();
    }
    if (event.key === "q") {
      soundboard.wobbleElement.classList.add("active");
      soundboard.wobbleElement.click();
    }
    if (event.key === "s") {
      soundboard.vocalElement.classList.add("active");
      soundboard.vocalElement.click();
    }
    if (event.key === "d") {
      soundboard.scratchElement.classList.add("active");
      soundboard.scratchElement.click();
    }
  },

  handleKeyUp: function (event) {
    if (event.key === "a") {
      soundboard.kickElement.classList.remove("active");
    }
    if (event.key === "z") {
      soundboard.hihatElement.classList.remove("active");
    }
    if (event.key === "e") {
      soundboard.snareElement.classList.remove("active");
    }
    if (event.key === "q") {
      soundboard.wobbleElement.classList.remove("active");
    }
    if (event.key === "s") {
      soundboard.vocalElement.classList.remove("active");
    }
    if (event.key === "d") {
      soundboard.scratchElement.classList.remove("active");
    }
  },

  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function () {
    soundboard.kickElement.addEventListener(
      "click",
      soundboard.handleKickClick
    );

    soundboard.hihatElement.addEventListener(
      "click",
      soundboard.handleHihatClick
    );

    soundboard.snareElement.addEventListener(
      "click",
      soundboard.handleSnareClick
    );

    soundboard.wobbleElement.addEventListener(
      "click",
      soundboard.handleWobbleClick
    );

    soundboard.vocalElement.addEventListener("click", soundboard.handleFxClick);

    soundboard.scratchElement.addEventListener(
      "click",
      soundboard.handleScratchClick
    );
    document.addEventListener("keydown", soundboard.handleKeyboard);
    document.addEventListener("keyup", soundboard.handleKeyUp);
  },
};
