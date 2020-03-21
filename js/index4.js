

document.querySelector('body').onmouseover = function() {
  document.querySelector('body').style.background = `white`
  document.querySelector('body').style.transition = `all 1000ms ease`
}

document.querySelector('body').onmouseout = function() {
  document.querySelector('body').style.background = `black`
}
