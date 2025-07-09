// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x:number = +prompt('enter number 1 0 -3');
// if (x !== 0) {
//     console.log('right');
// } else {
//     console.log('wrong');
//
// }

let strValue:string|null = prompt('enter number 1 0 -3');
if (strValue !== null) {
    let numberValue:number = +strValue;
    if (numberValue !== 0) {
        console.log('right');
    } else {
        console.log('wrong');
    }

}