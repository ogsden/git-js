'use strict';

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
//   for (let key in salaries) {
//     sum = sum + salaries[key];
//   }


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj){
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') 
//             obj[key] = obj[key] * 2;
//     }
// }

//   multiplyNumeric(menu);
  
//   // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };


// let calculator = {
//     read () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);},
//     sum () {return this.a + this.b},
//     mul () {return this.a * this.b}
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// function Calculator () {
//     this.read = function () {
//         this.a = +prompt ( " a = " );
//         this.b = +prompt ( " b = ");
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };

// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function Accumulator (startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.a = +prompt( "a = ");
//         this.value += this.a;
//     }

// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений