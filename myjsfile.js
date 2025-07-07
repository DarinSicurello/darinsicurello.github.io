
/*  Week 7 Assignment

1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the
last element of the array.

Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
2>
Add a new age to your array and repeat the step above to ensure it is dynamic.
 (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.

3.
Create an array called names that contains the following 
values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

Use a loop to iterate through the array and calculate the
//average number of letters per name.

Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces 
Initialize "totalLetters" before using it  Complete Below code */


let ages = [3, 9, 23, 64, 2, 8, 28, 9]; 
let result = ages[ages.length - 1] - ages[0]; {

console.log(ages);

ages.push(35);  
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

let average = sum / ages.length;

console.log("Avg age", average)




let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names)


let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
totalLetters += names[i].length;
}


for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

 
let averageLetters = totalLetters / names.length;
console.log("Avg letters / Per name:", averageLetters);

let allNames = "";
for (let i = 0; i < names.length; i++) {
  allNames += names[i];
  if (i < names.length - 1) {
    allNames += " ";
  }
}

console.log("Names concat:", allNames);



/* 4. 
How do you access the last element of any array?

I used pop it used for accessing the last element as its easy to
remeber   */
 
const arr = [1, 2, 3, 4, 5];
   const lastElement = arr.pop();
console.log(lastElement);


// 5. How do you access the first element of any array?
// so I used Shift for acessing the last element. 

const arr2 = [1, 2, 3, 4, 5];
   const firstElement = arr2.shift();
console.log(firstElement);

/*  
6.
Create a new array called nameLengths. Write a loop 
to iterate over the previously created names array and add the length of each 
name to the nameLengths array.
For example:   */

let names1 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let names2 = ["Kelly", "Sam", "Kate"];
let nameLengths = [5, 3, 4];  // This might be leftover; you can reset it if needed

// Combine both name arrays
let combinedNames = names1.concat(names2);

// Clear or reinitialize nameLengths if you want to start fresh
nameLengths = [];

for (let i = 0; i < combinedNames.length; i++) {
  nameLengths.push(combinedNames[i].length);
}

console.log("Name lengths:", nameLengths);

/* 7. Write a loop to iterate over the nameLengths array and calculate the
 sum of all the elements in the array.  */

let nameLengths2 = [3, 5, 4, 5, 4, 3, 5, 3, 4];  // Example values Lenghts. 

let totalLength2 = 0;

for (let i = 0; i < nameLengths2.length; i++) {
totalLength2 += nameLengths2[i];
}

console.log("Total sum of name lengths:", totalLength2);


 /* 8. <<<FRESH CODE>>
Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times.
 (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').  */

function repeatWord(word, n) {
  return word.repeat(n);

}
console.log(repeatWord("Hello", 3));

/*  
9.
Write a function that takes two parameters, firstName and lastName, 
and returns a full name. The full name should be the first and the 
last name separated by a space.
 */

function namesPar(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

console.log(namesPar("Darin", "Sicurello")); 


/*  10. Write a function that takes an array of numbers and
 returns true if the sum of all the numbers in the array is greater than 100. */

let arrayNum100 = [1, 55, 79, 45, 25, 99];
function isSumGreaterThan100(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum > 100;
}
console.log(isSumGreaterThan100(arrayNum100));

 /* 11. Write a function that takes an array of numbers and returns 
 the average of all the elements in the array. */

let arrayNumAvg = [2, 5, 78, 34, 45, 23, 89];

function getAvgNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(getAvgNum(arrayNumAvg));

 /*  12. Write a function that takes two arrays of numbers and
 returns true if the average of the elements in the first
array is greater than the average of the elements in the second array. 
  Note I used a Concatenation */

let arrayNumAvg2 = [2, 5, 78, 34, 45, 23, 89];
let arrayNumAvg3 = [4, 9, 28, 78, 91, 62, 97];

function compareAverages(arr1, arr2) {
  // Helper function to calculate average
  function getAverage(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
  }

  if (getAverage(arr1) > getAverage(arr2)) {
    return true;
  } else {
    return false;
  }
}

console.log(compareAverages(arrayNumAvg2, arrayNumAvg3))
  
  
    

  /* 13.
Write a function called willBuyDrink that takes a boolean
isHotOutside, and a number moneyInPocket, and returns true
if it is hot outside and if moneyInPocket is greater than 10.50.  */

function willBuyDrink(isHotOutside) {
  let moneyInPocket = 12.75;
  
  if (isHotOutside && moneyInPocket > 10.50) {
    return true;
  } else {
    return false;
  }
}

console.log(willBuyDrink(true));  
console.log(willBuyDrink(false)) 


/* 14.
Create a function of your own that solves a problem. In comments,
 write what the function does and why you created it. */

 /*I found a simple random number code but changed it as most lottos use a high number than 49 
 plus added power ball random so I copied generator and renamed it powerball to count so I used 
 2 numbers generators. I thought it is fun and useful code espsically for learning  loops,
 operators  */

function generateLotteryNumbers(count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a, b) => a - b); // Convert set to array and sort
}


window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLotto").appendChild(node);
  }
}
// To Create the Powerball I just copyed the
  // Example usage for a 6-number lottery with numbers from 1 to 60:
const lotteryNumbers = generateLotteryNumbers(6, 69);
const powerballNumbers = generateLotteryNumbers(1, 26);
console.log('Your Lucky Numbers Today are:')
console.log(lotteryNumbers);
// Example usage for a 1-number lottery with numbers from 1 to 26:
console.log('...and your Powerball Number is:')
console.log(powerballNumbers);

}

// Check out my Lotto HTML page! 