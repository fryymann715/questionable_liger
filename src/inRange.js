

const inRange = ( number, start, end=start ) => {

  if ( start < 0 && end > 0 ) {
    let newStart = Math.abs( start )
    return compareNumbers( number, start, end )

  } else if ( end < 0 && start > 0 ) {
    let newStart = Math.abs( end )
    let newEnd = start
    return compareNumbers( number, start, end )

  } else if ( start < 0 && end < 0 && number < 0 ) {
    let newStart = Math.abs( start )
    let newEnd = Math.abs( end )
    let newNumber = Math.abs( number )
    return compareNumbers( newNumber, newStart, newEnd )

  } else if ( start < 0 && end < 0 && number > 0 ) {
    return false
  } else if ( start === end ) {

      start = 0
      return compareNumbers( number, start, end )

  } else if ( start > end ) {

      let newStart = end
      let newEnd = start
      return compareNumbers( number, start, end )

  } else {
      return compareNumbers( number, start, end )
  }

  if ( start < number < end ) {
    return true
  }



}

const compareNumbers = ( number, start, end ) => {
  if ( start < number && number < end ) {
    return true
  } else {
    return false
  }
}

module.exports = inRange
