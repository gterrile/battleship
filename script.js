import Game from "./game.js"
import { createBoardSquares, userInputAttemp } from "./dom.js"
import areAllSunk from "./areAllSunk.js"
import { computerRandomAttack } from "./computer.js"

const game = new Game('german','compu')
console.log(game)
// DOM STUFF
createBoardSquares()

// SETUP OF THE GAME
game.player.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])
game.computer.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])

// GAME LOOP
{
  let attemp = null
  if (game.attacker == game.player) {
    attemp = userInputAttemp()
    console.log('user', attemp)
  } else {
    attemp = computerRandomAttack()
    console.log('computer', attemp)
  }
  let attackStatus = game.defender.board.receiveAttack(attemp)
  console.log(attackStatus)
  game.attacker.recordReply(attackStatus)
  if (areAllSunk(game.defender)) {
    game.winner = game.attacker
  }
  game.switchTurns()

} while(!game.winner);

