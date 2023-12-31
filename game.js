import Player from "./player.js"

export default class Game {
  constructor(player, oponent, turn = null) {
    this.player = new Player(player)
    this.computer = new Player(oponent)
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
