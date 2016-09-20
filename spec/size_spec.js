const size = require('../src/size.js')

fdescribe('size', ()=> {

  it('Gets the size of a collection by returning its length', () => {
    expect(size('four')).toEqual(4)
  })

  it('Gets the size of a collection by returning its length', () => {
    expect(size([2, 5, 7, 901234, 'eight'])).toEqual(5)
  })

  it('Gets the size of a collection by returning its length', () => {
    expect(size({a:14, b:12})).toEqual(2)
  })


})
