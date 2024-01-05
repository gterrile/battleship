import Game from "./game.js"
import { createBoardSquares, userInputAttemp } from "./dom.js"
import { numToArray } from "./game.js"

let game = new Game('german','compu')
console.log(game)

// DOM STUFF
createBoardSquares()
shipPlacement()
//displayBoards()
//userInputAttemp(game)

// SETUP OF THE GAME
// game.player.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])
//game.computer.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])

// Place ships
// const playerBoard = document.getElementById('playerBoard')
function shipPlacement() {
  const playerSquares = document.querySelectorAll('.player')
  playerSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
      if (!game.player.fleet.carrier.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 5); i++) {
          let num = numToArray(i)
          shipCoordinates.push(num)
          playerSquares[i].style.backgroundColor = 'yellow'
        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip('c', shipCoordinates)
          game.player.fleet.carrier.setCoordinates(shipCoordinates)
          updateBoard(game)
          shipPlacement()
          console.log(game)
        })
      } else if (!game.player.fleet.battleship.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 4); i++) {
          let num = numToArray(i)
          shipCoordinates.push(num)
          playerSquares[i].style.backgroundColor = 'pink'
        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip('b', shipCoordinates)
          game.player.fleet.battleship.setCoordinates(shipCoordinates)
          updateBoard(game)
          console.log(game)
        })
      }
      square.addEventListener('mouseleave', () => {
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 5); i++) {
          playerSquares[i].style.backgroundColor = 'lightgray'
        }
      })
    })
  })
}

// Update board with fleet placement
function updateBoard(game) {
  const playerBoard = document.getElementById('playerBoard')
  // remove all squares
  while (playerBoard.firstChild) {
    playerBoard.removeChild(playerBoard.firstChild)
  }

  // check if empty of ship
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let id = (r * 10) + c
      const playerSquare = document.createElement('div')
      playerSquare.classList.add('square')
      playerSquare.classList.add('player')
      playerSquare.id = id
      playerBoard.appendChild(playerSquare)
      if (game.player.board.board[r][c] != 0) {
        playerSquare.classList.add('ship')
      } 
    }
  }
}