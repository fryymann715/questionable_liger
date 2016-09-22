const reduceRight = (collection, itaratee, acc='') =>{
if(acc===''){
  let accumulator=collection[collection.length-1];
for(let i=collection.length-2;i>-1;i--){
  accumulator= itaratee(accumulator,collection[i]);
}
  return accumulator
} else {
  let accumulator=acc;
  for(let i=collection.length-1;i>-1;i--){
    accumulator=itaratee(accumulator,collection[i]);
  }
    return accumulator
}



}
module.exports=reduceRight
