const nth=(array,index=0) => {
  if(index<0){
return array[array.length+index]


  } else {
    return array[index]
  }
}

module.exports = nth
