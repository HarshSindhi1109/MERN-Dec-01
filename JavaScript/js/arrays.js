// const colors = ['Red', 'Yellow', 'Green', 'Blue'];

// const colors = [];

// colors[0] = 'Red';
// colors[1] = 'Yellow';
// colors[2] = 'Green';
// colors[3] = 'Blue';

// Creating Array with new keyword
const colors = new Array('Pink', 'Yellow', 'Orange');

document.getElementById('array').innerHTML = colors;

// To get a particular element
document.getElementById('array').innerHTML = colors[1];

// To change an element
colors[0] = 'White';
document.getElementById('array').innerHTML = colors;

// To convert array into string
document.getElementById('array').innerHTML = colors.toString();

// To find the length of an array
let length = colors.length;
document.getElementById('array').innerHTML = length;

// To access last element of the array
document.getElementById('array').innerHTML = colors[colors.length - 1];

// Looping through an array
const fruits = ['Apple', 'Banana', 'Orange'];
let fLen = fruits.length;

let text = '<ol>';
for (let i = 0; i < fLen; i++) {
  text += '<li>' + fruits[i] + '</li>';
}
text += '</ol>';

document.getElementById('array').innerHTML = text;
