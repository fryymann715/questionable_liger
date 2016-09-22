import filter from '../src/filter.js'

const objectFilter = { 'age': 36, 'active': true }

const users=[
  Object.assign( {}, objectFilter, { 'user': 'barney' }),
  { 'user': 'fred', 'age': 40, 'active': false }
]
const barney = users[ 0 ]
const fred = users[ 1 ]

const numbers = [ 1, 2, 3, 4 ]

describe( 'filter', () => {
  it( 'returns undefined when collection is null', () => {
    expect( filter( null, [] )).toEqual( undefined )
  })

  it( 'returns undefined when collection is undefined', () => {
    expect( filter( undefined, [] )).toEqual( undefined )
  })

  describe( 'when receiving a function filter', () => {
    it( 'correctly returns the filtered values', () => {
      expect(filter( numbers, o => o > 2 )).toEqual([ 3, 4 ])
    })

    it( 'operates on an array of objects', () => {
      const findInactive = object => !object.active

      expect( filter( users, findInactive) ).toEqual([ fred ])
    })

    it( 'operates on object, returning values', () => {
      const findNumerical = value => typeof( value ) === 'number'

      expect( filter( barney, findNumerical )).toEqual([ barney.age ])
    })

    describe( 'with an object', () => {
      it( 'invokes predicate with value, key, and collection', () => {
        const testObject = (() => {
          let result = []

          const filter = (value, key, collection) => {
            result.push( `${value}-${key}-${collection[ key ]}` )
          }

          return { filter, result }
        })()

        filter({ a: 1, b: 2 }, testObject.filter )
        expect( testObject.result ).toEqual([ '1-a-1', '2-b-2' ])
      })
    })

    describe( 'with an array', () => {
      it( 'invokes predicate with value, index, and collection', () => {
        const testObject = (() => {
          let result = []

          const filter = (value, index, collection) => {
            result.push( `${value}-${index}-${collection[ index ]}` )
          }

          return { filter, result }
        })()

        filter([ 1, 2 ], testObject.filter )
        expect( testObject.result ).toEqual([ '1-0-1', '2-1-2' ])
      })
    })
  })

  describe( 'when receiving an object filter', () => {
    it( 'finds objects with matching key value pairs', () => {
      expect( filter( users, objectFilter )).toEqual([ barney ])
    })
  })

  describe( 'when receiving a string filter', () => {
      it( 'finds objects where the specified key is true', () => {
        expect( filter( users, 'active' )).toEqual([ barney ])
      })
  })

  describe( 'when receiving an array filter', () => {
    it( 'treats entries as key value pairs to filter', () => {
      expect( filter( users, [ 'active', false ])).toEqual([ fred ])
    })
  })
})
