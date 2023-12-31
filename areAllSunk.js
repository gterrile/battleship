export default function areAllSunk(user) {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      if (user.board.board[r][c] != 0) return false
    }
  }
  return true
}