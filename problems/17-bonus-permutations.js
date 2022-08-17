/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 4 * 3 * 2 * 1 = 24
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
permutations([1, 2, 3, 4]) // [[1, 2, 3, 4], [1, 2, 4, 3], [1, 3, 2, 4], [1, 3, 4, 2], [1, 4, 2, 3], [1, 4, 3, 2],
                               [2, 1, 3, 4], [2, 1, 4, 3], [2, 3, 1, 4], [2, 3, 4, 1], [2, 4, 1, 3], [2, 4, 3, 1],
                               [3, 1, 2, 4], [3, 1, 4, 2], [3, 2, 1, 4], [3, 2, 4, 1], [3, 4, 1, 2], [3, 4, 2, 1],
                               [4, 1, 2, 3], [4, 1, 3, 2], [4, 2, 1, 3], [4, 2, 3, 1], [4, 3, 1, 2], [4, 3, 2, 1]]
***********************************************************************/

// your code here
const permutations = (arr, n = 0) => {
  const res = []

  if(arr.length === n) return [arr]

  for(let i = n; i < arr.length; i++){
    // deep copy not to mutate original array
    const copyArr = arr.slice()
    // swap the first element and ith element
    // for some reason, destrucing doesn't work
    const temp = copyArr[n]
    copyArr[n] = copyArr[i]
    copyArr[i] = temp

    res.push(...permutations(copyArr, n + 1))
  }

  return res
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
