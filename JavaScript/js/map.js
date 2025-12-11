// Creating Map
const fruits = new Map([
  ['Apple', 100],
  ['Banana', 250],
  ['Orange', 300],
]);

let price = fruits.get('Apple');
document.getElementById('map1').innerHTML = 'The price of apple is ' + price;

// Creating an empty map
const colors = new Map();

// Set map values
colors.set('Red', 10);
colors.set('Blue', 30);
colors.set('Green', 40);

let qty = colors.get('Green');

document.getElementById('map2').innerHTML = 'There are ' + qty + ' Green colors.';
