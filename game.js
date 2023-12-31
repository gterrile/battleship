import Player from "./player.js"

export default class Game {
  constructor() {
    this.player = new Player('player')
    this.computer = new Player('computer')
    this.attacker = this.player
    this.defender = this.computer
    this.winner = null
  }
  switchTurns() {
    if (this.attacker == this.player) {
      this.attacker = this.computer
      this.defender = this.player
    } else {
      this.attacker == this.player
      this.defender = this.computer
    }
  }
}
