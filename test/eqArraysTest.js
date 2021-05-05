const _ = require('../index');
const assert = require('chai').assert;
describe('#eqArrays', () => {
  it('compare two arrays [1, 2, 3] and [1, 2, 3]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
  it('compare two arrays [1, 2, 3], [3, 2, 1]', () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);
  })
  it('compare two arrays ["1", "2", "3"] and ["1", "2", "3"]', () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  })
  it('compare two arrays["1", "2", "3"] and ["1", "2", 1]', () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 1]), false);
  })
  it('compare two arrays [[2, 3], [4]] and [[2, 3], [4]]', () => {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  })
  it('compare two arrays [[2, 3], [4]] and [[2, 3], [4, 5]]', () => {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  })
  it('compare two arrays [[2, 3], [4]], [[2, 3], 4]', () => {
    assert.deepEqual(_.eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  })
});

  