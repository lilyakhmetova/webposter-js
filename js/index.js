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


//
// document.querySelector('.redpiece2 path').onclick = function() {
//   document.querySelector('.redpiece2 path').style.fill = 'white'
// }

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
  duration: 7000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  // autoplay: false,
  loop: true
});



// let yellowPieces = document.querySelector('.yellowpieces')
// yellowPieces.onmouseenter = spiderAnimation.play

let bluePiecesAnimation = anime({
  targets: '.bluepieces',
  keyframes: [
      {translateY: '0.1vw'},
      {translateY: '0vw'},
    ],
    duration: 3000,
    loop: true
});

let yellowPiecesAnimation = anime({
  targets: '.yellowpieces',
  keyframes: [
      {translateX: '0.2vw'},
      {translateX: '0vw'},
    ],
    duration: 2500,
    loop: true
});


let snakeAnimation = anime({
  targets: '.snake path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 7000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  // autoplay: false,
  loop: true
});


// document.querySelector('.red').onmouseenter = () => {
//   snakeAnimation.play
//   dontWantAnimation.play
// }

let fieldAnimation = anime({
  targets: '.field path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 7000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  // autoplay: false,
  loop: true
});
//
// document.querySelector('.purple').onmouseenter = fieldAnimation.play

let dontWantAnimation = anime({
  targets: '.dontwant path',
  strokeDashoffset: [anime.setDashoffset, 5000],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  // autoplay: false,
  loop: true
});

// let fearAnimation = anime({
//   targets: '.fear path',
//   strokeDashoffset: [anime.setDashoffset, 2000],
//   easing: 'easeInOutSine',
//   duration: 5000,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: true
// });
//
// document.querySelector('.red').onmouseenter = dontWantAnimation.play


let dontWant2Animation = anime({
  targets: '.dontwant2 path',
  strokeDashoffset: [anime.setDashoffset, 2000],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

let notAfraidAnimation = anime({
  targets: '.notafraid path',
  strokeDashoffset: [anime.setDashoffset, 2000],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

let warAnimation = anime({
  targets: '.war path',
  strokeDashoffset: [anime.setDashoffset, 1000],
  easing: 'easeInOutSine',
  duration: 4000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  // autoplay: false,
  loop: true
});


document.querySelector('.bluepiece path').onmouseenter = function() {
  document.querySelector('.bluepiece path').style.display = `none`
}
document.querySelector('.redpiece3 path').onmouseenter = function() {
  document.querySelector('.redpiece3 path').style.display = `none`
}
document.querySelector('.yellowpiece path').onmouseenter = function() {
  document.querySelector('.yellowpiece path').style.display = `none`
}
document.querySelector('.yellowpiece2 path').onmouseenter = function() {
  document.querySelector('.yellowpiece2 path').style.display = `none`
}

document.querySelector('.war path').onmouseenter = function() {
  document.querySelector('.war path').style.stroke = `white`
}

document.querySelector('.war path').onmouseleave = function() {
  document.querySelector('.war path').style.stroke = `black`
}






//
// const position = { x: 0, y: 0 }
//
// let dragFunction = interact('.purplepiece2').draggable({
//   listeners: {
//     start (event) {
//       console.log(event.type, event.target)
//     },
//     move (event) {
//       position.x += event.dx
//       position.y += event.dy
//
//       event.target.style.transform =
//         `translate(${position.x}px, ${position.y}px)`
//     },
//   }
// })
