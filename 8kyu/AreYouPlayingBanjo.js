/* Description:
     # Are You Playing Banjo?
     Create a function which answers the question "Are you playing banjo?".
     If your name starts with the letter "R" or lower case "r", you are playing banjo!

     The function takes a name as its only argument, and returns one of the following strings:

     name + " plays banjo" 
     name + " does not play banjo"

     Names given are always valid strings.


*/

/* Sample function: 
     function areYouPlayingBanjo(name) {
     // Implement me
     return name;
}
*/

/*   # Intuition
     My initial thoughts are to... 
     use startsWith() to check the start of the string for the target strings('R' or 'r')
     wrap in an if-else statement to out put the correct returned strings
*/

//   # Code
function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} plays banjo`;
  } else return `${name} does not play banjo`;
}
