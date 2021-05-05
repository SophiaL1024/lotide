const _ = require('../index');
const assert = require('chai').assert;
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
describe('#findKeysByVale', () => {
  it('returns drama for bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })
  it('returns undefined for bestTVShowsByGenre, "That \'70s Show"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
})
