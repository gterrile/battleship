import Game from "./game.js"
import { createBoardSquares } from "./dom.js"

const game = new Game('german','compu')
const german = game.player
const computer = game.computer
console.log(game)
createBoardSquares()

// console.log(playerOne.attack(1,2))
// console.log(computerRandomAttack())

german.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])
computer.board.placeShip('c',[[1,4],[2,4],[3,4],[4,4],[5,4]])
// german.fleet.carrier.setCoordinates([[1,4],[2,4],[3,4],[4,4],[5,4]])
// console.log(german)

let attack = german.attack(3,4)
let attackStatus = computer.board.receiveAttack(attack)
console.log(attackStatus)
german.recordReply(attackStatus)
console.log(german)
function checkIfAttempIsValid(player, attemp) {

}

function areAllSunk(user) {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      if (user.board.board[r][c] != 0) return false
    }
  }
  return true
}

console.log(areAllSunk(computer))