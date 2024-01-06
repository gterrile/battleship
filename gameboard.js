export default class Gameboard {
  // place ships
  // receiveAttack, determine if hit and record coordinates
  // check if all ships are sunk
  constructor () {
    this.board = [
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
    ]
  }
  placeShip(coordinates) {
    for (let i = 0; i < coordinates.length; i++) {
      let r = coordinates[i][0]
      let c = coordinates[i][1]
      this.board[r][c] = 1
    }
  }
  receiveAttack(coordinates) {
    // this method should return miss or hit
    let r = coordinates[0]
    let c = coordinates[1]

    if (this.board[r][c] == 0) { // if miss
      return {
        attemp: [r,c],
        status: 'miss'
      }
    } else {  // if hit
      this.board[r][c] = 0
      return {
        attemp: [r,c],
        status: 'hit'
      }
    }
  }
}