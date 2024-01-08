import Player from "./player.js"

export default class Game {
  constructor() {
    this.player = new Player('player')
    this.computer = new Player('computer')
    this.winner = null
  }
}

export function numToArray(num) {
  let row = parseInt(num / 10)
  let col = num % 10
  return [row, col] 
}

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