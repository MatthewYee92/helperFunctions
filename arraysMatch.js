const doArraysMatch = function(arr1, arr2) {
  // check to see if arrays are the same length
  if (arr1.length !== arr2.length) return false;

  // Check if all elements exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
