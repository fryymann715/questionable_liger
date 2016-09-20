const join = (array,separator='') => {
let result='';
for (let i=0;i<array.length;i++){
  if(i>0){
result=result+separator+array[i]
} else {
  result=result+array[i]
}

}
return result
}

module.exports =join
