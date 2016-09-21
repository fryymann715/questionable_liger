const fromPairs = require('../src/fromPairs.js')

describe('fromPairs', ()=> {

  it('Gets the size of a string by returning its length', () => {
    expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ 'a': 1, 'b': 2 })
  })

  it('Gets the size of a string by returning its length', () => {
    expect(fromPairs([['user', 'barney'], ['age', 36], ['active', true]])).toEqual({ 'user': 'barney', 'age': 36, 'active': true })
  })

})
