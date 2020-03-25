
const position = { x: 0, y: 0 }

let dragFunction = interact('.sticker1').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})




let dragFunction2 = interact('.sticker2').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})


let dragFunction3 = interact('.sticker3').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

document.querySelector('.purplepiece4 path').onmouseenter = function() {
  document.querySelector('.purplepiece4 path').style.fill = `white`
  document.querySelector('.purplepiece4 path').style.transition = `all 1500ms ease`
}
document.querySelector('.purplepiece4 path').onmouseleave = function() {
  document.querySelector('.purplepiece4 path').style.fill = `#8068E9`
}

document.querySelector('.notafraid').style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
document.querySelector('.notafraid').style.transform = `rotate(${anime.random(1,360)}deg`


document.querySelector('.unpleasant').style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
document.querySelector('.unpleasant').style.transform = `rotate(${anime.random(1,360)}deg`

let purplePiece4Animation = anime({
  targets: '.purplepiece4',
  keyframes: [
      {translateY: '0.1vw'},
      {translateY: '0vw'},
    ],
    duration: 3000,
    loop: true
});
