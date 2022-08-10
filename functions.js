'use strict'

// Замыкание

// function sum(a) {
//     return function plus(b) {
//         return a + b;
//     }
// }

// alert(sum(3)(20));


// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//       };
// };

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x);
//     }
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


// function byField(field) {
//     return (a,b) => a[field] > b[field] ? 1 : -1;
// }

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

//   users.sort(byField('name'));
//   users.forEach(user => alert(user.name)); // Ann, John, Pete
  
//   users.sort(byField('age'));
//   users.forEach(user => alert(user.name)); // Pete, Ann, John

// Объект функции, NFE



// setTimeout и setInterval

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function () {
//         alert(current);
//         if (current == to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }

printNumbers (1, 10);

function printNumbers(from, to) {
    let current = from;
    
    setTimeout(function f() {
        alert(current);
        if (current < to) {
            setTimeout(f, 1000);
        }
        current++;
    }, 1000);
}