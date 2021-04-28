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
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}
const without = function (sourceArr, removeArr) {
  let withoutArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    let flag=true;
    for (let j = 0; j < removeArr.length; j++) {
      if (sourceArr[i] === removeArr[j]) {
        flag=false;
      }
    }
    if(flag===true){
      withoutArr.push(sourceArr[i]);
    }
  }
  return withoutArr;
}
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);