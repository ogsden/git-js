'use strict';

// 2.10 

// let a = prompt ("What's the official name name of JavaScript");
// if (a === "ECMAScript") {
//     alert ("Right");
// } else {
//     alert ("Don't you know? ECMAScript");
// }


// let number = +prompt ("type the mumber");

// if (number > 0) {
//     alert (1);
// } else {
//     if (number < 0) {
//         alert(-1);
//     } else {
//         if (number == 0) {
//             alert (0);
//         }
//     }
// }


// let result = (a + b < 4) ?
//  'Мало' :
//  'Много';


// let message;

// message = (login === 'Сотрудник') ? 'Привет' :
//     (login === 'Директор') ? 'Здравствуйте' :
//     (login === '') ? 'Нет логина' :
//     '';

// 2.11

// if (age >= 14 && age <= 90 )


// if (age < 14 || age > 90 )
// if (!(age >= 14 && age <= 90))


// let login = prompt ("Login:")

// if (login === "Admin") {
//     let password = prompt("Password:")
//     if (password === "I am admin") {
//         alert ("Hello!");
//     } else {
//         if (password === "" || password === null) {
//             alert ("Cancelled");
//         } else {
//             alert ("Incorrect password");
//         }
//     }
// } else {
//     if (login === "" || login === null) {
//         alert ("Cancelled");
//     } else {
//         alert("I don't know you");
//     }
// }


//2.13
// for (let i = 2; i <= 10; i += 2) {
//     alert (i);
// }


// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }


// let num;

// do {
//   num = +prompt("enter a number greater than 100", 0);
// } while (num && num <= 100);


// let n = prompt ("n = ");

// next:
// for (let i=2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i%j == 0) continue next;
//     }
//     alert (i);
// }

// 2.14
// let browser;

// if (browser === 'Edge')
// {
//     alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' || browser ==='Firefox' || browser ==='Safari' ||  browser ==='Opera' )
// {
//     alert( 'Okay we support these browsers too' );
// } else 
// {
//     alert( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Type the number between 0 and 3', '');
// switch (number){
//     case 0:
//         alert('0');
//         break;
//     case 1:
//         alert('1');
//         break;
//     case 2:
//     case 3:
//         alert('2 or 3');
// }

// 2.15

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }

  
//   function min(a,b) {
//     return Math.min(a,b);
//   }


// let x = prompt ("x = ");
// let n = prompt ("n = ");
// function pow (a,b) {
//     // let result = a;
//     // for (let i = 1; i < b; i++) {
//     //     result *= a;
//     // }
//     // return result;
//     return a**b;
// }

// alert (pow (x,n));


// 2.17
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you accept?",
//     () => alert("Yes"),
//     () => alert("Cancelled")
//   );

//   a => a+10;