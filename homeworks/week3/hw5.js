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
  const tamp = Number(lines[0])
  for (let i = 1; i <= tamp; i++) {
    const [a, b, k] = lines[i].split(' ')
    console.log(BigorSmall(a, b, k))
  }
}

function BigorSmall(number1, number2, compete) {
  if (number1 === number2) {
    return 'DRAW'
  }
  if (compete === -1) {
    const temp = number1
    number1 = number2
    number2 = temp
  }

  const lengthA = number1.length
  const lengthB = number2.length

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B'
  }
  for (let j = 0; j < lengthA; j++) {
    if (number1[j] === number2[j]) {
      continue
    }
    return number1[j] > number2[j] ? 'A' : 'B'
  }
}
