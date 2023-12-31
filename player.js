import Gameboard from "./gameboard.js"
import Ship from "./ship.js"

export default class Player {
  constructor(name) {
    this.name = name,
    this.board = new Gameboard()
    this.fleet = this.generateFleet()
    this.attemps = []
  }
  generateFleet() {
    const carrier = new Ship(5)
    const battleship = new Ship(4)
    const destroyer = new Ship(3)
    const submarine = new Ship(3)
    const patrolBoat = new Ship(2)
    return {
      carrier: carrier,
      battleship: battleship,
      destroyer: destroyer,
      submarine: submarine,
      patrolBoat: patrolBoat
    }
  }
  attack(r,c) {
    const attemp = [r,c]
    return attemp
  }
  recordReply(reply) {
    this.attemps.push(reply)
  }
}

