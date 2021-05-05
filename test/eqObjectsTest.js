const _=require('../index');
const assert=require('chai').assert;
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
describe("#equalObject",()=>{
  it('compares { a: "1", b: "2" } and { b: "2", a: "1" }',()=>{
    assert.deepEqual(_.eqObjects(ab, ba), true)
  });
  it('compares { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }',()=>{
    assert.deepEqual(_.eqObjects(ab, abc), false)
  });
  it('compares { c: "1", d: ["2", 3] } and{ d: ["2", 3], c: "1" }',()=>{
    assert.deepEqual(_.eqObjects(cd, dc), true)
  });
  it('compares { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }',()=>{
    assert.deepEqual(_.eqObjects(cd, cd2), false)
  });
  it('compares { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }',()=>{
    assert.deepEqual(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
  });
  it('compares { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }',()=>{
    assert.deepEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
  });
  it('compares { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }',()=>{
    assert.deepEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
  });

})

