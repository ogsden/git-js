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

// Встроенные прототипы

// Function.prototype.defer = function (delay) {
//     setTimeout (this, delay);
// }

// function f() {
//     alert("Hello!");
// }

// Методы прототипов

// let obj = {
//     key : value
// }

// let obj2 = Object.create(obj);

// alert(obj2.key)


// let human = {
//     person : surname
// }

// let human2 = Object.create(Object.getPrototypeOf(human));

// alert(human2);

// let obj = {
//     eats : true
// }

// let obj2 = Object.create(obj, {
//     speak : {
//         value: true
//     }
// })

// alert(obj2);
