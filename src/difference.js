const difference = (arr1, ...values) => {
 let differenceArray=[]


   const matchCheck = (val,arr) => {
     let match= false
     for( let i = 0; i < arr.length; i++ ) {

       if( val === arr[ i ] ) {
         match = true
         return match
       }
}
return match
}
for(var i=0;i<values.length;i++){
  if(values[i].constructor===Array){

        for(let k=0;k<arr1.length;k++){
          if(!matchCheck(arr1[k],values[i])){
            if(!matchCheck(arr1[k],differenceArray)){
              differenceArray.push(arr1[k])

            }
          }

        }

    for(let j=0;j<values[i].length;j++){
      if(!matchCheck(values[i][j],arr1)){
        if(!matchCheck(values[i][j],differenceArray)){
          differenceArray.push(values[i][j])

        }
      }

    }

  } else {


          for(let k=0;k<arr1.length;k++){
            if(!matchCheck(arr1[k],values[i])){
              if(!matchCheck(arr1[k],differenceArray)){
                differenceArray.push(arr1[k])

              }
            }

          }
    if(!matchCheck(values[i],arr1)){
      if(!matchCheck(values[i],differenceArray)){
        differenceArray.push(values[i])

      }
    }
  }

}



console.log('values are: '+values);
return differenceArray
}

module.exports = difference
