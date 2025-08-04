/* Description:
     # Beginner - Lost Without a Map
     Given an array of integers, return a new array with each value doubled.

     For example:

     [1, 2, 3] --> [2, 4, 6]

*/

/* Sample function: 
     function maps(x){

     } 
*/


//   # Code
function maps(x) {
  const doubledNums = x.map((x) => x * 2);
  return doubledNums;
}
