const drop=require('../src/drop.js')

describe('drop',()=>{
  it('drops n values from the front of an array and returns the resulting array',()=>{
  expect(drop([1,2,3])).toEqual([2,3])
  })

  it('drops n values from the front of an array and returns the resulting array',()=>{
  expect(drop([1,2,3],2)).toEqual([3])
  })

  it('drops 1 value from the front of an array if no second parameter given aka default 1',()=>{
  expect(drop([1, 2, 3])).toEqual([2,3])
  })

  it('drops all values if second parameter greater than the length of array given',()=>{
  expect(drop([1, 2, 3], 5)).toEqual([])
  })

  it('drops no values from the front of an array if 0 given',()=>{
  expect(drop([1, 2, 3], 0)).toEqual([1,2,3])
  })

})
