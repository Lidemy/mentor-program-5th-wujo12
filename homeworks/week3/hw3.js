const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  for (let j = 1; j < lines.length; j++) {
    if (isPrime(lines[j])) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}
function isPrime(n) {
  let result = 0
  if (n === '1') {
    return false
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result++
    }
  }
  return result <= 2
}
