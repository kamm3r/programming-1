"use strict";

import { numberRange } from "./utils.js";

const app = document.querySelector("#app");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");
const p6 = document.createElement("p");
const p7 = document.createElement("p");
const p8 = document.createElement("p");
const p9 = document.createElement("p");
const p10 = document.createElement("p");

// Write a program that prompts the user for five numbers and prints them in the reverse
// order they were entered. Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function
const arr = [];
for (let i = 0; i < 5; ++i) {
  const input = parseInt(prompt("Enter a number:"));
  arr.push(input);
}
console.log(`original array: ${arr}`);

function myReverse(arr) {
  const N = arr.length - 1;
  for (let i = 0; i <= Math.floor(N / 2); ++i) {
    const temp = arr[i];
    arr[i] = arr[N - i];
    arr[N - i] = temp;
  }
  return arr;
}

console.log(`reversed array: ${myReverse(arr)}`);

// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants. Finally,
// the program prints the names of the participants on the web page in an
// ordered list (<ol>) in alphabetical order. (2p)

const participants = prompt("How many participants?");

const participantsArray = [];

for (let i = 0; i < participants; ++i) {
  const participant = prompt("What is the name of participant?");
  participantsArray.push(participant);
}

const ol = document.createElement("ol");

for (const participant of participantsArray) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${participant}`));
  ol.appendChild(li);
}

p2.appendChild(ol);

// Write a program that asks for the names of six dogs. The program prints
// dog names to unordered list <ul> in reverse alphabetical order. (2p)

const dogsArray = [];

for (let i = 0; i < 6; ++i) {
  const dog = prompt("What is the name of dog?");
  dogsArray.push(dog);
}

const ul = document.createElement("ul");

dogsArray.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});

dogsArray.reverse();

for (const dog of dogsArray) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${dog}`));
  ul.appendChild(li);
}

p3.appendChild(ul);

// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

const numbersArray = [];

let number = +prompt("Enter a number or zero to stop");

do {
  number = +prompt("Enter a number or zero to stop");
  numbersArray.push(number);
} while (number !== 0);

const ul2 = document.createElement("ul");

for (const number of numbersArray) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${number}`));
  ul2.appendChild(li);
}

p4.appendChild(ul2);

// Write a program that prompts the user for numbers. When the user
// enters one of the numbers he previously entered, the program will
// announce that the number has already been given and stops its operation
// and then prints all the given numbers to the console in ascending order. (2p)

const repeated = new Set();

let previouslyGivenNumber;

while (true) {
  previouslyGivenNumber = +prompt("Enter a number if repeated stop");
  if (repeated.has(previouslyGivenNumber)) {
    break;
  } else {
    repeated.add(previouslyGivenNumber);
  }
}

const ul3 = document.createElement("ul");

for (const number of repeated) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${number}`));
  ul3.appendChild(li);
}

p5.appendChild(ul3);

// Write a function that returns a random dice roll between 1 and 6. The function
// should not have any parameters. Write a main program that rolls the dice until
// the result is 6. The main program should print out the result of each roll in
// an unordered list (<ul>). (2p)

function rollDice(sides = 6) {
  let sum = 0;
  for (let i = 0; i < 6; ++i) {
    sum += numberRange(1, sides);
  }
  return sum;
}

const rolls = new Set();

while (true) {
  const roll = rollDice();
  if (rolls.has(roll)) {
    break;
  } else {
    rolls.add(roll);
  }
}

const ul4 = document.createElement("ul");

for (const roll of rolls) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${roll}`));
  ul4.appendChild(li);
}

p6.appendChild(ul4);

// Modify the function above so that it gets the number of sides on the dice as
// a parameter. With the modified function you can for example roll a 21-sided
// role-playing dice. The difference to the last exercise is that the dice rolling
// in the main program continues until the program gets the maximum number on the
// dice, which is asked from the user at the beginning. (2p)

const sides = parseInt(prompt("How many sides on the dice?"));

let diceRoll;

do {
  diceRoll = rollDice(sides);
  console.log(`you rolled ${diceRoll}`);
} while (diceRoll < sides);

p7.innerHTML = `you rolled ${diceRoll}`;

// Write a function called concat(), which receives an array of strings as a parameter.
// The function returns a string formed by concatenating the elements of the array. (2p)
// Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky.
// The function returns the string JohnnyDeeDeeJoeyMarky.
// Do not use array.join() function
// You can hardcode the array, no need for prompt().
// Print the result to HTML document.

const concatArray = ["Johnny", "DeeDee", "Joey", "Marky"];

function myJoin(arr) {
  let result = "";
  for (const item of arr) {
    result += item;
  }
  return result;
}

p8.innerHTML = `${myJoin(concatArray)}`;

// Write a function called even(), which receives an array containing numbers
// as a parameter. The function returns a second (usually smaller) array
// which has the even numbers of the original array. The function must
// not make changes to the original table. (3p)
// Example: In a three-item array, there are items 2, 7 and 4. The function
// returns a two-item array with items 2 and 4.
// Print both the original array and the new array to the console in the
// main program after you have called the function.
// You can hard code the array, no need for prompt().

const evenArray = [2, 7, 4];

function myEven(arr) {
  let result = [];
  for (const item of arr) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }
  return result;
}

console.log(`original array: ${evenArray}`);
console.log(`new array: ${myEven(evenArray)}`);

// Write a voting program as described below for small-scale meeting use. (8p)
// The program asks for the number of candidates.
// Then the program asks for the names of the candidates: 'Name for candidate 1
// Store the candidates' names and initial vote count in objects like this:
// [
//    {
//        name: 'ellie',
//        votes: 0,
//     },
//     {
//         name: 'frank',
//         votes: 0,
//    },
//     {
//         name: 'pamela',
//         votes: 0,
//    },
// ]
// The program asks for the number of voters.
// The program asks each voter in turn who they will vote for.
// Voter shoud enter candidate name. If the voter enters an empty value instead of
// the voting number, it will be interpreted as an empty vote.
// The program announces the name of the winner and the results by printing it to the console:
// The winner is pamela with 3 votes.
// results:
// pamela: 3 votes
// frank: 1 votes
// ellie: 1 votes
// Some help:
// You need to compare votes so console log a and b to see how to get the correct property.
// someArray.sort((a, b) => {
//     console.log(a, b);
//     return b - a;
//  });

const candidates = [];

function vote(candidateName) {
  if (candidateName === "") {
    return;
  }
  const candidate = candidates.find((c) => c.name === candidateName);
  if (candidate) {
    candidate.votes++;
  } else {
    candidates.push({ name: candidateName, votes: 1 });
  }
}

function printResults() {
  const sortedCandidates = candidates.sort((a, b) => b.votes - a.votes);
  console.log("Top Candidates");
  console.table(sortedCandidates);
}

const voters = prompt("How many voters?");

for (let i = 0; i < voters; ++i) {
  const voter = prompt("Who will vote?");
  vote(voter);
}

printResults();

app.appendChild(p1);
app.appendChild(p2);
app.appendChild(p3);
app.appendChild(p4);
app.appendChild(p5);
app.appendChild(p6);
app.appendChild(p7);
app.appendChild(p8);
app.appendChild(p9);
app.appendChild(p10);
