const indexOf = (array, arg) => {
  console.log("Running module...")
  console.log('Provided array: ' + array)
  console.log('Searching for: ' + arg + '\n')
  for (let i=0; i<array.length; i++) {
    if (array[i] === arg) {
      console.log('Found at ' + i)
      return i
    }
  }

}

module.exports = indexOf
