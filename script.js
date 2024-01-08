import Game from "./game.js"
import { createBoardSquares, userInputAttemp, updateBoard } from "./dom.js"
import { numToArray } from "./game.js"
import { shipPlacement } from "./shipPlacement.js"
import areAllSunk from "./areAllSunk.js"

// Create main variable game
let game = new Game()


function attackOn(square) {
  const reply = game.computer.board.receiveAttack(numToArray(square.id))
  game.player.recordReply(reply)
  // from here build the game loop.
}

function placeOnBoard(shipLength) {
  const computerSquares = document.querySelectorAll('.computer')
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
        // add a class on the dom
        let id = (r * 10) + i
        computerSquares[id].classList.add('ship')
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

// hover over player board.
// If fleet is not placed, it will allow player to arrangle the fleet
// If fleet is place it will do nothing
const playerSquares = document.querySelectorAll('.player')
playerSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    if (!game.player.fleet.isFullyPlaced) {
      shipPlacement(square, game)
    }
  })
  square.addEventListener('mouseleave', () => {
    if (!game.player.fleet.isFullyPlaced) {
      updateBoard(game)
    }
  })
})

// Only once players fleet is set will allow user to attack on hovered square
const computerSquares = document.querySelectorAll('.computer')
computerSquares.forEach(square => {
  // square.addEventListener('onmouseover', () => {
  //   if (game.player.fleet.isFullyPlaced) {
  //     square.style.backgroundColor = 'tomato'
  //   }
  // })
  // square.addEventListener('onmouseout', () => {
  //   updateBoard(game)
  //   if (square.classList.contains('ship')) {
  //     square.style.backgroundColor = 'black'
  //   } else {
  //     square.style.backgroundColor = 'lightskyblue'
  //   }
  // })
  square.addEventListener('click', () => {
    if (!game.winner) {
      if (game.player.fleet.isFullyPlaced) {
        attackOn(square)
        updateBoard(game)
        if (areAllSunk(game.computer)) {
          game.winner = game.player
          console.log('winner')
        }
      }
    }
  })
})



