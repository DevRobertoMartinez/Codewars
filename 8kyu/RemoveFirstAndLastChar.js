/* Description:

Remove First and Last Character
# Task

     Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

     Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

# Examples

     removeChar('eloquent') // -> 'loquen'
     removeChar('country')  // -> 'ountr' 
     removeChar('person')   // -> 'erso'
     removeChar('ab')       // -> '' (empty string)
     removeChar('xyz')      // -> 'y'

 # Function Signature

     function removeChar(str) {
     // Your code here
     }

# Requirements

    The input string will always have at least 2 characters
    For strings with exactly 2 characters, return an empty string
    For strings with 3 or more characters, remove the first and last character
    The function should handle strings containing letters, numbers, and special characters

# Test Cases

     Your solution will be tested against:

          Basic functionality with common words
          Edge cases with 2-character and 3-character strings
          Strings containing numbers and special characters
          Random test cases of varying lengths



 */

/*   # Intuition
     My initial thoughts are to slice the input string,
     and save the result in a new string variable, 
     and return the new string */

//   # Code

function removeChar(str) {
  str.length >= 2;
  const ResultStr = str.slice(1, -1);
  return ResultStr;
}
