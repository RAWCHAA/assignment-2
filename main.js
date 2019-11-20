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

//solution1
var statement = 'this is the way we roll';
function simpleReverse(str){
  console.log(str.split('').reverse().join(''));
}
simpleReverse(statement);

//solution2
var statement = 'this is the way we roll';
function simpleReverse(str){
  console.log([...str].reverse().join(''));
}
simpleReverse(statement);

//solution 3
var statement = 'this is the way we roll';
function simpleReverse(str){
 let reversed = '';
 for(let i = str.length -1; i >= 0; i--){
   reversed = reversed += str[i]
 }
  console.log (reversed);
} 
simpleReverse(statement);

//solution 4
function simpleReverse(str){
  var solution ="";
  var length = str.length;
  for (var i = 1 i <= length i++){
  solution += str[length -i];
}
return solution;
}
console.log.simpleReverse(" hello");

//solution 5
var charArray = str.split;
var reversedArray = charArray.reverse()
return reversedArray.join("");
console.log.simpleReverse(" hello");


// 7 Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
// 	Examples:
// 	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
// 	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
// 	findDiff([1, 1, 1, 1, 1]) =======> 0 
// findDiff([1]) ======> 0;
// findDiff([]) =======> 0;
// Hint: Looking for max, min -> max - min.

function findDiff(arr);{
  var maxDiff = -1;
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min && maxDiff < arr[i] - min) {
      maxDiff = arr[i] - min;
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return maxDiff;
}
console.log(findDiff([15, 12, 34, 8, 27]));

// 8 Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
// 	Example:
// 		timeConvert(61) ======> 1:1
// 		timeConvert(63) =======> 1:3
// 		timeConvert(120)======> 2:0
// 		timeConvert(59)=======> 0:59
//     	Hint: Dividing(/) and modulo(%) the number 60.

function timeConvert(num){
  var hour = num / 60,
      minutes = num % 60;
  return hour.toFixed(0) + ":" + minutes;
}
console.log(timeConvert(61));

// 9 Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
// Example:
// 	findStr(“hi”, “dasdhidasdahidashi”) =======> 3
// 	findStr(“o”, “daodo”) =======> 2
// 	findStr(“ha”,”abcde”)=======> 0
// 	findStr(“h”, “hihelloho”)======> 3
// Hint: loop through the long, to check if there is any str

function findStr(str, long){
  var word = str.length;
  var lets = long.length;
  var counter = 0;{
    for(i = 0; i <= lets - word; i++)
        if (str === long.slice(i, i + word)){
            counter++;
  }
  }return counter;
} console.log (findStr("yo", "yoyoYOyoYO"));

// 10 Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between 
// them, including the bounds. 

// Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

// Examples:
// 	selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
// 	selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
//  selfDividingNumbers(12, 21) =======> [12, 15]

function selfDividingNumbers(left, right) {
  var chop = []; 
  for(left; left < right +1; left++) { 
      for(var i=0; i<left.toString().length; i++) {
          if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
              result = true;
          }
          else {
              result = false;
              break;
          }               
      }
      if(result === true)
          chop.push(left);
  } return chop;
} console.log(selfDividingNumbers(2, 22));

// 11 Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
// moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
// moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
// moveZeros([0,0,0]) ======> [0,0,0]
// moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]

function moveZeros(nums) {
  var result= [];
  var counter= 0;
    for (var i = 0; i<nums.length; i++){
      if (nums[i]=== 0) {
        counter++;
    } else {
        result.push(nums[i]);
    }
    }     
    while (counter > 0) {
      result.push(0);
      counter--; 
  }
      return result;
  }
  console.log(moveZeros([1,2,0,0,2,312,33,0,0]));