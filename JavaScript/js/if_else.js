let age = 19;

// if statement
if (age > 18) {
  console.log('You are an adult.');
}

// if-else statement
let age2 = 16;

if (age2 > 18) {
  console.log('You are an adult.');
} else {
  console.log('You are not an adult.');
}

// if-else if statement
let age3 = 18;

if (age3 > 18) {
  console.log('You are an adult.');
} else if (age3 == 18) {
  console.log('You are 18 years old.');
} else {
  console.log('You are not an adult.');
}

// switch statement
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Today is Monday.');
    break;

  case 'Tuesday':
    console.log('Today is Tuesday.');
    break;

  case 'Wednesday':
    console.log('Today is Wednesday.');
    break;

  case 'Thursday':
    console.log('Today is Thursday.');
    break;

  case 'Friday':
    console.log('Today is Friday.');
    break;

  case 'Saturday':
    console.log('Today is Saturday.');
    break;

  default:
    console.log('Today is Sunday');
}
