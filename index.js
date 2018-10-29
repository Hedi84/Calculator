const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter your first number:');
const first_number = readline.prompt();
console.log('Please enter your first number:');
const second_number = readline.prompt();
const result = parseInt(first_number, 10)*parseInt(second_number, 10);
console.log(result);
