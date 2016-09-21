const mean=require('../src/mean.js')

describe('mean',()=>{
  it('returns the mean of a given array',()=>{
    expect(mean([1,2,3,4])).toEqual(2.5)
  })

  it('returns the mean of a given array',()=>{
    expect(mean([4])).toEqual(4)
  })


  it('returns the mean of a given array',()=>{
    expect(mean([1,5])).toEqual(3)
  })
})
