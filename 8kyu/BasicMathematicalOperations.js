/* Description:
     Basic Mathematical Operations
     -Your task is to create a function that does four basic mathematical operations.

     The function should take three arguments - operation(string/char), value1(number), value2(number).
     The function should return result of numbers after applying the chosen operation.

     Examples(Operator, value1, value2) --> output

          ('+', 4, 7) --> 11
          ('-', 15, 18) --> -3
          ('*', 5, 5) --> 25
          ('/', 49, 7) --> 7



*/

/* Sample function: 
     function basicOp(operation, value1, value2){
     //Code
     return 0;
     }
*/

//   # Code
const basicOp = (operation, value1, value2) =>
  operation == "+"
    ? value1 + value2
    : operation == "-"
    ? value1 - value2
    : operation == "*"
    ? value1 * value2
    : value1 / value2;

// Other solutions:

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

function basicOp(o, a, b) {
  return eval(a + o + b);
}

function basicOp(operation, value1, value2) {
  // Code
  if (operation == "+") {
    return value1 + value2;
  }
  if (operation == "-") {
    return value1 - value2;
  }
  if (operation == "*") {
    return value1 * value2;
  }
  if (operation == "/") {
    return value1 / value2;
  }
}
