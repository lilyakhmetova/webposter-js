
//
// document.querySelector('body').onmouseenter = function() {
//   document.querySelector('body').style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
// }
//
// document.querySelector('body').onmouseleave = function() {
//   document.querySelector('body').style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
// }

let pieceNumber = 100

for (let i = 0; i < pieceNumber; i++) {
let newPiece = document.createElement('img')
newPiece.src = 'img/purplepiece2.svg'
newPiece.style.top = `${anime.random(-10,100)}vw`
newPiece.style.right = `${anime.random(-10,100)}vw`
newPiece.style.bottom = `${anime.random(-10,100)}vw`
newPiece.style.left = `${anime.random(-10,100)}vw`
newPiece.style.transform = `rotate(${anime.random(0,360)}deg`
newPiece.style.position= `absolute`

newPiece.onmouseenter = function(event) {

    event.target.style.transform = `translate(${anime.random(0,30)}vw,${anime.random(0,30)}vh)
    rotate(${anime.random(0,360)}deg)`
    event.target.style.width = `${anime.random(20,500)}px`
    event.target.style.height = `${anime.random(20,500)}px`


  }
document.body.append(newPiece)
}

let redPieceNumber = 50

for (let i = 0; i < redPieceNumber; i++) {
let newRedPiece = document.createElement('img')
newRedPiece.src = 'img/redpiece2.svg'
newRedPiece.style.top = `${anime.random(-10,100)}vw`
newRedPiece.style.right = `${anime.random(-10,100)}vw`
newRedPiece.style.bottom = `${anime.random(-10,100)}vw`
newRedPiece.style.left = `${anime.random(-10,100)}vw`
newRedPiece.style.width = `${anime.random(1,20)}vw`
newRedPiece.style.transform = `rotate(${anime.random(0,360)}deg`
newRedPiece.style.position= `absolute`

newRedPiece.onmouseenter = function(event) {

    event.target.style.transform = `translate(${anime.random(0,30)}vw,${anime.random(0,30)}vh)
    rotate(${anime.random(0,360)}deg)`
    event.target.style.width = `${anime.random(20,500)}px`
    event.target.style.height = `${anime.random(20,500)}px`


  }
document.body.append(newRedPiece)
}


document.querySelector('.purplepiece2').style.display = 'none'
document.querySelector('.redpiece2').style.display = 'none'
