const map = require( '../src/map.js' )

const squareFunc = (n) => {
    return n * n
}

const users = [ { 'user': 'barney' },
                { 'user': 'fred' },
                { 'age': 35 }]

const user = users[1]

fdescribe( 'map', () => {
    it( 'performs a function on items within a collection', () => {
      expect( map( [ 4, 8 ], squareFunc) ).toEqual( [ 16, 64 ] )
    })

    it( 'performs a function on key value pairs values', () => {
      expect( map({ 'a': 4, 'b': 8 }, squareFunc ) ).toEqual( [ 16, 64 ] )
    })

    it( 'compares a string to keys and returns valus of matching keys.', () => {
      expect( map( users, 'user' ) ).toEqual( [ 'barney', 'fred' ] )
    })

    it( 'compares a string to keys and returns valus of matching keys.', () => {
      expect( map( user, 'user' ) ).toEqual( [ 'fred' ] )
    })


})
