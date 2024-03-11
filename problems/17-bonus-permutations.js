/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(array) {
  if (array.length === 1) {
      return [array]; // Base case: array with one element has one permutation
  }
  
  const perms = [];
  for (let i = 0; i < array.length; i++) {
      const current = array[i];
      const remaining = array.slice(0, i).concat(array.slice(i + 1)); // Get array without the current element
      const permsWithoutCurrent = permutations(remaining); // Recursively get permutations of remaining elements
      for (let j = 0; j < permsWithoutCurrent.length; j++) {
          perms.push([current, ...permsWithoutCurrent[j]]); // Add current element to each permutation
      }
  }
  return perms;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
