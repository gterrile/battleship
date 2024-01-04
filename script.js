import Game from "./game.js"
import { createBoardSquares, userInputAttemp } from "./dom.js"



const game = new Game('german','compu')

// DOM STUFF
createBoardSquares()
userInputAttemp(game)

// SETUP OF THE GAME
game.player.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])
game.computer.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])

// GAME LOOP


// let attackStatus = game.computer.board.receiveAttack(attemp)
// console.log(attackStatus)
// game.player.recordReply(attackStatus)
// if (areAllSunk(game.defender)) {
//   game.winner = game.attacker
// }


