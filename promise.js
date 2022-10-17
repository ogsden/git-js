'use strict'

// Промисы 

// function delay(ms) {
//   return new Promise(function resolve (resolve, reject) {
//     setTimeout(resolve, ms)
//   })
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// async/await

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then(alert)
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();