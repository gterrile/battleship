import { numToArray } from "./game.js"
import { updateBoard } from "./dom.js"

// create function valideIndex() to check if the index and the next needed squares to place ship are available
export function shipPlacement(square, game) {
const playerSquares = document.querySelectorAll('.player')
let shipCoordinates = []
const indexCoordinates = numToArray(square.id)

// placement of first ship
if (!game.player.fleet.carrier.coordinates.length) {

  if (indexCoordinates[1] <= (10 - game.player.fleet.carrier.length)) {
    for (let i = parseInt(square.id); i < (parseInt(square.id) + 5); i++) {
      let squareCoordinates = numToArray(i)
      shipCoordinates.push(squareCoordinates)
      playerSquares[i].style.backgroundColor = 'gray'
    }
    square.addEventListener('click', () => {
      game.player.board.placeShip(shipCoordinates)
      game.player.fleet.carrier.setCoordinates(shipCoordinates)
    })
  } 

} else if (!game.player.fleet.battleship.coordinates.length) {
  
  if (indexCoordinates[1] <= (10 - game.player.fleet.battleship.length)) {
    for (let i = parseInt(square.id); i < (parseInt(square.id) + 4); i++) {
      let squareCoordinates = numToArray(i)
      shipCoordinates.push(squareCoordinates)
      playerSquares[i].style.backgroundColor = 'gray'
    }
    square.addEventListener('click', () => {
      game.player.board.placeShip(shipCoordinates)
      game.player.fleet.battleship.setCoordinates(shipCoordinates)
    })
  } 

} else if (!game.player.fleet.destroyer.coordinates.length) {

  if (indexCoordinates[1] <= (10 - game.player.fleet.destroyer.length)) {
    for (let i = parseInt(square.id); i < (parseInt(square.id) + 3); i++) {
      let squareCoordinates = numToArray(i)
      shipCoordinates.push(squareCoordinates)
      playerSquares[i].style.backgroundColor = 'gray'
    }
    square.addEventListener('click', () => {
      game.player.board.placeShip(shipCoordinates)
      game.player.fleet.destroyer.setCoordinates(shipCoordinates)
    })
  } 

} else if (!game.player.fleet.submarine.coordinates.length) {

  if (indexCoordinates[1] <= (10 - game.player.fleet.submarine.length)) {
    for (let i = parseInt(square.id); i < (parseInt(square.id) + 3); i++) {
      let squareCoordinates = numToArray(i)
      shipCoordinates.push(squareCoordinates)
      playerSquares[i].style.backgroundColor = 'gray'
    }
    square.addEventListener('click', () => {
      game.player.board.placeShip(shipCoordinates)
      game.player.fleet.submarine.setCoordinates(shipCoordinates)
    })
  } 

} else if (!game.player.fleet.patrolBoat.coordinates.length) {
  if (indexCoordinates[1] <= (10 - game.player.fleet.patrolBoat.length)) {
    for (let i = parseInt(square.id); i < (parseInt(square.id) + 2); i++) {
      let squareCoordinates = numToArray(i)
      shipCoordinates.push(squareCoordinates)
      playerSquares[i].style.backgroundColor = 'gray'
    }
    square.addEventListener('click', () => {
      game.player.board.placeShip(shipCoordinates)
      game.player.fleet.patrolBoat.setCoordinates(shipCoordinates)
    })
  } 
} else {
  game.player.fleet.isFullyPlaced = true
  console.log(game)
}





}