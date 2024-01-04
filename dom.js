import { gameScript } from "./game.js"

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

export function userInputAttemp(game) {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('click', () => {
      gameScript(game, square)
    })
  })
}

