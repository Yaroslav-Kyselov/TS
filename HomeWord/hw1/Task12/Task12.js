"use strict";
// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
const course1 = coursesAndDurationArray[0];
if (course1.monthDuration > 5) {
    console.log('super');
}
const asd = coursesAndDurationArray[1];
if (asd.monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super');
}
console.log(asd);
