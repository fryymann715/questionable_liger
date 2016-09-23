const take = require ('../src/take.js')

describe('take',() => {
  it('returns the first n values from array',()=>{
    expect(take([1,2,3],2)).toEqual([1,2])
  })
  it('returns an empty array if n is negative',()=>{
    expect(take([1,2,3],-1)).toEqual([])
  })
})
