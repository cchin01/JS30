window.addEventListener('keydown', playHandler)
//play music

function playHandler(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }


  //dom style
  const dom = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (dom) {
    dom.classList.add('playing');
  }
  console.log(audio, dom);
}


window.addEventListener('keyup', function removeTransition(c) {
  const removePlaying = document.querySelector(`div[data-key="${c.keyCode}"]`)
  if (removePlaying) {
    removePlaying.classList.remove('playing')
  }
})





