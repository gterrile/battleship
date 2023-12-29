import Player from "./player.js"

export default class Game {
  constructor(turn = null) {
    this.player = new Player('playerOne')
    this.computer = new Player('computer')
    this.turn = turn
  }
  switchTurns() {
    if (this.turn == null) return this.turn == this.player
    if (this.turn == this.player) {
      return this.turn == this.computer
    } else {
      return this.turn == this.player
    }
  }
}
