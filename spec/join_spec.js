const join = require('../src/join.js')

fdescribe('join', ()=> {
  it('joins an array into a string, with the second parameter in between each value', () => {
    expect(join(['h','e','l','l','o'])).toEqual('hello')
  })
  it('joins an array into a string, with the second parameter in between each value', () => {
    expect(join(['h','e','l','l','o'],'')).toEqual('hello')
  })
  it('joins an array into a string, with the second parameter in between each value',() => {
    expect(join(['h','e','l','l','o'],'~')).toEqual('h~e~l~l~o')
  })
  it('joins an array into a string, with the second parameter in between each value',() => {
    expect(join(['h','e',1,1,0],'~')).toEqual('h~e~1~1~0')
  })

})
