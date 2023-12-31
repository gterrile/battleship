export function computerRandomAttack() {
  let r = Math.floor(Math.random() * 10)
  let c = Math.floor(Math.random() * 10)
  return [r,c]
}