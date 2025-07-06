// Reversed Strings

// Description:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// function solution(str){
   //write the function//
// }


// Solution:

function solution(str){
  const MyArray = str.split("");
  const RevArray = MyArray.reverse();
  const RevStr = RevArray.join('');
  return RevStr
}