const reduce = (collection, itaratee, acc='') =>{
if(acc===''){
  let accumulator=collection[0];
for(let i=1;i<collection.length;i++){
  accumulator= itaratee(accumulator,collection[i]);
}
  return accumulator
} else {
  let accumulator=acc;
  for(let i=0;i<collection.length;i++){
    accumulator=itaratee(accumulator,collection[i]);
  }
    return accumulator
}



}
module.exports=reduce
