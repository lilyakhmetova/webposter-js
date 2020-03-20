
document.querySelector('.redpiece path').onmouseenter = function() {
  document.querySelector('.redpiece path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}


document.querySelector('.redpiece2 path').onmouseenter= function() {
  document.querySelector('.redpiece2 path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}


document.querySelector('.purplepiece path').onmouseenter = function() {
  document.querySelector('.purplepiece path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}

document.querySelector('.purplepiece2 path').onmouseenter = function() {
  document.querySelector('.purplepiece2 path').style.fill = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
}


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
