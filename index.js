const readline = require('readline-sync');

function askOperator() {
  console.log('Please enter the operator:');
  const operator = readline.prompt();
  return operator
}

function askNumbers() {
  // create an array for the numbers
  let numbersArray = []
  // turn each string into a number before adding it to the array
  // console.log('Please enter your first number:');
  // numbersArray.push(Number(readline.prompt()));
  // console.log('Please enter your second number:');
  // numbersArray.push(Number(readline.prompt()));
  // console.log(numbersArray);
  let input;
  do {
    console.log('Please enter a number or enter c to calculate:');
    input = readline.prompt();
    // if input is c break the loop
    if (input === 'c') {
      break
    // if input is not a number, don't add to numbersArray
  } else if (isNaN(Number(input))) {
      console.log('That is not a valid number, try again');
      console.log(numbersArray);
    // if input is a number, add to array
    } else {
      numbersArray.push(parseFloat(input));
      console.log(numbersArray);
    }
  } while (input != 'c');
  return  numbersArray
}

function performOneCalculation(operator) {
  // create a loop that keeps asking for a number and breaks upon entering case
  let numbersArray = askNumbers();
  applyOperator(numbersArray);
}

function applyOperator(array) {
  const operator = askOperator()
  let outcome = array[0]
  array.splice(0, 1)
  switch (operator) {
    case '+':
      array.forEach(function(number){
      outcome += number;
      });
      break;
    case '-':
      array.forEach(function(number){
      outcome -= number;
      });
      break;
    case '*':
      array.forEach(function(number){
      outcome *= number;
      });
      break;
    case '/':
      array.forEach(function(number){
      outcome /= number;
      });
      break;
    default:
      console.log('Sorry, that\'s not a valid operator');
  }
  console.log('Your outcome is' + ' ' + outcome);
}

function runCalculator() {
  let answer = 'y';
  console.log('Welcome to the arithmetic calculator!');
  while (answer != 'n'){
    performOneCalculation();
    console.log('Would you like to do another calculation? y/n');
    answer = readline.prompt();
    if (answer == 'n') {
      break;
    }
  }
  console.log('Toodles!');
}

function printWelcomeMessage () {
  console.log('Welcome to the calculator!');
  console.log('==========================');
  console.log('Which calculator mode do you want?');
  console.log(' 1) Arithmetic');
  console.log(' 2) Vowel counting');
}

function userInterface () {
  let choice
  printWelcomeMessage();
  while (choice !== '1' && choice !== '2') {
    console.log('Please enter 1 or 2');
    choice = readline.prompt();
  }
  if (choice === '1') {
    runCalculator();
  } else {
    vowelCalculator();
  }
}

function askUserString() {
  console.log('Please enter text to count vowels:')
  let string = readline.prompt();
  string = string.toLowerCase();
  //  function that counts vowels and returns the counts
  countVowels(string);
}

function countVowels(string) {
  const a = string.match(/[a]/gi);
  answer_a = a === null ? 0 : a.length;
  console.log("A: " + answer_a);
  const e = string.match(/[e]/gi);
  answer_e = e === null ? 0 : e.length;
  console.log("E: " + answer_e);
  const i = string.match(/[i]/gi);
  answer_i = i === null ? 0 : i.length;
  console.log("I: " + answer_i);
  const o = string.match(/[o]/gi);
  answer_o = o === null ? 0 : o.length;
  console.log("O: " + answer_o);
  const u = string.match(/[u]/gi);
  answer_u = u === null ? 0 : u.length;
  console.log("U: " + answer_u);
}

function vowelCalculator() {
  // function that asks user for string and stores it in an array
  askUserString()
  // ask user if they want to count again or quit
  askUserContinue()
}

function askUserContinue() {
  console.log("What would you like to do now?\n\
  1) Calculate another string\n\
  2) Back to main menu \n\
  3) Enter any character to quit")
  choice = readline.prompt();
  if (choice === '1') {
    vowelCalculator()
  } else if (choice === '2') {
    userInterface()
  } else
    console.log('cya')
}

userInterface()
