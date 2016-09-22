
const truncate = (string, options) => {

  const DEFAULT_LENGTH = 24
  let truncatedString = ''

  console.log("Provided string: " + string)
  console.log("  Provided options: " + options + "\n")

  if ( options === undefined || options === null ) {
    console.log("Done.\n")
    return string.substring(0, DEFAULT_LENGTH)
  }
  else {
    let op = options

    switch( typeof( op ) ) {

      case 'object':

        if (op['length'] != null && op['separator'] != null) {
          console.log("------> Both Length an Separator are present.")
          let separator = op.separator
          let sepIndex = getSepIndex(string, )
          return truncatedString
        }
        else if (op['separator'] != null && op['length'] == null) {
          let separator = op['separator']
          truncatedString = trimAtSeparator(string, separator)
          return truncatedString
        }

        else if (op['length'] != null && op['separator'] == null){
          let limit = op['length']
          truncatedString = trimLength(string, limit)
          return truncatedString
        }

      case 'number':
        let limit = op
        truncatedString = trimLength(string, limit)
        return truncatedString

    }

  }

}

const getSepArray = (separatorObj) => {
  let sepArray = []
  for (let i=0; i<separatorObj.length; i++) {
    sepArray.push(separatorObj[i])
  }
  return sepArray
}

const getSepIndex = (string, sepArray) => {
  sepIndex = 0
  for (let sepr in sepArray) {
    for (let i=0; i<string.length; i++) {
      if (string[i] === sepr) {
        sepIndex = i
      }
    }
  }
  return sepIndex
}

const trimAtSeparator = (string, separator) => {
  let separatorArray = []
  let truncPoint = 0

  for (let i=0; i<separator.length; i++) {
    separatorArray.push(separator[i])
  }
  for (let i=0; i<separatorArray.length; i++) {
    let sepr = separatorArray[i]

    for (let j=0; j<string.length; j++) {
      if (string[j] === sepr) {
        truncPoint = j
      }
    }
  }
  let newString = string.substring(0, truncPoint)
  return newString
}

// const getSepIndex = (string, separator) => {
//   let sepIndex = 0
//   for ( let i=0; i<string.length; i++ ) {
//     if ( string[i] === separator ) {
//       sepIndex = i
//     }
//   }
//   return sepIndex
//
// }

const isSeparatorFirst = (string, separator, length) => {

  if (sepIndex < length) {
    return true
  }
  else {
    return false
  }

}

const trimLength = (string, limit) => {
  let newString = string.substring(0, limit)
  return newString
}


module.exports = truncate
