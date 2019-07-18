const readline = require('readline-sync');

console.log('Hello World!');
console.log('teste');
let a = readline.question('a: ');
let b = readline.question('b: ');

const sum = (a, b) =>{
  return parseInt(a+b);
}

const sub = (a, b) =>{
  return a-b;
}

const mult = (a, b) =>{
  return a*b;
}

const div = (a, b) =>{
  return a/b;
}

console.log(sum(a, b));
console.log(sub(a, b));
console.log(mult(a, b));
console.log(div(a, b));