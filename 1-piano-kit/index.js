

function playPiano(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // selecting audio
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);// selecting key

  if (!audio) return;
  audio.currentTime = 0; //rewind to the start
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // listen only to the transform property
  this.classList.remove("playing") // this = div key
}

const keys = document.querySelectorAll('.key'); // array of divs
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // Fired when a css transition has completed

window.addEventListener('keydown', playPiano)