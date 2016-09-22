const truncate = require("../src/truncate.js")

fdescribe('truncate', () => {

  // it('Removes characters from end of a String that exceed given limit, but no limit is given.', () => {
  //   expect(truncate('This is a rather short sentence.')).toEqual('This is a rather short s')
  // })
  //
  // it('Removes characters from end of a String that exceed given limit.', () => {
  //   expect(truncate('This is a rather short sentence.', {'length': 12})).toEqual('This is a ra')
  // })
  //
  // it('Removes characters from end of a String based on a separator provided.',  () => {
  //   expect(truncate('This is a rather short sentence.', 12)).toEqual('This is a ra')
  // })
  //
  it('Removes characters from end of a String based on a separator provided.',  () => {
    expect(truncate('This, is a rather short sentence.', {'separator': '/,?+'})).toEqual('This')
  })
  //
  // it('Removes characters from end of a String based on a separator provided.',  () => {
  //   expect(truncate('This, is a rather /short sentence.', {'separator': '/'})).toEqual('This, is a rather ')
  // })

  it('Removes characters from end of a String based on a separator provided.',  () => {
    expect(truncate('This, is a rather /short sentence.', {'separator': '/',
                                                            'length': 6})).toEqual('This, ')
  })
})
