import Player from "./player.js"
import { computerRandomAttack } from "./computer.js"
import areAllSunk from "./areAllSunk.js"

export default class Game {
  constructor() {
    this.player = new Player('player')
    this.computer = new Player('computer')
    this.winner = null
  }
  // switchTurns() {
  //   if (this.attacker == this.player) {
  //     this.attacker = this.computer
  //     this.defender = this.player
  //   } else {
  //     this.attacker == this.player
  //     this.defender = this.computer
  //   }
  // }
}

export function gameScript(game, square) {
      // player attacks
      let attackStatus = game.computer.board.receiveAttack(convertToArraySyntax(square.id))
      game.player.recordReply(attackStatus)
      console.log('player:', attackStatus.attemp, attackStatus.status)
      // check for end of the game
      if (areAllSunk(game.computer)) {
        game.winner = game.player
        return
      } else {
        // computer attacks
        let attackStatus = game.player.board.receiveAttack(computerRandomAttack())
        game.computer.recordReply(attackStatus)
        console.log('computer:', attackStatus.attemp, attackStatus.status)
        // check for end of the game
        if (areAllSunk(game.player)) {
          game.winner = game.computer
          return
        }
      }
}

function convertToArraySyntax(num) {
  let row = parseInt(num / 10)
  let col = num % 10
  return [row, col] 
}