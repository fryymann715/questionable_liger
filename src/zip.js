const zip = (...arrays) => {
  const result = []
  const max = maxLength(arrays)

  for(let index = 0; index < max; index++){

    let temp = []


      for(let arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++){
        if(arrays[arrayIndex] instanceof Array ){
        temp.push(arrays[arrayIndex][index])
      }
    }
      result.push(temp)
  }
  return result
 }

const maxLength = (arrays) =>{
  let max = arrays[0].length || 0
  for(let index = 1; index < arrays.length; index++){
    if (arrays[index].length > max){
      max = arrays[index].length
    }
  }
  return max
}

module.exports = zip
