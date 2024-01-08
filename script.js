import Game from "./game.js"
import { createBoardSquares, updateBoard } from "./dom.js"
import { numToArray } from "./game.js"
import { shipPlacement } from "./shipPlacement.js"
import areAllSunk from "./areAllSunk.js"
import { computerRandomAttack } from "./computer.js"

// Create main variable game
let game = new Game()

// DOM STUFF
createBoardSquares()
game.computer.sortFleet()
updateBoard(game)

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

  square.addEventListener('click', () => {
    console.log(game)
    if (!game.winner) {
      if (game.player.fleet.isFullyPlaced) {
        // Player attack
        const reply = game.computer.board.receiveAttack(numToArray(square.id))
        game.player.recordReply(reply)
        updateBoard(game)
        // check for end of the game
        if (areAllSunk(game.computer)) {
          game.winner = game.player
          console.log('player winner')
        } else {
          // Computer attack
          const randomAttack = computerRandomAttack(game)
          const playerReply = game.player.board.receiveAttack(randomAttack)
          game.computer.recordReply(playerReply)
          updateBoard(game)
          // check for end of the game
          if (areAllSunk(game.player)) {
            game.winner = game.computer
            console.log('computer winner')
          }        
        }
      }
    }
  })
})



