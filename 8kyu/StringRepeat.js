/* Description:
     # String repeat
     -Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
     Examples (input -> output)

          6, "I"     -> "IIIIII"
          5, "Hello" -> "HelloHelloHelloHelloHello"

 */

/* Sample function: 
     function repeatStr (n, s) {
     return '';
     }
*/

/*   # Intuition
     My intial thoughts are to declare a string variable,
     loop and record the initial string into the variable incremented n times,
     then return the variable. 
*/


//   # Code
function repeatStr (n, s) {
  let RepeatedStr =  '';
  for (let i = 1; i <= n; i++){
    RepeatedStr += s;
  }
  return RepeatedStr;
}