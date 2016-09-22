const reduceRight = require('../src/reduceRight.js')

fdescribe('reduceRight',()=> {
  it('reduces a collection to a value by running each through a function and returning the result to the next run of the function',()=>{
    expect(reduceRight([1,2],function(a,b){console.log('a is ' +a); console.log('b is ' +b); return a+b})).toEqual(3)
  })
  it('reduces a collection to a value by running each through a function and returning the result to the next run of the function',()=>{
    expect(reduceRight([1,2],function(a,b){return a+b},2)).toEqual(5)
  })
  it('reduces a collection to a value by running each through a function and returning the result to the next run of the function',()=>{
    expect(reduceRight([4,2],function(a,b){return a/b},8)).toEqual(1)
  })

})
