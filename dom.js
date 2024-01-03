export function createBoardSquares() {
  const playerBoard = document.getElementById('playerBoard')
  const computerBoard = document.getElementById('computerBoard')
  for (let i = 0; i < 100; i++) {
    const playerSquare = document.createElement('div')
    playerSquare.classList.add('square')
    playerSquare.id = i
    playerBoard.appendChild(playerSquare)
    const computerSquare = document.createElement('div')
    computerSquare.classList.add('square')
    computerSquare.id = i
    computerBoard.appendChild(computerSquare)
  }
}

export function userInputAttemp() {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('click', () => {
      return convertToArraySyntax(square.id)
    })
  })
}

function convertToArraySyntax(num) {
  let row = parseInt(num / 10)
  let col = num % 10
  return [row, col] 
}