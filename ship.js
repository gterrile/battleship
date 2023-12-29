export default class Ship {
  constructor(length, hits = 0, sunk = false) {
    this.length = length,
    this.hits = hits,
    this.sunk = false
  }
  hit() {
    if (!this.sunk) {
      this.hits = this.hits + 1
      this.isSunk()
    }
  }
  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true
      return true
    }
    return false
  }
}

