const chunk = (array, length=1) =>{
  const resultArray=[]
for(let i=0;i<array.length;i=i+length){
let newArr=[]
  for(let j=0;j<length;j++){
    if(i+j<array.length){
    newArr.push(array[i+j])
}



  }
resultArray.push(newArr)

}
  return resultArray;
}
module.exports=chunk
