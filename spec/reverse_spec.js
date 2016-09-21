const reverse  = require('../src/reverse.js')

describe('reverse', ()=> {
  it('returns an array with the values in reverse', () => {
    expect(reverse([1,'b',3])).toEqual([ 3,'b',1])
  })

  it('returns an object as is', () => {
    expect(reverse( {a: 'a', b: 'b'})).toEqual({a: 'a', b: 'b'})
  })

  it('returns null for a null input', () => {
    expect(reverse(null)).toEqual(null)
  })

  it('returns undefined for an undefined input', () => {
    expect(reverse(undefined)).toEqual(undefined)
  })

})
