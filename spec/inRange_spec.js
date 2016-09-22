const inRange = require( '../src/inRange.js' )

fdescribe( 'inRange', () => {

    describe( 'Returns true if number is within range ', () => {
      it( 'when a start and end are provided', () => {
        expect( inRange( 3, 1, 5 ) ).toEqual( true )
      })

      it( 'when a start is given, but no end is.', () => {
        expect( inRange( 3, 5 ) ).toEqual( true )
      })

      it( 'when negative numbers are provided for start and end.', () => {
        expect( inRange( -2, -1, -6 ) ).toEqual( true )
      })

      it( 'when negative numbers are provided for start and not end.', () => {
        expect( inRange( 4, -2, 5 )).toEqual( true )
      })

      it( 'when negative numbers are provided for end and not start', () => {
        expect( inRange( 4, -2, 5 )).toEqual( true )
      })
    })

    describe( 'Returns false when a number is not within range ', () => {
      it( 'when start and end are provided.', () => {
        expect( inRange( 6, 2, 5 )).toEqual( false )
      })

      it( 'when a start but no end is provided.', () => {
        expect( inRange( 6, 3 )).toEqual( false )
      })

      it( 'when negative numbers are provided for start and end.', () => {
        expect( inRange( 4, -2, -5 )).toEqual( false )
      })

      it( 'when negative numbers are provided for start and not end.', () => {
        expect( inRange( -5, -2, 5 )).toEqual( false )
      })

      it( 'when negative numbers are provided for end and not start.', () => {
        expect( inRange( 4, 1, -5 )).toEqual( false )
      })
    })

})
