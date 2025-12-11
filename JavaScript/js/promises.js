// console.log('Hello, One');
// setTimeout(function () {
//   console.log('Hello, Two');
// }, 4000);

// console.log('Hello, Three');

// function myDisplayer(some) {
//   document.getElementById('demo').innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   if (x == 0) {
//     myResolve('OK');
//   } else {
//     myReject('Error');
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// Set Timeout
const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve('SUCCESS!!!');
  }, 5000);
});

myPromise.then(function (value) {
  document.getElementById('timeout').innerHTML = value;
});
