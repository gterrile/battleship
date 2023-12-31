import Game from "./game.js"
import { createBoardSquares } from "./dom.js"
import areAllSunk from "./areAllSunk.js"

const game = new Game('german','compu')

// DOM STUFF
createBoardSquares()

// SETUP OF THE GAME
game.player.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])
game.computer.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])

// GAME LOOP
do {
  let attemp = userInputAttemp()
  let attackStatus = game.defender.board.receiveAttack(attemp)
  attacker.recordReply(attackStatus)
  if (areAllSunk(defender)) {
    game.winner = game.attacker
    return
  }
  switchTurns()
} while(!game.winner)



