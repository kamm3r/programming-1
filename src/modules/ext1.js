"use strict";

const app = document.querySelector("#root");
const section = document.querySelector(".hello");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");
const p6 = document.createElement("p");
const p7 = document.createElement("p");
const p8 = document.createElement("p");
const list = document.createElement("ul");
const h2 = document.createElement("h2");
h2.innerText =
  "Module 1. Interactive programs + Conditional expressions and loops";

// Write a program that logs to the console this text:
// I'm printing to console!
console.log("I'm printing to console!");
// Write a program that prompts for user's name and then greets the user.
//Print the result to the HTML document: Hello, Name!
const myName = prompt("Hello, my name is:");
p1.innerHTML = "Good morning, " + myName + "!";

// Write a program that prompts for three integers.
// The program prints the sum, product and average of
// the numbers to the HTML document.
let [a, b, c] = prompt("input three numbers").split(" ");
(a = Number(a)), (b = Number(b)), (c = Number(c));
p2.innerHTML = `sum ${a + b + c}, product ${a * b * c}, average ${a / b / c}`;

// In the Harry Potter children's books, the sorting hat assigns a
// new student at Hogwarts School of Witchcraft and Wizardry to one
// of the four classes, which are Gryffindor, Slytherin, Hufflepuff,
// and Ravenclaw. Write an electronic sorting hat that asks for a
// student's name and draws a room for him. If you enter Anna as the
// name, for example, the program prints to the HTML document
// "Anna, you are Ravenclaw."
const HogwartsHouses = ["Gryffindor", "Slytherin", "Hufflepuff", "RavenClaw"];

const HPName = prompt("my name is");

function numberRange(start, end) {
  return Math.floor(
    Math.random() * (Math.floor(end) - Math.ceil(start) + 1) + Math.ceil(start)
  );
}

const sortingHat = numberRange(0, 3);

p3.innerHTML = `hp name ${HPName}, my house is ${HogwartsHouses[sortingHat]}`;

// Write a program that asks the user to enter a year and notifies
// the user whether the input year is a leap year. A year is a leap
// year if it is divisible by four. However, years divisible by 100
// are leap years only if they are also divisible by 400.
// Print the result on the HTML document.

const year = prompt("enter year");

let sth;

if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
  sth = "this is a leap year";
} else {
  sth = "not a leap year";
}

p4.innerHTML = `${sth}`;

// Write a program that prints the text "Should I calculate the square
// root?" in a confirmation window. If the user selects OK, the program
// asks for the number and calculates and prints its square root to the
// HTML document. If the user selects Cancel, the program prints the text
// "The square root is not calculated." to the HTML document

const sqrt = confirm("Should I calculate the square root?");

if (sqrt == true) {
  const hmm = Math.abs(a * b * c);
  p5.innerHTML = `square root from this ${hmm}. square root is this ${Math.sqrt(
    hmm
  )}`;
} else {
  p5.innerHTML = `The square root is not calculated.`;
}

// Write a program that rolls user defined number of dice and
// displays the sum of the results of the dice rolls.(2p)

// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.

const rolltimes = prompt("how many times you want to roll dice");
const diceroll = [];

let sum = 0;

for (let i = 0; i < rolltimes; ++i) {
  diceroll.push(numberRange(1, 6));
}

for (const value of diceroll) {
  sum += value;
  console.log(value);
}

p6.innerHTML = `dice roll [${diceroll}] sum of the dicerolls ${sum} `;

// Write a program that prompts the user for the start and end year.
// The program prints all leap years from the interval given by the user.
// Printing is done in an unordered list to the HTML document. (3p)

// Example output HTML code:
// <ul>
//   <li>1992</li>
//   <li>1996</li>
//   <li>2000</li>
//   <li>2004</li>
//   <li>2008</li>
//</ul>

const startyear = prompt("starting year");
const endyear = prompt("ending year");

const ul = document.querySelector("#list");

for (let d = Number(startyear); d < Number(endyear); ++d) {
  if (d % 400 == 0 || (d % 100 != 0 && d % 4 == 0)) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${d}`));
    list.appendChild(li);
  }
}

// Write a program that asks the user for an integer and tells if the
// number is a prime number. (2p)

// Prime numbers are numbers that are only divisible by 1 and itself.
// For example, number 13 is a prime number as it can only be divided
// by 1 or 13 so that the result is an integer. On the other hand, number
// 21 for example is not a prime number as it can be also be divided
// by numbers 3 and 7. Print the result on the HTML document.

const isPrime = +prompt("is this a prime number?");

// check if the number is prime
if (parseInt(isPrime) === isPrime) {
  p7.innerHTML = `${isPrime} is a prime number`;
} else {
  p7.innerHTML = `${isPrime} is not a prime number`;
}

// Make a program that asks the user for the number of dice and the sum of the eye
// numbers of interest to the user. The purpose of your program is now to find out
// with what probability the number of dice given by the user produces the sum of the
// number of eyes given by the user. For example, if the user enters 3 as the number of
// dice and 17 as the sum of the eyes, the program calculates the probability that the
// sum of the three dice's eye numbers is 17. (5p)

// Solve the problem by simulating: Have the program roll a given number of dice
// in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions
// produced the sum of eye numbers of interest to the user.
// Print the result on the HTML document:
// Probability to get sum 7 with 2 dice is 15.64%
// you can limit the number of decimals with toFixed() test values:
// 2 dice, sum 7, probability is about 15-17%
// 3 dice, sum 15, probability is about 5%

function rollDice(numDice) {
  let sum = 0;
  for (let i = 0; i < numDice; i++) {
    sum += numberRange(1, 6);
  }
  return sum;
}

const dicecount = +prompt("how many dice do you want to roll?");
const sumeyes = +prompt("what is the sum of the eyes?");

let successCount = 0;

for (let i = 0; i < 10000; i++) {
  if (rollDice(dicecount) === sumeyes) {
    successCount++;
  }
}

const probability = (successCount / 10000) * 100;

p8.innerHTML = `
Probability to get sum 
${sumeyes} with ${dicecount} 
dice is ${probability.toFixed(2)}%
`;

const div = document.createElement("div");
div.append(h2, p1, p2, p3, p4, p5, p6, p7, p8, list);
section.prepend(div);
app.appendChild(section);
