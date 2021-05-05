const findKeyByValue=function(obj,value){
  for(const key of Object.keys(obj)){
    if(obj[key]===value){
      return key;
    }
  }
}
module.exports=findKeyByValue;