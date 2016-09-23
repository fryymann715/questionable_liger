 const fromPairs = (pairs) => {

   const result = new Object
      for(let pair = 0; pair < pairs.length; pair++){
        const array = pairs[pair]
        const key = array[0]
        const value = array[1]

        result[key] = value
        }
      return result
 }

module.exports = fromPairs
