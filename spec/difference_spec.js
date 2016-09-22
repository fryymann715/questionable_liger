const difference=require('../src/difference.js')

describe('difference', ()=>{
  it('differentiates two number arrays',()=>{
    expect(difference([1,2,3],[3,4,5])).toEqual([1,2,4,5])
  })
  it('differentiates two string arrays',()=>{
    expect(difference(["cat","dog","owl"],["cat","dog","parrot"])).toEqual(['owl','parrot'])
  })
  it('checks an array for given values and adds them if not found',()=>{
    expect(difference([1,2,3],4)).toEqual([1,2,3,4])
  })

  it('checks an array for given values and adds them if not found',()=>{
    expect(difference([1,2,3],2,4)).toEqual([1,2,3,4])
  })
})
