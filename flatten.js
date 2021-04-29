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
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}
const flatten = function (nestedArray) {
  const flat = [];
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
    item.forEach(element => {
      flat.push(element);
    });
    } else {
      flat.push(item);
    }
  }
  return flat;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
