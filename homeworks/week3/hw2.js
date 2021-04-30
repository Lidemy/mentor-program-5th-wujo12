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
  const tam = lines[0].split(' ')
  const n = Number(tam[0])
  const m = Number(tam[1])
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

// 1634
function howManydigit(n) {
  let result = 0
  if (n === 0) {
    return 1
  }
  while (n !== 0) {
    n = Math.floor(n / 10)
    result++
  } return result
}

function isNarcissistic(n) {
  const m = n
  let sum = 0
  const digist = howManydigit(n)
  while (n !== 0) {
    const num = n % 10
    sum += num ** digist
    n = Math.floor(n / 10)
  }
  return (sum === m)
}
