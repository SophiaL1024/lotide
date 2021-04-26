const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail=function(arr){
  return arr.slice(1);
}
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2); // original array should still have 3 elements!
assertEqual(tail([]).length, 0);
assertEqual(tail(['a']).length, 0);