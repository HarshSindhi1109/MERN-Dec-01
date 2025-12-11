// Primitive Data Types - Number, String, Boolean, Undefined, Null, Symbol
// Non-Primitive Data Types - Object, Array, Function

// Number
let num = 2; // int
let fnum = 3.4; // float
let negNum = -3; // negative int

let bigNum = 12345667888721893027184;
let bigInt = 12345667888721893027184n;

console.log(bigNum);
console.log(bigInt);

console.log(typeof bigNum); // Number
console.log(typeof bigInt); // Big Int

// String
let x = 'abc';
let y = 'def';

console.log(x);
console.log(y);

console.log(typeof x); // Number
console.log(typeof y); // Big Int

// Boolean
let a = true;
let b = false;

// Undefined - Variable which is declared but not defined
let c;
console.log(c); // Undefined

// Null - Intentionally Empty Variable
let d = null;
console.log(d);

// Symbol
let symb = Symbol('id');
console.log(symb);

// Object
let obj = {
  firstName: 'Suraj',
  lastName: 'Kumar',
  age: 23,
};


// Function
function hello() {
    return "Hello World!!";
}

console.log(hello());