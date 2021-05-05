const _=require('../index');
const assert=require('chai').assert;
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly",()=>{
  it("turns 1 for ['Jason']",()=>{
    assert.strictEqual(result1["Jason"], 1)
  });
  it("turns undefinde for ['Karima']",()=>{
    assert.strictEqual(result1['Karima'],undefined)
  });
  it("turns 2 for ['Fang']",()=>{
    assert.strictEqual(result1['Fang'],2)
  });
  it("turns undefined for ['Agouhanna']",()=>{
    assert.strictEqual(result1['Agouhanna'],undefined)
  });
})
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);