/* Description:
     #A Needle in the Haystack

     Can you find the needle in the haystack?

     Write a function findNeedle() that takes an array full of junk but containing one "needle"

     After your function finds the needle it should return a message (as a string) that says:

     "found the needle at position " plus the index it found the needle, so:

     Example(Input --> Output)

     ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


*/

/* Sample function: 
     function findNeedle(haystack) {
     // your code here
     }
*/

/*   # Intuition
     My initial thoughts are to... 
     use the findIndex() method of arrays, on the input array, to find the "needle" position
     then save that to a variable
     use string interpolation to produce the required output.
*/

//   # Code
function findNeedle(haystack) {
  const foundPosition = haystack.findIndex((x) => x === "needle");
  return `found the needle at position ${foundPosition}`;
}

// Other solution:
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

//uses the .indexOf() method and injects the function within the template literal
