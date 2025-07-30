/* Description:
     # Convert number to reversed array of digits
     Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
     Example (Input => Output):

          35231 => [1,3,2,5,3]
          0     => [0]



*/

/* Sample function: 
     function name(){

     } 
*/

/*   # Intuition
     My initial thoughts are to... 
     -typecast the input number to a string
     -split the string into an array, and reverse it
     -typecast the resulting array's members to Numbers with .map(Number)
*/

//   # Code
function digitize(n) {
  const arr = String(n).split("").reverse();
  const NumArr = arr.map(Number);
  return NumArr;
}

// Written more concisely:
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
