'use strict'

// Рекурсия и стек

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++){
//         sum += n;
//         n--;
//     }
//     return sum;
// }

// alert(sumTo(1));

// function sumTo(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n-1);
//     }
// }

// alert (sumTo(2));

// function sumTo(n) {
//     return (n * (n + 1)) / 2;
// }

// alert (sumTo(1));


// function factorial (n) {
//     if (n == 1) return n;
//     return n * factorial(n - 1);
// }

// alert (factorial(5));


// function fib(n) {
//     let arr = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         let prev = arr[i - 1];
//         let prev2 = arr[i - 2];
//         arr.push(prev + prev2);
//     }

//     return arr[n];
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77));


// function printList (list) {
//     alert(list.value); 

//     if (list.next) {
//       printList(list.next); 
//     }
// }

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

// printList(list);


// function printList (list) {
//     if (list.next) {
//         printList(list.next);
//     }
//     alert (list.value);
// }

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

// printNumbers (1, 10);

// function printNumbers(from, to) {
//     let current = from;
    
//     setTimeout(function f() {
//         alert(current);
//         if (current < to) {
//             setTimeout(f, 1000);
//         }
//         current++;
//     }, 1000);
// }
