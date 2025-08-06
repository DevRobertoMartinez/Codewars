/* Description:
     # Beginner Series #1 School Paperwork

     Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

     Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
     Example:

     n= 5, m=5: 25
     n=-5, m=5:  0


*/

/* Sample function: 
     function paperwork(n, m) {
     
     }
*/

/*   # Intuition
     My initial thoughts are to... 
     use the ternary operator
          write both expressions that must evaluate to true
               classmates n must be greater than zero
               blank pages m must be greater than zero
          and combine with logical AND (&)
     output the two paths 
          if the expressions evaluate to true
               out put classmates n times number of black pages m
          else output 0
*/

//   # Code
function paperwork(n, m) {
  return (n > 0) & (m > 0) ? n * m : 0;
}

//Alternately
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
