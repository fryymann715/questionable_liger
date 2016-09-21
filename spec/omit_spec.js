const omit=require('../src/omit.js')

const object = { 'a': 1, 'b': '2', 'c': 3 };

describe('omit',()=>{
  it('returns the mean of a given array',()=>{
    expect(omit(object,['a','c'])).toEqual({'b': '2'})
  })
})
