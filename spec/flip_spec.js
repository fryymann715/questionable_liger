const flip = require( '../src/flip.js' )


const args = [ 1, 2, 3, 4 ]
const args2 = 5
const args3 = '12345'

const flipFunction = ( x ) => {
  return x
}

const flipFunction2 = ( collection ) => {
  const results = []
  for ( let i = 0; i < collection.length; i++ ) {
    results.push( collection[ i ] + 1 )
  }
  return results
}

const flipFunction3 = x => {
  return x + 1
}

const flipFunction4 = ( string ) => {
  const result = []
  for (let x = 0; x < string.length; x++ ) {
    result.push( string[ x ] )
  }
  return result
}

const flipFunction5 = string => {
  return string
}


describe( 'flip', () => {

  describe( 'Reverses the results of a function', () => {

    it( 'when the function takes and array and returns the array.', () => {
      expect( flip( flipFunction( args ) ) ).toEqual( [ 4, 3, 2, 1 ] )
    })

    it( 'when the function iterates over a collection, adding 1 to each entry.', () => {
      expect( flip( flipFunction2( args ) ) ).toEqual( [ 5, 4, 3, 2 ] )
    })

    it( 'when the function takes a single argument and increments it.', () => {
      expect( flip( flipFunction3( args2 ) ) ).toEqual( 6 )
    })

    it( 'when the function takes a string and puts each character into an Array.', () => {
      expect( flip( flipFunction4( args3 ) ) ).toEqual( [ '5', '4', '3', '2', '1' ] )
    })

    it( 'when the function takes a string and returns the string.', () => {
      expect( flip( flipFunction5( args3 ) ) ).toEqual( '54321' )
    })

  })

})
