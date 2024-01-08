
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


export function updateBoard(game) {
  const playerSquares = document.querySelectorAll('.player')
  const playerBoard = game.player.board.board
  const computerSquares = document.querySelectorAll('.computer')
  const computerBoard = game.computer.board.board

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      
      if (playerBoard[r][c] == 0) {
        let lightSquare = (r * 10) + c
        playerSquares[lightSquare].style.backgroundColor = 'lightskyblue'
      } else if (playerBoard[r][c] == 's'){
        let darkSquare = (r * 10) + c
        playerSquares[darkSquare].style.backgroundColor = 'black'
      } else if (playerBoard[r][c] == 'h'){
        let darkSquare = (r * 10) + c
        playerSquares[darkSquare].style.backgroundColor = 'tomato'
      } else if (playerBoard[r][c] == 'm'){
        let darkSquare = (r * 10) + c
        playerSquares[darkSquare].style.backgroundColor = 'rgb(200, 235, 255)'
      }

      if (computerBoard[r][c] == 0) {
        let lightSquare = (r * 10) + c
        computerSquares[lightSquare].style.backgroundColor = 'lightskyblue'
      } else if (computerBoard[r][c] == 's'){
        let darkSquare = (r * 10) + c
        computerSquares[darkSquare].style.backgroundColor = 'lightskyblue'
      } else if (computerBoard[r][c] == 'h'){
        let darkSquare = (r * 10) + c
        computerSquares[darkSquare].style.backgroundColor = 'tomato'
      }
      else if (computerBoard[r][c] == 'm'){
        let darkSquare = (r * 10) + c
        computerSquares[darkSquare].style.backgroundColor = 'rgb(200, 235, 255)'
      }
    }

  }
}
