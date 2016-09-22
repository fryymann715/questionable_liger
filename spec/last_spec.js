const last=require('../src/last.js')

fdescribe('last',()=>{
  it('Gets the last element of an array',()=>{
    expect(last(['owl','octopus','otter'])).toEqual('otter')
  })
  it('Gets the last element of an array',()=>{
    expect(last([1,2,[1,2]])).toEqual([1,2])
  })

})
