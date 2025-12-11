// Normal Function
let hello = function () {
  return 'Hello World!';
};

document.getElementById('func').innerHTML = hello();

// Arrow Function
let arrow = (val) => {
  return 'Arrow Function' + val;
};

document.getElementById('arrow').innerHTML = arrow(' in JS');

// Arrow Function without {}
const func = (val) => 'Java' + val;

document.getElementById('arrow').innerHTML = func('Script');
