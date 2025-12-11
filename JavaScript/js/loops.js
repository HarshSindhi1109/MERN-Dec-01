// Types of Loop

// 1. for loop
let text = '';
for (let i = 1; i <= 5; i++) {
  text += 'The number is ' + i + '<br>';
}

document.getElementById('forLoop').innerHTML = text;

// 2. for in loop

// 3. for of loop
const colors = ['Red', 'Blue', 'Green'];
let t = '';

for (let c of colors) {
  t += c + '<br>';
}

document.getElementById('forOfLoop').innerHTML = t;

// 4. while loop
let txt = '';
let num = 6;
while (num <= 10) {
  txt += 'The number is ' + num + '<br>';
  num++;
}

document.getElementById('whileLoop').innerHTML = txt;

// 5. do..while loop
let tx = '';
let n = 11;
do {
  tx += 'The number is ' + n + '<br>';
  n++;
} while (n <= 15);

document.getElementById('doWhileLoop').innerHTML = tx;
