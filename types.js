'use strict'

// Числа

// let a = +prompt("Enter 1st number", 0);
// let b = +prompt("Enter 2nd number", 0);

// alert(a + b);


// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("enter the number", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(readNumber());


// function random(min, max) {
//     let a = Math.random() * 10;
//     while (a <= min || a > max)
//         a = Math.random() * 10;
//     return a;
//   }

//   alert (random(5, 9));


// function randomInteger(min, max) {
//     let a = 0;
//     while (a <= min || a >= max + 1)
//          a = Math.random() * 10;
//      return Math.floor(a); 
//   }

//   alert(randomInteger(1, 2));


// Строки

// function ucFirst (str) {
//     let newstr = str[0].toUpperCase() + str.slice(1);
//     alert(newstr);
// }

// ucFirst("vasya");


// function checkSpam(str) {
//     let lowerCaseStr = str.toLowerCase();
//     return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('XXX');
// };

// alert(checkSpam("vagraaaaaa"));


// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         let newstr = str.slice(0,maxlength - 3);
//         newstr += "...";
//         return newstr;
//     } else {
//     return str;
//     }

// };

// alert (truncate("hello everyone", 5));


// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }

// Массивы

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1) / 2)] = 'Класика';
// alert(styles.shift());
// styles.unshift('Рэп', 'Рэгги');


// function sumInput() {

//     let numbers = [];

  
//     while (true) {
  
//       let value = prompt("enter the number", 0);
  
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let sum = 0;
  
//     for (let item of arr) { 
//       sum += item; 
//       maxSum = Math.max(maxSum, sum); 
//       if (partialSum < 0) sum = 0; 
//     }
  
//     return maxSum;
//   }


// Методы массивов

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       operator = split[1],
//       b = +split[2]

//     if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[operator](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// alert( calc.calculate("3 + 7") ); // 10


// function camelize(str) {
//     let arr = str.split('-');
//     let newArr = arr.map((item, index) => index ? item[0].toUpperCase() + item.slice(1) : item) 
//     let finalArr = newArr.join('');
//     return finalArr;
// }

// alert (camelize("my-short-string"));


// let arr = [5, 3, 8, 1];

// function filterRange(array, value1, value2) {
//     return array.filter(item => item >= value1 && item <= value2);
// }

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)


// let arr = [5, 3, 8, 1];

// function filterRangeInPlace (array, value1, value2) {
//     array.filter(item => item >= value1 && item <= value2);
// }

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );


// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function copySorted(arr) {
//     let newArr = [...arr].sort();
//     return newArr;
// }

// let array = [1, 6, 9, 4];

// Math.max(1, 6, 9, 4);
// Math.max(...array);


// let vasya = { name: "Vasya", age: 25 };
// let petya = { name: "Petya", age: 30 };
// let masha = { name: "Masha", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша


// let vasya = { name: "Vasya", surname: "Pupkin", id: 1 };
// let petya = { name: "Petya", surname: "Ivanov", id: 2 };
// let masha = { name: "Masha", surname: "Petrova", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName : `${user.name} ${user.surname}`,
//     id: user.id,

// }))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// let vasya = { name: "Vasya", age: 25 };
// let petya = { name: "Petya", age: 30 };
// let masha = { name: "Masha", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(array) {
//     array.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge (array) {
//     return array.reduce((acc, {age}) => acc + age, 0) / array.length;
// } 

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// let arr = [5, 10, 20, 24]; //59
// let sum = arr.reduce((accumulator, item) => accumulator + item);
// console.log(sum);


// function unique(arr) {
//     let uniqueArray = [];
//     for (let str of arr) {
//         if (!uniqueArray.includes(str)) {
//             uniqueArray.push(str);
//         }
//     }

//     return uniqueArray;
//   }
  
//   let strings = ["function", "function", "array", "array",
//     "array", "array", "function", "function", "symbol"
//   ];
  
//   alert( unique(strings) ); // кришна, харе, :-O

// // Map Set

//   function unique(arr) {
//     return Array.from(new Set(arr))
    
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) ); // Hare,Krishna,:-O


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//       let sorted = word
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join(''); 
//       map.set(sorted, word);
//     }
  
//     return Array.from(map.values());
//   }

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Object.keys... 

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let value of Object.values(salaries)) {
//     sum += value;
//   }
//   return sum;
// }

// let salaries1 = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries1) ); // 650


// function count (object) {
//   return Object.entries(object).length;
// }

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); 

// Деструктурирующее присваивание

// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false


// function topSalary() {
//   let max = 0;
//   let maxName = null;

//   for(let [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert(topSalary(salaries));

// Дата и время

// let date = new Date(2012, 1, 20, 3, 12);

// alert(date);

// let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// function getWeekDay(date) {
//   return days[date.getDay()];
// };

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

// function getLocalDay(date) {
//   let day = date.getDay();

//   if (day == 0) { 
//     day = 7;
//   }
//   return day;
// };

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );


// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) )


// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 1);
//   date.setDate(date.getDate() - 1);
//   return date.getDate();
// }

// alert(getLastDayOfMonth(2022, 1)); // 29


// function getSecondsToday() {
//   let now = new Date();

//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today;
//   return Math.round(diff / 1000);
// }

// alert( getSecondsToday() );


// function getSecondsToTomorrow() {
//   let now = new Date();
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   let diff = tomorrow - now;
//   return Math.round(diff / 1000);
// };

// alert(getSecondsToTomorrow());

// function formatDate(date) {
//   if (new Date - date < 1000) {
//     return ('right now');
//   } 
//   if (new Date - date < 60 * 1000) {
//     return (`${(new Date - date) / 1000} sec ago`);
//   } 
//   if (new Date - date < 60 * 60 * 1000) {
//     return (`${(new Date - date) / 60 / 1000} min ago`);
//   }
//   let day = date.getDate();
//   day = day < 10 ? '0' + day : day;
//   let month = date.getMonth() + 1;
//   month = month < 10 ? '0' + month : month;
//   let year = date.getFullYear();
//   year = year.toString().slice(-2);
//   let hour = date.getHours();
//   hour = hour < 10 ? '0' + hour : hour;
//   let minutes = date.getMinutes();
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   return (`${day}.${month}.${year}, ${hour}:${minutes}`);
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// JSON

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let json = JSON.stringify(user);

// let object = JSON.parse(json);


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {

// }));

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */




