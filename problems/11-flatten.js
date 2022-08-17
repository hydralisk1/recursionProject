/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
const flatten = arr => {
  const res = []

  arr.forEach((d, i) => {
    if(Array.isArray(d)) res.push(...flatten(...arr.slice(i)))
    else res.push(d)
  })

  return res
}

console.log(flatten([1, [2, [3]]]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
