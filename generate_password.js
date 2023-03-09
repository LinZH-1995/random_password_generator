function filterExcludeCharacters(collection, excludeCharacters) {
  for (const key in collection) {
    collection[key] = collection[key].filter(
      character => !excludeCharacters.includes(character)
    )
  }
}

function randomCharacter(array) {
  if (array.length === 0) return
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function pickRandomKey(keys) {
  return keys[Math.floor(Math.random() * keys.length)]
}

function generatePassword(options) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  let collection = {}

  if (options.lowercase === 'on') {
    collection['lowerCaseLetters'] = lowerCaseLetters.split('')
  }

  if (options.uppercase === 'on') {
    collection['upperCaseLetters'] = upperCaseLetters.split('')
  }

  if (options.numbers === 'on') {
    collection['numbers'] = numbers.split('')
  }

  if (options.symbols === 'on') {
    collection['symbols'] = symbols.split('')
  }

  if (options.excludeCharacters) {
    filterExcludeCharacters(collection, options.excludeCharacters)
  }

  let password = ''
  const collectionKeys = Object.keys(collection)
  let copyKeys = collectionKeys.slice()

  for (let i = 0; i < Number(options.length); i++) {
    let randomKey = copyKeys.length !== 0 ? pickRandomKey(copyKeys) : pickRandomKey(collectionKeys)
    const passwordArr = password.split('')
    if (passwordArr.every(word => !collection[randomKey].includes(word))) {
      copyKeys = copyKeys.filter(key => key !== randomKey)
      password += randomCharacter(collection[randomKey])
    } else {
      randomKey = collectionKeys[Math.floor(Math.random() * collectionKeys.length)]
      password += randomCharacter(collection[randomKey])
    }
  }

  return password
}

module.exports = generatePassword