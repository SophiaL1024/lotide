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
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 1]))// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 1]), false);

