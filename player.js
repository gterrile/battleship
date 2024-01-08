import Gameboard from "./gameboard.js"
import Ship from "./ship.js"
import { numToArray } from "./game.js"

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
      patrolBoat: patrolBoat,
      isFullyPlaced: false
    }
  }
  sortFleet() {
    this.randomPlaceOnBoard(5)
    this.randomPlaceOnBoard(4)
    this.randomPlaceOnBoard(3)
    this.randomPlaceOnBoard(3)
    this.randomPlaceOnBoard(2)
  }

  // turn this function into a method.
  randomPlaceOnBoard(shipLength) {
    const squares = document.querySelectorAll(`.${this.name}`)
    let isPlaced = false
    do {
      const randomIndex = numToArray(Math.floor(Math.random() * 100))
      const r = randomIndex[0]
      const c = randomIndex[1]
      let randomCoordinates = []
      
      let allValid = true
      for (let i = c; i < (c + shipLength); i++) {
        if (this.board.board[r][i] != 0) {
          allValid = false
        }
      }
  
      if (c <= (10 - shipLength) && allValid) {
        for (let i = c; i < (c + shipLength); i++) {
          let coordinate = [r, i]
          // add a class on the dom
          let id = (r * 10) + i
          squares[id].classList.add('ship')
          randomCoordinates.push(coordinate)
          this.board.placeShip(randomCoordinates)
          this.fleet.carrier.setCoordinates(randomCoordinates)
          isPlaced = true
        }
      } else {
        isPlaced = false
      }
    }
    while (!isPlaced)
  }

  attack(r,c) {
    const attemp = [r,c]
    return attemp
  }
  recordReply(reply) {
    this.attemps.push(reply)
  }
}

