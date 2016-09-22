const truncate = require( "../src/truncate.js" )

fdescribe( 'truncate', () => {

  const testString = "This is a string, for testing truncate."

  describe( 'Cut string based on options provided.', () => {
    it('when no options are given.', () => {
      expect (truncate( testString )).toEqual( 'This is a string, for testing trunca...' )
    })
  })

  describe( 'Cuts string to a specified length', () => {
    it( 'when length option is an object', () => {
      expect( truncate( testString, { 'length': 12 } )).toEqual( 'This is a...' )
    })

    it( 'when provided option is a number',  () => {
      expect( truncate( testString, 12 )).toEqual( 'This is a...' )
    })

  })

  describe( 'Cuts string at first occurence of a provided separator', () => {

    it( 'when a single separator is provided within an object.',  () => {
      expect( truncate( testString, { 'separator': ',' } )).toEqual( 'This is a string...' )
    })

    it( 'Cuts string at first occurence of a separator when multiple separators are provided within an object.',  () => {
      expect( truncate( testString, { 'separator': '/,.?' } )).toEqual( 'This is a string...' )
    })

    it( 'Cuts string at first occurence of a separator when multiple separators are provided within a string.',  () => {
      expect( truncate( testString, '/,.?')).toEqual('This is a string...')
    })
  })

  describe( 'Cuts string to specified length or where provided separator first occurs.', () => {
    it( 'When both options are provided in objects',  () => {
      expect( truncate( testString, { 'separator': ',', 'length': 20 } )).toEqual( 'This is a string...' )
    })
  })





})
