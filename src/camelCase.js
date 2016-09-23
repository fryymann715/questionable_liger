
const camelCase=(string)=>{
let capital=false
let stringArray=[]
stringArray.push(string[0])
    for(let i=1;i<string.length;i++){
      if(string[i]===string[i].toUpperCase()){
        if(string[i-1]===string[i-1].toLowerCase()){
          console.log('pushing '+ 'space' +string[i])
            stringArray.push(' '+string[i])
        } else {
          stringArray.push(string[i])
        }

      } else {
        stringArray.push(string[i])
      }
    }
    string=stringArray.join('')

    string=string.toLowerCase()
    let wordCheck=new RegExp(/[\s-_]([a-zA-Z])/g)
    let spaceCheck=new RegExp(/([\s-_])/g)
    let camelCase =string.replace(wordCheck,function(match){return match.toUpperCase()});
 camelCase=camelCase.replace(spaceCheck,'')
      return camelCase
}
module.exports = camelCase
