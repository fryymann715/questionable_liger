const reverse = (array) =>{
  if (array instanceof Array){
    let result = []
    for(i=array.length -1 ; i>=0 ;i--){
      console.log('item', array[i], 'array currently looks like', result, 'round', i)
      result.push(array[i])
    }
    return result
  }else{
  return array
  }
}

module.exports = reverse
