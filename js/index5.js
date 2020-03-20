
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



// let notAfraidNumber = 10
//
// for (let i = 0; i < notAfraidNumber; i++) {
// let newNotAfraid = document.createElement('svg .notafraid')
//
// newNotAfraid.style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
// document.body.append(newNotAfraid)
// }
