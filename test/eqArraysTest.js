const _ = require('../index');

_.assertEqual((_.eqArrays([1, 2, 3], [1, 2, 3])),true); // => true
_.assertEqual((_.eqArrays([1, 2, 3], [3, 2, 1])),false);// => false

_.assertEqual((_.eqArrays(["1", "2", "3"], ["1", "2", "3"])),true); // => true
_.assertEqual((_.eqArrays(["1", "2", "3"], ["1", "2", 1])),false);// => false

_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
_.assertEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 1]), false);
_.assertEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); // => true

_.assertEqual(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false); // => false
_.assertEqual(_.eqArrays([[2, 3], [4]], [[2, 3], 4]),false); // => false