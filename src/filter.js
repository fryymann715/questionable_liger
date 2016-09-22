const filter=(collection,predicate=collection) => {
let trueValues=[]
if(collection===undefined||null){
  return undefined
}
let collectionType=collection.constructor
let predType=predicate.constructor
console.log(predicate);
console.log(collectionType);
console.log(predType);



if (predType===Function){
  if(collectionType===Array){
    for(let i=0;i<collection.length;i++){
      let object=collection[i]
    // let current= Object.keys(collection[i])
      if(predicate(object)){
        trueValues.push(object)
    }
  }
  return trueValues
} else if(collectionType===Object){
  for(let key in collection){
if(filterObject(collection[key],key,collection)){
  console.log(collection[key]);
  console.log(key);
  console.log(collection);
  trueValues.push(collection[key])
}

  }



  // //doesn't work, might need to start over
  //   let keys=Object.keys(collection)
  //     for (let i=0;i<keys.length;i++){
  //       let key=keys[i]
  //       if(predicate(key)){
  //         let subArray=[]
  //         subArray.push(collection[key])
  //         subArray.push(collection[key].val)
  //         trueValues.push(subArray)
  // //
  //   }
  // }
  console.log('object result ' +trueValues);
  return trueValues
}
} else if (predType===Array){

} else if (predType===Object){

} else if(predType===String||Number){

} else if(predType===Boolean){

}







 console.log(trueValues);


// console.log('collection '+collection);
//
//   let trueArr=[]
// for (let key in collection){
//   console.log('predicate is '+predicate);
//   console.log('index is '+collection[key]);
//   for (let item in key){
// console.log('item is '+item);
//
//   }
//   if (predicate(collection[key])){
//     trueArr.push(collection[key])
//   }
// }





}
//my best interpretation of how Jrob's function worked -A
const filterObject=  (object) =>(value, key, collection) => {
  let match=true;
  for(let key in object){
    console.log('value is '+value);
    console.log('key is '+key);
    console.log('collection is '+collection);
    match=match && value[key]===object[key]
  }
  return match
}



module.exports = filter
