const compact=(array) => {
  let result=[]
  for(let i=0;i<array.length;i++){
    switch(array[i]){
          case null:
          case undefined:
          case '':
          case false:
          case 0:
            break;
        default:
          result.push(array[i])
    }

  }
  return result
}

module.exports = compact
