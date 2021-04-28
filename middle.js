const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length - 1; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}
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
// console.log(eqArrays([1],[1]));
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

/* console.log(middle([1, 2, 3]), [2]) // => [2]
console.log(middle([1, 2, 3, 4, 5]), [3]) // => [3]
console.log(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]), [3, 4])  */