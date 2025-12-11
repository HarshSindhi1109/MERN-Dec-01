// Operators are used to perform operations on variables

// 1. Arithmetic - +, -, *, /, **, %, ++, --
let a = 8;
let b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ^ ${b} = ${a ** b}`);

// 2. Assignment - =, +=, -=, *=, /=
let x = 10;
x -= 5;
console.log('The value of x = ', x);

// 3. Comparison - ==, ===, !=, !==, >, <, >=, <=
let num1 = 1;
let num2 = 2;
let num3 = '1';
let num4 = 1;

console.log(num1 == num2);
console.log(num1 != num2);

console.log(num1 === num3);
console.log(num1 !== num3);

console.log(num1 > num2);
console.log(num1 < num2);

console.log(num1 > num4);

// 4. Logical - && (And), ||(Or), !(Not)
let num5 = 3;
let num6 = 5;
let num7 = 5;

console.log('And Operator - ', num5 <= num6 && num6 == num7 && num7 < num5);
console.log('Or Operator - ', num5 <= num6 || num6 != num7 || num7 < num5);
console.log('Not Operator - ', !(num5 <= num6 || num6 != num7 || num7 < num5));

// 5. String
let str1 = 'Hello';
let str2 = 'World';

console.log(str1 + str2);

// 6. Bitwise
let bit1 = 6; //0110
let bit2 = 3; //0011

console.log(bit1 & bit2); //0010 = 2
console.log(bit1 | bit2); //0111 = 7

// 7. Ternary
let age = 16;
let isAdult = age > 18 ? 'You are an adult.' : 'You are not adult.';

console.log(isAdult);

// 8. Type
let str3 = 'avlahelsba';
console.log(typeof str3);
