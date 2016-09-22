const camelCase=require('../src/camelCase.js')

describe('camelCase',()=>{
  it('Converts a string to camelCase',()=>{
    expect(camelCase('camel case')).toEqual('camelCase')
    console.log('camel case result '+camelCase('camel case'))
  })
  it('Converts a string to camelCase',()=>{
    expect(camelCase('camel_case')).toEqual('camelCase')
    console.log('camel_case result '+camelCase('camel_case'))
  })
  it('Converts a string to camelCase',()=>{
    expect(camelCase('camel case-longer')).toEqual('camelCaseLonger')
    console.log('camel case-longer result '+camelCase('camel case-longer'))
  })
  it('Converts a string to camelCase',()=>{
    expect(camelCase('Camel_Case')).toEqual('camelCase')
    console.log('Camel_Case result '+camelCase('Camel_Case'))
  })
})
