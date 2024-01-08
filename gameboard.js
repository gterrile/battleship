export default class Gameboard {
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
      this.board[r][c] = 's'
    }
  }
  receiveAttack(coordinates) {
    // this method should return miss or hit
    let r = coordinates[0]
    let c = coordinates[1]

    if (this.board[r][c] === 0) { // if miss
      this.board[r][c] = 'm'
      return {
        attemp: [r,c],
        status: 'miss'
      }
    } else if (this.board[r][c] === 's') {  // if hit
      this.board[r][c] = 'h'
      return {
        attemp: [r,c],
        status: 'hit'
      }
    }
  }

}