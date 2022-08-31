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

// function Constructor (name) {
//   this.name = name;
//   return {}
// }

// let a = new Constructor ('Vasya')
// a.name;

// function makeCounter() {
//   let count = 0;

// }

// let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// counter.set(10); // установить новое значение счётчика

// alert( counter() ); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert( counter() ); // 10 (вместо 11)

// setTimeout и setInterval

// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function () {
//         alert(current);
//         if (current === to) {
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


// Декораторы и переадресация вызова

// Привязка контекста к функции

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  // function askPassword(ok, fail) {
  //   let password = prompt("Password?", '');
  //   if (password == "rockstar") ok();
  //   else fail();
  // }
  
  // let user = {
  //   name: 'John',
  
  //   login(result) {
  //     alert( this.name + (result ? ' logged in' : ' failed to log in') );
  //   }
  // };
  
  // askPassword(user.login.bind(user, true), user.login.bind(user, false));