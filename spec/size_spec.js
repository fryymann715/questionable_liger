const size = require('../src/size.js')

describe('size', ()=> {

  it('Gets the size of a string by returning its length', () => {
    expect(size('four')).toEqual(4)
  })

  it('Gets the size of an array by returning its # of elements', () => {
    expect(size([2, 5, 7, 901234, 'eight'])).toEqual(5)
  })

  it('Gets the size of an object by returning # of key value pairs', () => {
    expect(size({a:14, b:12})).toEqual(2)
  })

  // Here's a new edge case
  it('Testing operation on unusual data', () => {
    expect(size(undefined)).toEqual(0)
  })

})
