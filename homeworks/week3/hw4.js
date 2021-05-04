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
  const temp = lines[0]
  const newstr = reverseString(temp)
  console.log(temp === newstr ? 'True' : 'False')

  function reverseString(temp) {
    let str = ''
    for (let i = temp.length - 1; i >= 0; i--) {
      str += temp[i]
    } return str
  }
}
