import Game from "./game.js"
import { createBoardSquares, userInputAttemp, updateBoard } from "./dom.js"
import { numToArray } from "./game.js"
import { shipPlacement } from "./shipPlacement.js"

// Create main variable game
let game = new Game()
console.log(game)

// DOM STUFF
createBoardSquares()

////////////
// Execution

const playerSquares = document.querySelectorAll('.player')
playerSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    if (!game.player.fleet.isFullyPlaced) {
      shipPlacement(square, game)
    } else {
      console.log('remove pointer')
    }

  })
  square.addEventListener('mouseleave', () => {
    updateBoard(game)
  })
})

