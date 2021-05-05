const flatten = function (nestedArray) {
  const flat = [];
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
    item.forEach(element => {
      flat.push(element);
    });
    } else {
      flat.push(item);
    }
  }
  return flat;
};
module.exports=flatten;
