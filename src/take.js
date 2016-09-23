const take=(array,n=1) => {
  let result=[]

  for (var i=0;i<n;i++){
      result.push(array[i])
  }

 return result
}
module.exports=take
