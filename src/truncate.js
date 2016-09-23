

const truncate = (string, options) => {

  let truncatedString = ""

  if ( options === undefined || options === null ) {
    return trimAtLength( string, string.length )
  }
  else {
    switch( typeof( options ) ) {
      
      case 'object':
        if ( options[ 'length' ] != null && options[ 'separator' ] == null ) {

          let limit = getLimit( options )
          return trimAtLength( string, limit )

        }else if ( options[ 'separator' ] != null && options[ 'length' ] == null ) {

          let separatorArray = getSeparatorArray( options.separator )
          let separatorIndex = getSeparatorIndex( string, separatorArray )
          return trimAtSeparator( string, separatorIndex)


        } else if ( options[ 'length' ] != null && options[ 'separator' ] != null ) {

          let limit = getLimit( options )
          let separatorArray = getSeparatorArray( options.separator )
          let separatorIndex = getSeparatorIndex( string, separatorArray )
          if ( isSeparatorFirst( separatorIndex, limit ) ) {
            return trimAtSeparator( string, separatorIndex )
          } else {
            return trimAtLength( string, limit )
          }

        }
        break

      case 'string':

      let separatorArray = getSeparatorArray( options )
      let separatorIndex = getSeparatorIndex( string, separatorArray )
      return trimAtSeparator( string, separatorIndex )
        break

     case 'number':
         let limit = parseInt( options )
         return trimAtLength( string, limit )


    }

  }

}

const getLimit = limitObj => {
  return limitObj.length
}

const trimAtLength = ( string, limit ) => {
  let newString = string.substring( 0, limit-3 )
  newString += '...'
  return newString
}

const trimAtSeparator = ( string, sepIndex ) => {
  let newString = string.substring( 0, sepIndex )
  newString += '...'
  return newString
}

const getSeparatorArray = (separatorObj) => {
  let separatorArray = []
  for ( let i=0; i<separatorObj.length; i++ ) {
    separatorArray.push( separatorObj[ i ] )
  }
  return separatorArray
}

const getSeparatorIndex = ( string, sepArray ) => {
  for ( let sep=0; sep<sepArray.length; sep++ ) {
    for ( let i=0; i<string.length; i++ ) {
      if ( string[ i ] === sepArray[ sep ] ) {
          return i
        }
      }
    }
  }

const isSeparatorFirst = ( separatorIndex, limit ) => {
  if ( separatorIndex < limit ) {
    return true
  }
  else {
    return false
  }

}

module.exports = truncate
