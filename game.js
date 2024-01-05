import Player from "./player.js"
import { computerRandomAttack } from "./computer.js"
import areAllSunk from "./areAllSunk.js"
//import { updateBoard } from "./dom.js"

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
      let reply = game.computer.board.receiveAttack(numToArray(square.id))
      // hit or miss
      game.player.recordReply(reply)
      //updateBoard(reply, game.player.board)
      console.log('player:', reply.attemp, reply.status)
      // check for end of the game
      if (areAllSunk(game.computer)) {
        game.winner = game.player
        return
      } else {
        // computer attacks
        let reply = game.player.board.receiveAttack(computerRandomAttack())
        game.computer.recordReply(reply)
        console.log('computer:', reply.attemp, reply.status)
        console.log(game)
        // check for end of the game
        if (areAllSunk(game.player)) {
          game.winner = game.computer
          return
        }
      }
}

export function numToArray(num) {
  let row = parseInt(num / 10)
  let col = num % 10
  return [row, col] 
}

// function arrayToNum(r,c) {
//   if (r) {
//     let row = parseInt(r) * 10
//   }
//   if (c) {
//     let col = parseInt(c) * 10
//   }
//   return row + col
// }

// console.log(arrayToNum(1))

export function alreadyAttemped(game, square) {
  let arr = numToArray(square)
  let attemps = game.player.attemps
  for (let i = 0; i < attemps.length; i++) {
    if (arr[0] == attemps[i].attemp[0] && arr[1] == attemps[i].attemp[1]) {
      return true
    }
  }
  return false
}