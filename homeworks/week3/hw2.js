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
  const temp = lines[0].split(' ')
  const str1 = Number(temp[0])
  const str2 = Number(temp[1])
  for (let i = str1; i <= str2; i++) {
    if (isNarcissistic(i)) console.log(i)
  }
}

function countDigit(n) {
  let result = 0
  if (n === 0) {
    return 1
  }
  while (n !== 0) {
    n = Math.floor(n / 10)
    result++
  }
  return result
}

function isNarcissistic(n) {
  const m = n
  let sum = 0
  const digist = countDigit(n)
  while (n !== 0) {
    const num = n % 10
    sum += num ** digist
    n = Math.floor(n / 10)
  }
  return (sum === m)
}
