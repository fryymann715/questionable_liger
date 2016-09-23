const camelCase=require('../src/camelCase.js')

describe('camelCase',()=>{
  it('Converts a string to camelCase',()=>{
    expect(camelCase('camel case')).toEqual('camelCase')

  })
  it('Converts a string to camelCase',()=>{
    expect(camelCase('camel_case')).toEqual('camelCase')

  })
  it('Converts a string to camelCase',()=>{
    expect(camelCase('camel case-longer')).toEqual('camelCaseLonger')

  })
  it('Converts a string to camelCase',()=>{
    expect(camelCase('Camel_Case')).toEqual('camelCase')

  })

  it('Converts a string to camelCase',()=>{
    expect(camelCase('CAMEL_CASE')).toEqual('camelCase')
  })
  it('Converts improper capitalization',()=>{
    expect(camelCase('camelCASE')).toEqual('camelCase')
  })
})
