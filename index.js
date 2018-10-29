const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter the operator:');
const operator = readline.prompt();
// create an array for the numbers
const numbersArray = []
// turn each string into a number before adding it to the array
console.log('Please enter your first number:');
numbersArray.push(Number(readline.prompt()));
console.log('Please enter your second number:');
numbersArray.push(Number(readline.prompt()));
console.log(numbersArray)
// create a loop that keeps asking for a number and breaks upon entering case
let input;
do {
  console.log('Please enter another number or enter c to calculate:');
  input = readline.prompt();
  if (input != 'c') {
    numbersArray.push(parseFloat(input));
  }
} while (input != 'c');

let outcome = 0;

switch (operator) {
  case '+':
    numbersArray.forEach(function(number){
    outcome += number;
    });
    break;
  case '-':
    numbersArray.forEach(function(number){
    outcome -= number;
    });
    break;
  case '*':
    outcome = 1
    numbersArray.forEach(function(number){
    outcome *= number;
    });
    break;
  case '/':
    outcome = numbersArray[0]
    numbersArray.splice(0, 1)
    numbersArray.forEach(function(number){
    outcome /= number;
    });
    break;
  default:
    console.log('Sorry, that\'s not a valid operator');
}

console.log(outcome);

//   console.log(number_one + number_two)
//   break;
// case '-':
//   console.log(number_one - number_two)
//   break;
// case '*':
//   console.log(number_one * number_two)
//   break;
// case '/':
//   console.log(number_one / number_two)
//   break;

// const number_one = Number(first_number_string)
// const number_two = Number(second_number_string);
