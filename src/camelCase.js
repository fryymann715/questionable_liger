
const camelCase=(string)=>{
    string=string.toLowerCase()
    let wordCheck=new RegExp(/[\s-_]([a-zA-Z])/g)
    let spaceCheck=new RegExp(/([\s-_])/g)
    let camelCase =string.replace(wordCheck,function(match){return match.toUpperCase()});
 camelCase=camelCase.replace(spaceCheck,'')
      return camelCase
}
module.exports = camelCase
