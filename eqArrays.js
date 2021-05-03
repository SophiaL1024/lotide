const assertEqual=require('./assertEqual');
const eqArrays = function (arr1, arr2) {
  let flag = true;
  if (arr1.length !== arr2.length) {
    flag = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        flag = false;
      }   
    }
  }
  return flag;
}
module.exports=eqArrays;


