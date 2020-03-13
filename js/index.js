// document.getElementById('click').onclick = function() {
//   window.location.href = 'index2.html';
// };

let purpleAnimation = anime({
  targets: '.purple',
  keyframes: [
      {translateX: '0.5vw'},
      {translateY: '0.5vw'},
      {translateX: '0vw'},
      {translateY: '0vw'}
    ],
    duration: 5000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});

let redAnimation =  anime({
  targets: '.red',
  keyframes: [
      {translateX: '-0.2vw'},
      {translateY: '-0.2vw'},
      {translateX: '0vw'},
      {translateY: '0vw'}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});

let redPiece2Animation = anime({
  targets: '.redpiece2',
  keyframes: [
      {translateX: '-0.3vw'},
      {translateX: '0vw'},
    ],
    duration: 2000,
    loop: true
});

let purplePieceAnimation = anime({
  targets: '.purplepiece',
  keyframes: [
      {translateY: '0.3vw'},
      {translateY: '0vw'},
    ],
    duration: 3000,
    loop: true
});

let spiderAnimation = anime({
  targets: '.spider path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 8000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  autoplay: false,
  loop: true
});

let severalPieces= document.querySelector('.yellowpieces')
severalPieces.onmouseenter = spiderAnimation.play
