import filter from '../src/filter.js'

const objectFilter = { 'age': 36, 'active': true }

const users=[
  Object.assign( {}, objectFilter, { 'user': 'barney' }),
  { 'user': 'fred', 'age': 40, 'active': false }
]
const barney = users[ 0 ]
const fred = users[ 1 ]

const numbers = [ 1, 2, 3, 4 ]

fdescribe( 'filter', () => {
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
