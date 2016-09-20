const drop=require('../src/drop.js')

fdescribe('drop',()=>{
it('drops n values from the front of an array and returns the resulting array',()=>{
expect(drop([1,2,3])).toEqual([2,3])

})

it('drops n values from the front of an array and returns the resulting array',()=>{
expect(drop([1,2,3],2)).toEqual([3])

})


})
