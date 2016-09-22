const identity = a => a

const filter = ( collection, predicate=identity ) => {
  if( collection === null || collection === undefined ) {
    return undefined
  }

  const fn = normalizePredicate( predicate )

  return filterObject( collection, fn )
}

const filterObject = ( object, predicate ) => {
  const result = []

  for( const key in object ) {
    if( predicate( object[ key ], key, object ) ) {
      result.push( object[ key ])
    }
  }

  return result
}

const arrayPredicate = predicate => object =>
  object[ predicate[ 0 ]] === predicate[ 1 ]

const objectPredicate = predicate => object =>
  Object.keys( predicate ).reduce( (memo, key) => memo && object[ key ] === predicate[ key ], true )

const stringPredicate = predicate => object =>
  object[ predicate ] === true

const normalizePredicate = predicate => {
  if( typeof( predicate ) === 'function' ) {
    return predicate
  } else if( predicate instanceof Array ) {
    return arrayPredicate( predicate )
  } else if( typeof( predicate ) === 'string' ) {
    return stringPredicate( predicate )
  } else {
    return objectPredicate( predicate )
  }
}

module.exports = filter
