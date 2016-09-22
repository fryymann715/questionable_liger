const slice=require('../src/slice.js')

describe('slice', ()=>{
  it('returns an array of values between specified indices',()=>{
    expect(slice([1,2,3,4,5],1,3)).toEqual([2,3])
  })
it('returns an array of all values after specified start',()=>{
  expect(slice([1,2,3,4,5],3)).toEqual([4,5])
})
})
