const concat = require('../src/concat.js')

describe('concat', ()=> {
  it('returns a new array with the input values', () => {
    expect(concat([1,2,3], 2)).toEqual([1,2,3,2])
  })

  it('returns a new array with the input values', () => {
    expect(concat([1,2,3], null)).toEqual([1,2,3, null])
  })

  it('returns a new array with the input string', () => {
    expect(concat('string')).toEqual(['string'])
  })

  it('returns a new array with the input object', () => {
    expect(concat({a:1})).toEqual([{a:1}])
  })

  it('returns a new array with the input object', () => {
    expect(concat([1,2,3,4,5], 6,7)).toEqual([1,2,3,4,5,6,7])
  })

})
