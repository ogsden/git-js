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

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       let j = i; // должна выводить порядковый номер
//       alert( j );
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

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


  // Рекурсия

  // function sumTo(n) {
  //   if (n === 1 || n === 0) { 
  //     return n;
  //   }
  //   return n + sumTo(n - 2);
  // }


  // function factorial (n) {
  //   if (n === 1) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1)
  // }

  // alert (factorial (5)); 

  // function fib (n) {
  //   let m = 3;
  //   if (n === 1 || n === 2) {
  //     return 1;
  //   }
  //   function kek(a, b) {
  //     if (m === n) {
  //       return b;
  //     }
  //     m++;
  //     kek(b, a + b)
  //   }
  //   return kek(1,2);
  // }


  // function printList(hostList) {
  //   let list = hostList;
  //   while (list) {
  //     console.log(list.value);
  //     list = list.next;
  //   }
  // }

  function printList(list) {
    if (list === null) {
      return;
    }
    console.log(list.value);
    return printList(list.next);
  }
