import Game from "./game.js"
import { createBoardSquares, userInputAttemp, updateBoard } from "./dom.js"
import { numToArray } from "./game.js"
import { shipPlacement } from "./shipPlacement.js"

// Create main variable game
let game = new Game()


function attackOn(square) {
  console.log('attack on square', square)
  // from here build the game loop.
}

function placeOnBoard(shipLength) {
  
  let isPlaced = false
  do {
    const randomIndex = numToArray(Math.floor(Math.random() * 100))
    const r = randomIndex[0]
    const c = randomIndex[1]
    let randomCoordinates = []
    
    let allValid = true
    for (let i = c; i < (c + shipLength); i++) {
      if (game.computer.board.board[r][i] != 0) {
        allValid = false
      }
    }

    if (c <= (10 - shipLength) && allValid) {
      for (let i = c; i < (c + shipLength); i++) {
        let coordinate = [r, i]
        randomCoordinates.push(coordinate)
        game.computer.board.placeShip(randomCoordinates)
        game.computer.fleet.carrier.setCoordinates(randomCoordinates)
        isPlaced = true
      }
    } else {
      isPlaced = false
    }
  }
  while (!isPlaced)
 

  
}

function computerFleet() {
  placeOnBoard(5)
  placeOnBoard(4)
  placeOnBoard(3)
  placeOnBoard(3)
  placeOnBoard(2)
}

// DOM STUFF
createBoardSquares()
computerFleet()
updateBoard(game)
console.log(game)
////////////
// Execution

const playerSquares = document.querySelectorAll('.player')
playerSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    if (!game.player.fleet.isFullyPlaced) {
      shipPlacement(square, game)
    }
  })
  square.addEventListener('mouseleave', () => {
    updateBoard(game)
  })
})

const computerSquares = document.querySelectorAll('.computer')
computerSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    if (game.player.fleet.isFullyPlaced) {
      square.style.backgroundColor = 'tomato'
      square.addEventListener('click', () => {
        attackOn(square)
      })
    }
  })
  square.addEventListener('mouseleave', () => {
    square.style.backgroundColor = 'lightskyblue'
  })
})



