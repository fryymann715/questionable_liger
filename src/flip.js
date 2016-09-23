

const flip = func => {
  let revFunc = func
  const reversedResults = []

  if ( revFunc.length > 1 ) {
    if ( revFunc.constructor === Array ) {
      for ( let x=revFunc.length-1; x >= 0; x--  ) {

        reversedResults.push( revFunc[ x ] )
      }
      return reversedResults

    } else if ( revFunc.constructor === String ) {
      let newString = ""
      for (let x=revFunc.length-1; x >= 0; x-- ) {
        newString += revFunc[ x ]
      }
      return newString
    }

  }else {
    return revFunc
  }

}

module.exports = flip
