import Gameboard from "./gameboard.js"
import Ship from "./ship.js"

export default class Player {
  constructor(name, board) {
    this.name = name,
    this.board = new Gameboard()
    this.fleet = this.generateFleet()
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
    return [r,c]
  }
}