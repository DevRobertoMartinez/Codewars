/* Description:
     # Abbreviate a Two Word Name
     
     -Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

     The output should be two capital letters with a dot separating them.

     It should look like this:

          Sam Harris => S.H

          patrick feeney => P.F


*/

/* Sample function: 
     function abbrevName(name){

          // code away

     } 
*/

/*   # Intuition
     My intial thoughts are to... 
     -use the .split() method on the input string,
     -use the toUpperCase() method on the split segments,
     -return the segments concatenated with '.'

*/

//   # Code
function abbrevName(name) {
  let [first, last] = name.split(" ");
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
