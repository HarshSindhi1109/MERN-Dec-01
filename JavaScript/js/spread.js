const a = [0, 1, 2];
const b = [3, 4, 5];
const c = [6, 7, 8, 9];

const numeric = [...a, ...b, ...c]

document.getElementById('spread').innerHTML = numeric;