/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr) {
  if (arr.length === 0) {
      return [[]]; // Base case: empty array has one subset, the empty array itself
  }

  const first = arr[0]; // Take the first element of the array
  const rest = arr.slice(1); // Get the rest of the array

  // Recursively generate subsets without the first element
  const withoutFirst = subsets(rest);
  
  // For each subset without the first element, include the first element and add it to the result
  const withFirst = withoutFirst.map(subset => [first, ...subset]);

  // Combine subsets without the first element with subsets with the first element
  return withoutFirst.concat(withFirst);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
