const slice=(array, start=0, end=array.length)=>{
const sliceArray=[]
  for(let i=start;i<end;i++){
sliceArray.push(array[i])

  }
  return sliceArray
}
module.exports=slice
