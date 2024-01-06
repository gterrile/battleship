function shipPlacement() {
  const playerSquares = document.querySelectorAll('.player')
  playerSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
      // create function valideIndex() to check if the index and the next needed squares to place ship are available
      if (!game.player.fleet.carrier.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 5) && i < 96; i++) {
            let num = numToArray(i)
            shipCoordinates.push(num)
            playerSquares[i].style.backgroundColor = 'yellow'

        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip(shipCoordinates)
          game.player.fleet.carrier.setCoordinates(shipCoordinates)
          updateBoard(game)
          shipPlacement()
          console.log(game)
        })
      } else if (!game.player.fleet.battleship.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 4); i++) {
          let num = numToArray(i)
          shipCoordinates.push(num)
          playerSquares[i].style.backgroundColor = 'pink'
        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip(shipCoordinates)
          game.player.fleet.battleship.setCoordinates(shipCoordinates)
          updateBoard(game)
          shipPlacement()
          console.log(game)
        })
      } else if (!game.player.fleet.destroyer.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 3); i++) {
          let num = numToArray(i)
          shipCoordinates.push(num)
          playerSquares[i].style.backgroundColor = 'lightblue'
        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip(shipCoordinates)
          game.player.fleet.destroyer.setCoordinates(shipCoordinates)
          updateBoard(game)
          shipPlacement()
          console.log(game)
        })
      } else if (!game.player.fleet.submarine.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 3); i++) {
          let num = numToArray(i)
          shipCoordinates.push(num)
          playerSquares[i].style.backgroundColor = 'orange'
        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip(shipCoordinates)
          game.player.fleet.submarine.setCoordinates(shipCoordinates)
          updateBoard(game)
          shipPlacement()
          console.log(game)
        })
      } else if (!game.player.fleet.patrolBoat.coordinates.length) {
        let shipCoordinates = []
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 2); i++) {
          let num = numToArray(i)
          shipCoordinates.push(num)
          playerSquares[i].style.backgroundColor = 'brown'
        }
        square.addEventListener('click', () => {
          // place ship
          game.player.board.placeShip(shipCoordinates)
          game.player.fleet.patrolBoat.setCoordinates(shipCoordinates)
          updateBoard(game)
          shipPlacement()
          console.log(game)
        })
      }
      
      square.addEventListener('mouseleave', () => {
        for (let i = parseInt(square.id); i < (parseInt(square.id) + 5); i++) {
          // fix error when id goes above 99
          if (square.id > 99) {
            console.log(square.id)
          } else {
            playerSquares[i].style.backgroundColor = 'lightgray'
          }
          
        }
      })
    })
  })
}