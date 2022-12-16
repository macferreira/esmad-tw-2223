/* eslint
no-console: ["error", { allow: ["log", "warn", "error"] }],
no-plusplus: "off" */

const choices = ['red', 'orange', 'pink', 'yellow'];

// first output
/*
for (let i = 0; i < choices.length; i++) {
  console.log(`My #${i + 1} choice is ${choices[i]}`);
}
*/

// second output
for (let i = 0; i < choices.length; i++) {
  const choiceNum = i + 1;
  let choiceNumSuffix;

  if (choiceNum === 1) {
    choiceNumSuffix = 'st';
  } else if (choiceNum === 2) {
    choiceNumSuffix = 'nd';
  } else if (choiceNum === 3) {
    choiceNumSuffix = 'rd';
  } else {
    choiceNumSuffix = 'th';
  }

  console.log(`My ${choiceNum} ${choiceNumSuffix} choice is ${choices[i]}`);
}
