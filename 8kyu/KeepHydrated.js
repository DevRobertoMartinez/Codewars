/* Description:
     # Keep Hydrated!

     Nathan loves cycling.

     Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

     You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

     For example:

          time = 3 ----> litres = 1

          time = 6.7---> litres = 3

          time = 11.8--> litres = 5

*/

/* Sample function: 
     function litres(time) {
          return 0;
     }
*/

/*   # Intuition
     My initial thoughts are to... 
     define the water needed rate (0.5)
     take the input (hours)
     multiply (hours) by (water needed) and assign to a result variable
     dound the vaiable 
     return the variable

*/

// Code:
function litres(time) {
  let WaterNeeded = 0.5;
  exactWater = WaterNeeded * time;
  totalLitres = Math.floor(exactWater);
  return totalLitres;
}
