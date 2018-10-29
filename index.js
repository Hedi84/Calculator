const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter the operator:');
const operator = readline.prompt();
console.log('Please enter your first number:');
const first_number_string = readline.prompt();
console.log('Please enter your first number:');
const second_number_string = readline.prompt();

const number_one = Number(first_number_string)
const number_two = Number(second_number_string);

switch (operator) {
  case '+':
    console.log(number_one + number_two)
    break;
  case '-':
    console.log(number_one - number_two)
    break;
  case '*':
    console.log(number_one * number_two)
    break;
  case '/':
    console.log(number_one / number_two)
    break;
  default:
    console.log('Sorry, that\'s not a valid operator');
}
