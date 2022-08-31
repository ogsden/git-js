'use strict'

// Прототипное наследование

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     stomach: [],
//     __proto__: hamster
//   };
  
//   let lazy = {
//     stomach: [],
//     __proto__: hamster
//   };
  
//   // Этот хомяк нашёл еду
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple
  
//   // У этого хомяка тоже есть еда. Почему? Исправьте
//   alert( lazy.stomach );

// F.prototype

// правильно:
// function Constr(name) {
//     this.name = name;
//     alert(name);
//   }
  
//   let obj = new Constr("White");
  
//   let obj2 = new obj.constructor("Black");

// неправильно: 

// function Constr(name) {
//     Constr = {};
//     this.name = name;
//     alert(name);
//   }
  
//   let obj = new Constr("White");
  
//   let obj2 = new obj.constructor("Black");