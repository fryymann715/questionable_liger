const difference=require('../src/difference.js')

describe('difference', ()=>{
  it('returns an array containing values not found in given arrays',()=>{
    expect(difference([1,2,3],[3,4,5])).toEqual([1,2,4,5])
  })
  it('returns an array containing values not found in given arrays',()=>{
    expect(difference(["cat","dog","owl"],["cat","dog","parrot"])).toEqual(['owl','parrot'])
  })

})
