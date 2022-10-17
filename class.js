'use strict'

// class Home {
//     constructor (name) {
//         this.name = name;
//     }
// }

// let flat = new Home ('Kvartira')
// alert(flat.name)


//  class Clock {
  
//     constructor (template) {
//         this.template = template
//     }

//     timer;
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop () {
//       clearInterval(timer);
//     };
  
//     start () {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
// }
  
//   let clock = new Clock(template);
//   clock.start();


//   class Animal {
//     constructor (name) {
//       this.name = name;
//     }

//     sayHi() {
//       console.log(this.name);
//     }

//   }

//   class Human extends Animal {
//     constructor (lastName, name) {
//       super(name);
//       this.lastName = lastName;
//     }

//     sayHello() {
//       super.sayHi();
//       console.log(this.lastName);
//     }
//   }



