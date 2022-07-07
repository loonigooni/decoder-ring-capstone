const substitutionModule = (function () {
  const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const result = []

  function substitution(input, alphabet, encode = true) {
    const check = new Set(alphabet)
    if (alphabet === undefined || alphabet.length < 26 || [...check].length < 26) return false
      alphabet.split("")
    if (encode)
    for (let i = 0; i < 26; i++) result[theAlphabet[i]] = alphabet[i]
    else
    for (let i = 0; i < 26; i++) result[alphabet[i]] = theAlphabet[i]
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " "
      return result[letter]
    })
    return answer.join("")
  }
  return {substitution}
})()

module.exports = { substitution: substitutionModule.substitution }
