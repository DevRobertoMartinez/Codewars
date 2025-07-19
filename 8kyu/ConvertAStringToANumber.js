/* Description:
     # Convert a String to a Number!

     -We need a function that can transform a string into a number. What ways of achieving this do you know?

     Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
     Examples

          "1234" --> 1234
          "605"  --> 605
          "1405" --> 1405
          "-7" --> -7


*/

/* Sample function: 
     const stringToNumber = function(str){
          // put your code here
          return null;
     } 
*/

/*   # Intuition
     My intial thoughts are to... 
     * cast the input as a string
*/


//   # Code
const stringToNumber = function(str){
  return Number(str);
}