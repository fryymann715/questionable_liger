const nth=require('../src/nth.js')

describe('nth',() => {
  it('returns the nth value of an array (positive)',() => {
    expect(nth([1,2,3,4,5], 3)).toEqual(4)
  })
  it('returns the nth value of an array (negative)',() => {
    expect(nth([1,2,3,4,5], -1)).toEqual(5)
  })
})
