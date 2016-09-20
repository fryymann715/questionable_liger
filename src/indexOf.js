const indexOf = (array, arg) => {
  for (let i=0; i<array.length; i++) {
    if (array[i] === arg) {
      return i
    }
  }

}

module.exports = indexOf
