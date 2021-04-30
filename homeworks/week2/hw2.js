function capitalize(str) {
  let newstr = ''
  let gg = ''
  if (str >= 'a' && str <= 'z') {
    gg = String.fromCharCode(str.charCodeAt(0) - 32)
    for (let i = 1; i < str.length; i++) {
      newstr += str[i]
    } return gg + newstr
  }
}

console.log(capitalize('sello'))
