const omit = (thing, properties) =>{
    for(let i=0; i < properties.length; i++){
      delete thing[properties[i]]
    }
    return thing
}

module.exports = omit
