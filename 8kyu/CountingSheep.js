/* Description:
     Counting sheep...
     -Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

          For example,

               [true,  true,  true,  false,
               true,  true,  true,  true ,
               true,  false, true,  false,
               true,  false, false, true ,
               true,  true,  true,  true ,
               false, false, true,  true]

          The correct answer would be 17.

          Hint: Don't forget to check for bad values like null/undefined


*/

/* Sample function: 
   function countsheep(sheep) {
     // TODO
   } 
*/

/*   # Intuition
     My initial thoughts are to... 
     just loop through it and return the total
     or 
     simply use the array filter method
     use a call back function using the boolean constructor (.filter(Boolean)), 
     and apply the .length method to get the total

*/

//   # Code
function countsheep(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
