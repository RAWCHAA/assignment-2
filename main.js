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

// 3 Write the function checkInput(x) taking one parameter
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
  } else if (typeof x === 'string') {
    return "string";
  } else if (x === true || x === false) {
    return "boolean";
  } else {
    return "-1";
  }
}
console.log(checkInput());

// 4 Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it 
// Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
// 	       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
// 	       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
//                   simpleEvenAdding(1) ======> 0
// 	       simpleEvenAdding(0) =======> 0
// Hint: loop + if conditional + %

function simpleEvenAdding(num) {
  var sum = 0;
  for (var i = 0; i <= num; i = i + 2) {
   sum = sum + i;
  }
  return sum;
}

// 5 Write the function letterCapitalize(str) taking a string and 
// capitalize the first letter of each word. 
// The given words will be separated by only one space.
// Examples:
// letterCapitalize(“hello world”) ===========> “Hello World”
// letterCapitalize(“you cannot find the answer online”) =====>  
// “You Cannot Find The Answer Online”
	
// Hint: There is a built-in function in JavaScript that change string into uppercase. There is also a function to separate string into an array of words. (split)
function letterCapitalize(str) {
  var solution = "";
  var words = str.split(" ");
  var length = words.length;
  for (var i = 0; i < length; i++) {
    solution += " " + words[i][0].toUpperCase() + words[i].slice(1);
  }  return solution.slice(1);
} console.log (letterCapitalize("hi there friend!!!"));

// 6 Write the function simpleReverse(str) taking a string and return the string in reversed order. 
// 	Examples:
// 		 simpleReverse(‘hello’) ======> ‘olleh’
// 		 simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’
// Hint: Think of how you can loop through a string or array of characters backwards to produce a new string

var statement = 'this is the way we roll';
function simpleReverse(str){
  console.log(str.split('').reverse().join(''));
}
simpleReverse(statement);

var statement = 'this is the way we roll';
function simpleReverse(str){
  console.log([...str].reverse().join(''));
}
simpleReverse(statement);

var statement = 'this is the way we roll';
function simpleReverse(str){
 let reversed = '';
 for(let i = str.length -1; i >= 0; i--){
   reversed = reversed += str[i]
 }
  console.log (reversed);
} 
simpleReverse(statement);


// 7 Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
// 	Examples:
// 	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
// 	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
// 	findDiff([1, 1, 1, 1, 1]) =======> 0 
// findDiff([1]) ======> 0;
// findDiff([]) =======> 0;
// Hint: Looking for max, min -> max - min.

function findDiff(arr)