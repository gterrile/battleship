import { gameScript, alreadyAttemped } from "./game.js"


export function createBoardSquares() {
  const playerBoard = document.getElementById('playerBoard')
  const computerBoard = document.getElementById('computerBoard')
  for (let i = 0; i < 100; i++) {
    const playerSquare = document.createElement('div')
    playerSquare.classList.add('square')
    playerSquare.classList.add('player')
    playerSquare.id = i
    playerBoard.appendChild(playerSquare)
    const computerSquare = document.createElement('div')
    computerSquare.classList.add('square')
    computerSquare.classList.add('computer')
    computerSquare.id = i
    computerBoard.appendChild(computerSquare)
  }
}

export function userInputAttemp(game) {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (!alreadyAttemped(game, square.id)) {
        gameScript(game, square)
      }
    })
  })
}

// Update board with fleet placement
export function updateBoard(game) {
  const playerSquares = document.querySelectorAll('.player')
  const playerBoard = game.player.board.board
  //console.log(playerSquares)
  // check if empty of ship
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      if (playerBoard[r][c] == 0) {
        let lightSquare = (r * 10) + c
        playerSquares[lightSquare].style.backgroundColor = 'lightskyblue'
      } else {
        let darkSquare = (r * 10) + c
        playerSquares[darkSquare].style.backgroundColor = 'gray'
      }
    }
  }
}
