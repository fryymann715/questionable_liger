const size = (collection) => {
  let count = 0
  for (const item in collection) {
    count++
  }
  return count

}

module.exports = size
