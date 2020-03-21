
document.querySelector('.redpiece path').onmouseenter = function() {
  document.querySelector('.redpiece path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  document.querySelector('.redpiece path').style.transition = `all 1500ms ease`
}
document.querySelector('.redpiece path').onmouseleave = function() {
  document.querySelector('.redpiece path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}


document.querySelector('.redpiece2 path').onmouseenter= function() {
  document.querySelector('.redpiece2 path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  document.querySelector('.redpiece2 path').style.transition = `all 1500ms ease`
}
document.querySelector('.redpiece2 path').onmouseleave= function() {
  document.querySelector('.redpiece2 path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}



document.querySelector('.purplepiece path').onmouseenter = function() {
  document.querySelector('.purplepiece path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  document.querySelector('.purplepiece path').style.transition = `all 1500ms ease`
}
document.querySelector('.purplepiece path').onmouseleave = function() {
  document.querySelector('.purplepiece path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}

document.querySelector('.purplepiece2 path').onmouseenter = function() {
  document.querySelector('.purplepiece2 path').style.fill = `white`
  document.querySelector('.purplepiece2 path').style.transition = `all 500ms ease`
}
document.querySelector('.purplepiece2 path').onmouseleave = function() {
  document.querySelector('.purplepiece2 path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}

// document.querySelector('body').onmouseenter= function() {
//   document.querySelector('.body').style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
//   document.querySelector('body').style.transition = `all 2000ms ease`
// }
// document.querySelector('body').onmouseleave= function() {
//   document.querySelector('body').style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
// }



let fearAnimation = anime({
  targets: '.fear path',
  strokeDashoffset: [anime.setDashoffset, 2000],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  autoplay: false,
  loop: true
});

document.querySelector('.redpiece').onmouseenter = fearAnimation.play

let redPiece2Animation = anime({
  targets: '.redpiece2',
  keyframes: [
      {translateX: '-0.3vw'},
      {translateX: '0vw'},
    ],
    duration: 2000,
    loop: true
});
