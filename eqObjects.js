// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const _=require('./index');
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key of Object.keys(object1)) {
      if (object1[key] instanceof Array) {
        if (!(_.eqArrays(object1[key], object2[key]))) {
          return false;
        };
      } else if (typeof object1[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        };
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        };
      }
    }
    return true;
  }
};
module.exports=eqObjects;