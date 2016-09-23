const chunk=require('../src/chunk.js')

describe('chunk',()=>{
  it('breaks an array up into arrays of the specified length',()=>{
    expect(chunk([1,2,3,4,5,6],3)).toEqual([[1,2,3],[4,5,6]])
  })

    it('breaks an array up into arrays of the specified length',()=>{
      expect(chunk([1,2,3,4,5],3)).toEqual([[1,2,3],[4,5]])
    })
})
