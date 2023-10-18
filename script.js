const rootElement = document.querySelector(":root");
const song = document.querySelector('#song');
const audioIcon = document.querySelector('.audio-icon');
let isPlaying = false;



function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollTop, scrollLeft);
  }
  
  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function() {}
  rootElement.style.scrollBehavior = 'smooth';
  //localStorage.setItem('opened', 'true');
  audioPlay();
}

function audioPlay() {
  song.volume = 0.3;
  audioIcon.style.display = "flex";
  song.play();
}

audioIcon.onclick = function() {
  if(isPlaying) {
    song.pause();
  } else {
    song.play();
  }
  isPlaying = !isPlaying;
}


//if(!localStorage.getItem('opened')) {
  disableScroll();
//}

