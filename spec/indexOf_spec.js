const indexOf = require('../src/indexOf.js')

fdescribe('indexOf', ()=>{

  it('Searches an array for a value and returns the first place the value is located.', ()=> {
    console.log('Running Test 1')
    expect(indexOf([1, 5, 6], 5)).toEqual(1)
  })

  it('Searches an array for a value and returns the first place the value is located.', ()=> {
    console.log('Running Test 2')
    expect(indexOf([1, 5, 6, 7, 9, 7], 7)).toEqual(3)
  })

  it('Searches an array for a value and returns the first place the value is located.', ()=> {
    console.log('Running Test 3')
    expect(indexOf([1, 5, 6, 'arp', 2], 'arp')).toEqual(3)
  })

  it('Searches an array for a value and returns the first place the value is located.', ()=> {
    console.log('Running Test 4')
    expect(indexOf(['man', 'bear', 47, 'pig', 'shfourteen-teen', 3], 'manbearpig')).toEqual(undefined)
  })

  it('Searches an array for a value and returns the first place the value is located.', ()=> {
    console.log('Running Test 5')
    expect(indexOf(['man', 'bear', 47, 'pig', 'shfourteen-teen', 3], 'pig')).toEqual(3)
  })

})
