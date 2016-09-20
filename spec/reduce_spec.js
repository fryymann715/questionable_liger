const reduce = require('../src/reduce.js')

fdescribe('concat',()=> {
  it('reduces a collection to a value by running each through a function and returning the result to the next run of the function',()=>{
    expect(reduce([1,2],function(a,b){return a+b})).toEqual(3)
  })
  it('reduces a collection to a value by running each through a function and returning the result to the next run of the function',()=>{
    expect(reduce([1,2],function(a,b){return a+b},2)).toEqual(5)
  })
  it('reduces a collection to a value by running each through a function and returning the result to the next run of the function',()=>{
    expect(reduce([4,2],function(a,b){return a/b},8)).toEqual(1)
  })

})
