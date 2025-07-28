/* Description:
     # Century From Year
     Introduction

     The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
     Task

     Given a year, return the century it is in.
     Examples

     1705 --> 18
     1900 --> 19
     1601 --> 17
     2000 --> 20
     2742 --> 28


*/

/* Sample function: 
     function century(year) {
     // Finish this :)
     return;
}
*/

/*   # Intuition
     My initial thoughts are to...
     initilize the loop variable to 1, 
     use a while loop, 
     set the condition to (while the input year is greater than 100)
     and decrement the input year by 100 each loop
     increment the loop variable each loop until the input year reaches its exit condition
     and finally return the loop variable
*/

//   # Code
function century(year) {
  let result = 1;
  while (year > 100) {
    year -= 100;
    result++;
  }
  return result;
}

//Alternate solution:
// const century = year => Math.ceil(year/100)
