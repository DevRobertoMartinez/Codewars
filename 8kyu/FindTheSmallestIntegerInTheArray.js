/* Description:
     # Find the smallest integer in the array
     
     -Given an array of integers your solution should find the smallest integer.

     For example:

          Given [34, 15, 88, 2] your solution will return 2
          Given [34, -345, -1, 100] your solution will return -345

     You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

/* Sample function: 
     function findSmallestInt(arr) {
          //your code here
     return 0;
} 
*/

/*   # Intuition
     My intial thoughts are to... 
     * set a variable (purpose is to hold the smallest integer) - SmallestInt equal to first member of array
     * loop through the array
     * update the SmallestInt if current array member is smaller than SmallestInt
     * return SmallestInt
     
*/


//   # Code
function findSmallestInt(arr) {
  let SmallestInt = arr[0];
    for (let i=0; i < arr.length; i++){
      if (SmallestInt > arr[i]) {
        (SmallestInt = arr[i]);
      }
    }
    return (SmallestInt);
}
