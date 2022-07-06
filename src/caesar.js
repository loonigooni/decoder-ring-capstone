const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    let lowerCaseInput = input.toLowerCase()

    if (!shift || shift < -25 || shift > 25) return false
    if (!encode) shift *= -1

    let result = ""

    for (let char of lowerCaseInput)
      if (!alphabet.includes(char)) result += char
      else {
        let charIndex = alphabet.indexOf(char)
        let charShift = charIndex + shift

        charShift = 
          charShift > 25 
          ? charShift -= 26 : charShift < 0 
          ? charShift += 26 : charShift

        result += alphabet[charShift]
      }
    return result
  }
  return {caesar}
})()

module.exports = { caesar: caesarModule.caesar }
