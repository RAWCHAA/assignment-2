// 1: Write the function printInt(n)
//taking one parameter n and print
//all natural numbers from 1 to n in console.
function printInt(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
printInt(6);

// 2: Write the function printIntRev(n)
//taking one parameter n and  print
//all natural numbers in reverse in console (from n to 1).

function printIntRev(n) {
  for (var i = n; i > 0; i--) {
    console.log(i);
  }
}
printIntRev(6);

// Write the function checkInput(x) taking one parameter
// x and return the string ‘number’ if x is a number;
// return the string ‘string’ if x is a string; and return
//  ‘boolean’ if x is a boolean. Otherwise returns -1.
// Examples:
//        checkInput(5) ====> ‘number’
//        checkInput(‘hello’)======> ‘string’
//        checkInput(‘5’) ======> ‘string’
//        checkInput(true)=====> boolean
//        checkInput([1,2,3,4]) =====> -1

function checkInput(x) {
  if (x + 0 === x) {
    return "number";
  } else if (x === typeof "") {
    return "string";
  } else if (x === true || false) {
    return "boolean";
  } else {
    return "-1";
  }
}
console.log();
