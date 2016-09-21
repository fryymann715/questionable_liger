const filter= require ('../src/filter.js')

const users=[
{ 'user': 'barney', 'age': 36, 'active': true },
{ 'user': 'fred', 'age': 40, 'active': false }
]
const barney={'user':'barney','age':36,'active':true}

const num=[1,2,3,4]

fdescribe('filter',()=>{
  it('filtering an array of objects based on a function', () =>{
    expect(filter(users, (o) => {return !o.active})).toEqual([
    { 'user': 'fred', 'age': 40, 'active': false }])
  })

  it('filtering an object based on a function',()=>{
    expect(filter(barney,(val) =>{return val.constructor===Number})).toEqual(['age',36])
  })

    it('filtering an array of objects for a subset of key:value pairs', () =>{
      expect(filter(users, {'age':36,'active':true})).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
    })

    it('filtering an array of objects using a function that checks key values',()=>{
      expect(filter(users,(o)=>{return o.age>35})).toEqual([
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }])
    })


    it('filtering an array of objects for a false key', () =>{
      expect(filter(users, ['active',false])).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }])
    })

    it('filtering an array of objects based on a key returning true', () =>{
      expect(filter(users, 'active')).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
    })

    it('filtering an array of numbers based on a function', () =>{
      expect(filter(num, (o) => o > 2)).toEqual([3, 4])
    })
})
