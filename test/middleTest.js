const assert = require('chai').assert;
const _ = require('../index');
// const assertArraysEqual=require('../assertArraysEqual');
describe("#_.middle",()=>{
  it("returns []",()=>{
    assert.deepEqual(_.middle([1]), []);
  })
  it("returns []",()=>{
    assert.deepEqual(_.middle([1,2]), []);
  })
  it("returns [2]",()=>{
    assert.deepEqual(_.middle([1,2,3]), [2]);
  })
  it("returns [3]",()=>{
    assert.deepEqual(_.middle([1,2,3,4,5]), [3]);
  })
  it("returns [2,3]",()=>{
    assert.deepEqual(_.middle([1,2,3,4]), [2,3]);
  })
  it("returns [1,2,3,4,5,6]",()=>{
    assert.deepEqual(_.middle([1,2,3,4,5,6]), [3,4]);
  })
})
// assertArraysEqual(_.middle([1]), []) // => []
// assertArraysEqual(_.middle([1, 2]), []) // => []
// assertArraysEqual(_.middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(_.middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(_.middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

