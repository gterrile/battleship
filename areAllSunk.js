export default function areAllSunk(user) {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      // if any square in the board containes 's' the game is not over yet
      if (user.board.board[r][c] === 's') return false
    }
  }
  return true
}