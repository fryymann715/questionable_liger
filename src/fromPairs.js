 const fromPairs = (pairs) => {
   console.log('pairs:', pairs);
   const result = new Object
      for(pair = 0; pair < pairs.length; pair++){
        console.log('pair:', pair);
        const array = pairs[pair]
        console.log(array)
          const key = array[0]
          console.log(key);
          const value = array[1]
          console.log(value);
          result[key] = value
        }
      return result
 }

module.exports = fromPairs
