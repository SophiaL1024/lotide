const _=require('../index');
const assert=require('chai').assert;
describe('#letterPosition',()=>{
  it('returns [0] for "lighthouse in the house").l',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").l, [0]);    
  })
  it('returns [1,11] for "lighthouse in the house").i',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").i, [1,11]);    
  })
  it('returns [2] for "lighthouse in the house").g',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").g, [2]);    
  })
  it('returns [3,5,15,18] for "lighthouse in the house").h',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").h, [3,5,15,18]);    
  })
  it('returns [4,14] for "lighthouse in the house").t',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").t, [4,14]);    
  })
  it('returns [6,19] for "lighthouse in the house").o',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").o, [6,19]);    
  })
  it('returns [7,20] for "lighthouse in the house").l',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").u, [7,20]);    
  })
  it('returns [8,21] for "lighthouse in the house").s',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").s, [8,21]);    
  })
  it('returns [9,16,22] for "lighthouse in the house").e',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").e, [9,16,22]);    
  })
  it('returns [12] for "lighthouse in the house").n',()=>{
    assert.deepEqual(_.letterPositions("lighthouse in the house").n, [12]);    
  })


})
/* assertArraysEqual(_.letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(_.letterPositions("lighthouse in the house").i, [1, 11]);
assertArraysEqual(_.letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(_.letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(_.letterPositions("lighthouse in the house").t, [4, 14]);
assertArraysEqual(_.letterPositions("lighthouse in the house").o, [6, 19]);
assertArraysEqual(_.letterPositions("lighthouse in the house").u, [7, 20]);
assertArraysEqual(_.letterPositions("lighthouse in the house").s, [8, 21]);
assertArraysEqual(_.letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(_.letterPositions("lighthouse in the house").n, [12]);
 */