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
    console.log(bigorSmall(a, b, k))
  }
}

function bigorSmall(str1, str2, compete) {
  if (str1 === str2) {
    return 'DRAW'
  }
  if (compete === '-1') {
    const temp = str1
    str1 = str2
    str2 = temp
  }

  const lengthA = str1.length
  const lengthB = str2.length

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B'
  }
  for (let j = 0; j < lengthA; j++) {
    if (str1[j] === str2[j]) {
      continue
    }
    return str1[j] > str2[j] ? 'A' : 'B'
  }
}
