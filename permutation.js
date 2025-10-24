let str1 = "pest";
let str2 = "pets";

function isPermutation(str1, str2) {
  return str1.split("").sort().join() == str2.split("").sort().join();
}

console.log(isPermutation(str1, str2));

/* So my solution was much more complicated with the use of conditional if statements and for loops.
The actual solution (above) was much more elegant.
Step 1. Use the split('') method to convert the string into an array of single characters. Do this for both arguments.
Step 2. Sort both arrays, when sorted both arrays should contain the same characters in the same order (if perumations)
Step 4. Join both arrays into strings with join()
Step 5. We can now use the equality operator to test is both strings are the same.*/
