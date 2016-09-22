

const map = ( collection, iteratee ) => {
  const result = []
  if ( iteratee.constructor === Function ) {

    if ( collection.constructor === Array ) {
      return iterateArray( collection, iteratee, result )

    } else if ( collection.constructor === Object ) {
      return iterateObjects( collection, iteratee, result )

    } else {
      return undefined
    }
  } else {
    if ( collection.length > 1 ) {
      for (let i=0;i<collection.length;i++){
        let collectionKeys = Object.keys( collection[i] )

        for ( let x=0; x < collectionKeys.length; x++ ) {
          if ( collectionKeys[ x ] === iteratee ) {
            result.push( collection[i][ collectionKeys [x ]])
          }
        }
      }
    } else {
      let collectionKeys = Object.keys( collection )

      for ( let x=0; x < collectionKeys.length; x++ ) {
        if ( collectionKeys[ x ] === iteratee ) {
          result.push( collection[ collectionKeys [ x ] ])

        }
      }
    }
return result
}



}

const iterateArray = ( collection, iteratee, result ) => {
  for ( let x of collection ) {
    result.push( iteratee( x ) )
  }
  return result
}

const iterateObjects = ( collection, iteratee, result ) => {
  let collectionKeys = Object.keys( collection )
  for ( let x=0; x < collectionKeys.length; x++ ) {
    result.push( iteratee( collection[ collectionKeys[ x] ] ) )
  }
  return result
}


module.exports = map
