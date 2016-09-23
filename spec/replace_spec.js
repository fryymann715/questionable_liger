const replace=require('../src/replace.js')

describe('replace',()=>{
  it ('replaces a matched string or RegExp with a provided string',()=>{
    expect(replace('Hi Fred','Fred','Barney')).toEqual('Hi Barney')
  })
  it ('replaces a matched string or RegExp with a provided string',()=>{
    expect(replace('Hi Fred',/\s/,'-')).toEqual('Hi-Fred')
  })
})
