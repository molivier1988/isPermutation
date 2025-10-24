# isPermutation

Test is 2 strings are permutations

## Description

This mini project asked to create an algorithm that would compare 2 string arguments and see if they were permutations e.g. 'pets' and 'pest' are permutations but 'pets' and 'pesty' aren't.

## Relections

The solution to this was much simpler than my first attempt which made use initially of a conditional if statement to check if both arrays were of the same length. If not then the function is exited else I used a for loop and another if statement to check if each element of both arrays (with the same index) were equal. If all elements were equal the function returned true else false.

This actually did work but contained significantly more lines of code than the final solution which was much easier to read.

### Psuedo code

Step 1. Use the split('') method to convert the string into an array of single characters. Do this for both arguments.
Step 2. Sort both arrays, when sorted both arrays should contain the same characters in the same order (if perumations)
Step 4. Join both arrays into strings with join()
Step 5. We can now use the equality operator to test is both strings are the same. Rather than loop through both arrays testing each element for equality.

### Solution

```js
function isPermutation(str1, str2) {
  return str1.split("").sort().join() == str2.split("").sort().join();
}
```

### Dependencies

None

### Installing

No installation required

### Executing program

use node or run in browser

## Help

## Authors

Contributors names and contact info

ex. Mark Olivier  
ex. [LinkedIn](www.linkedin.com/in/)

## Version History

- 0.1
  - Initial Release

## License

## Acknowledgments

Inspiration, code snippets, etc.

- Rob Merrill https://www.udemy.com/user/robgmerrill/
