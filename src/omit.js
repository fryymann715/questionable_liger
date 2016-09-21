const omit = (thing, properties) =>{
  console.log(properties);
    for(i=0; i < properties.length; i++){
      delete thing[properties[i]]
      console.log(properties[i])
    }
    return thing
}

module.exports = omit
