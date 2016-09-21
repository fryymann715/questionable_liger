const concat = (first, ...second) => {
  const result = []

  if(first.constructor===Array){
  for(let i=0;i<first.length;i++){
    result.push(first[i])
  }
} else {
  result.push(first)
}

if(second.constructor===Array){
  for(let j=0;j<second.length;j++){
    result.push(second[j])
  }
} else{
  result.push(second)
}
  return result
}

module.exports = concat
