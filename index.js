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
  console.log(outcome);
}

function runCalculator() {
  let answer = 'y'
  console.log('Welcome to the calculator!');
  do {
    performOneCalculation();
    console.log('Would you like to do another calculation? y/n')
    answer = readline.prompt();
  } while (answer != 'n');
  console.log('Toodles!');
}

runCalculator()
