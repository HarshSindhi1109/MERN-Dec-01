// Search()
let text = 'Hello World. Learning JavaScript language!';
let n = text.search('world');

let regex1 = text.search(/world/i);

document.getElementById('reg').innerHTML = n;
document.getElementById('reg').innerHTML = regex1;

// Replace()
let m = text.replace('world', 'JavaScript');

let regex2 = text.replace(/world/i, 'JavaScript');

document.getElementById('reg2').innerHTML = regex2;

/** Syntax of Regex
 * /pattern/modifier
 *
 * Modifiers -
 * i - ignores case sensitivity
 * g - global match
 * m - multiline match
 * d - start to end match
 */

// Global
let txt = 'Today is very hot day and it is also windy day, today is Monday';

let regex3 = txt.match(/day/g);

document.getElementById('global').innerHTML = regex3;

// Multiline
let te = '\nIs th\nis it?';
let regex4 = te.match(/^is/m);

document.getElementById('multiline').innerHTML = regex4;

// D Modifier
let t = 'aaaabb';
let regex5 = t.match(/(aaa)(bb)/d);

document.getElementById('d').innerHTML = regex5;
