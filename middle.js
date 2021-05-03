const middle = function(array) {
  const result = [];
  if(array.length===1||array.length===2){
    return result;
  }else{
    switch (array.length % 2) {
      case 1:
        result.push(array[Math.floor(array.length / 2)]);
        break;
      case 0:
        result.push (array[array.length / 2 - 1]);
        result.push (array[array.length / 2]);
        break;
    }
    return result;
  }    
}
module.exports=middle;