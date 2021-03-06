/* const assertEqual=require('../assertEqual')
const tail=require('../tail');
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words).length, 2); // original array should still have 3 elements!
assertEqual(tail([]).length, 0);
assertEqual(tail(['a']).length, 0); */

const assert = require('chai').assert;
const _ = require('../index');
describe("#tail",()=>{
  it("returns ['Lighthouse','Labs']",()=>{
    assert.deepEqual(_.tail(["Yo Yo", "Lighthouse", "Labs"]),['Lighthouse','Labs']);
  })
});