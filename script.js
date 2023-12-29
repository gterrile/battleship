import Ship from './ship.js'





class Gameboard {
  // place ships
  // receiveAttack, determine if hit and record coordinates
  // check if all ships are sunk
  constructor (board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ]) {
    this.board = board
  }
  placeShip(ship, coordinates) {
    let r = coordinates[0]
    let c = coordinates[1]
    this.board[r][c] = ship
  }
  receiveAttack(coordinates) {
    if (this.board[coordinates] != 0) { // invalid move
      
    }
  }
}

class Player {
  constructor(name, board) {
    this.name = name,
    this.board = new Gameboard()
    this.fleet = generateFleet()
  }
}

function generateFleet() {
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

let german = new Player('german')
console.log(german)
german.board.placeShip('c',[1,4])
console.log(german)