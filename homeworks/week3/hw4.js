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
  const tam = lines[0]
  const reverse = re(tam)

  if (tam === reverse) {
    console.log('True')
  } else {
    console.log('False')
  }

  function re(tam) {
    let s = ''
    for (let i = tam.length - 1; i >= 0; i--) {
      s += tam[i]
    } return s
  }
}
