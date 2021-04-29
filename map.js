const words = ["ground", "control", "to", "major", "tom"];
/* const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
} */
const results1 = words.map(word => word=word[0]);
console.log(results1);
const eqArrays = function (array1, array2) {
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
const assertArraysEqual = function (arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  }else{
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}
assertArraysEqual(results1,['g','c','t','m','t'])