const replace=require('../src/replace.js')

fdescribe('replace',()=>{
  it ('replaces a matched string or RegExp with a provided string',()=>{
    expect(replace('Hi Fred','Fred','Barney')).toEqual('Hi Barney')
    console.log(replace('Hi Fred','Fred','Barney'));
  })
  it ('replaces a matched string or RegExp with a provided string',()=>{
    expect(replace('Hi Fred',/\s/,'-')).toEqual('Hi-Fred')
    console.log(replace('Hi Fred',/\s/,'-'));
  })
})
