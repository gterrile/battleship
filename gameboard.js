export default class Gameboard {
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
    for (let i = 0; i < coordinates.length; i++) {
      let r = coordinates[i][0]
      let c = coordinates[i][1]
      this.board[r][c] = ship
    }
  }
  receiveAttack(coordinates) {
    if (this.board[coordinates] != 0) { // invalid move
      
    }
  }
}