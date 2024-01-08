export function computerRandomAttack(game) {
  let r
  let c
  do {
    r = Math.floor(Math.random() * 10)
    c = Math.floor(Math.random() * 10)
  } while (alreadyAttemped(game, [r,c]))
  
  return [r,c]
}

function alreadyAttemped(game, arr) {
  let attemps = game.computer.attemps
  for (let i = 0; i < attemps.length; i++) {
    if (arr[0] == attemps[i].attemp[0] && arr[1] == attemps[i].attemp[1]) {
      return true
    }
  }
  return false
}

