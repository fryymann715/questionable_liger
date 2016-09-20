const size = (collection) => {
  let count = 0
  let i = 0

  if (Object(collection[i])) {
    console.log('yes')
  }
  else {
    console.log('no')
  }



  while (Object(collection[i]) && collection[i] !== undefined) {
    count++;
    i++;
  }
  return count

}

module.exports = size
