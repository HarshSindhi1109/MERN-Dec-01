// Creating an Object
const car = {
  type: 'EV',
  model: '700',
  color: 'Black',
};

document.getElementById('obj-color').innerHTML =
  'The color of the car is ' + car.color + '<br>';

document.getElementById('obj-model').innerHTML =
  'The model of the car is ' + car.model + '<br>';

// Creating Object using new keyword
const person = new Object();

// Adding key-value pairs in the object
person.firstName = 'Harsh';
person.lastName = 'Tahelramani';
person.age = 21;
person.contactNumber = 1234567890;
person.favColor = 'blue';

// Accessing key-value pairs
document.getElementById(
  'new'
).innerHTML = `Person's name is ${person['firstName']} ${person['lastName']}.`;

document.getElementById(
  'new'
).innerHTML = `${person['firstName']} is ${person['age']} years old.`;

// delete person.contactNumber;
delete person['contactNumber'];

document.getElementById(
  'new'
).innerHTML = `Person's contact number is ${person['contactNumber']}.`;

// Nested Objects
const myObj = {
  name: 'A',
  age: 30,
  myCars: {
    car1: 'Ford',
    car2: 'BMW',
    car3: 'KIA',
  },
};

document.getElementById('nested').innerHTML = myObj.myCars.car1;
document.getElementById('nested').innerHTML = myObj['myCars']['car3'];

// Object Method
const personObj = {
  fname: 'abc',
  lname: 'xyz',
  age: 15,
  fullName: function () {
    return this.fname + ' ' + this.lname.toUpperCase();
  },
};

document.getElementById('method').innerHTML = personObj.fullName();

// Loop through Object
let text = '';

for (let x in person) {
  text += person[x] + ' ';
}

document.getElementById('loop').innerHTML = text;

// Object Values
const myArray = Object.values(person);

document.getElementById('val').innerHTML = myArray;

// Object Entries
const fruits = {
  apple: 100,
  banana: 200,
  peach: 250,
};

let txt = '';
for (let [fruit, amount] of Object.entries(fruits)) {
  txt += fruit + ': ' + amount + '<br>';
}

document.getElementById('entries').innerHTML = txt;
