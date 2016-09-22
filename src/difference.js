const difference = (arr1, ...values) => {
 let differenceArray=[]

  const matchCheck = (val,arr) => {
    for( let i = 0; i < arr.length; i++ ) {
      if( val !== arr[ i ] ) {
        if( !matchCheck( val, differenceArray ) ){

        }
      }
    }
  }

}

module.exports = difference
