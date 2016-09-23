const compact=require('../src/compact.js')

describe('compact', () => {
  it('removes falsey values from an array',() => {
    console.log('running compact')
    expect(compact([1,2,null,'a',true, undefined])).toEqual([1,2,'a',true])
  })
  it('removes falsey values from an array',() => {
    expect(compact([0 , null,'',false,1])).toEqual([1])
  })

})
