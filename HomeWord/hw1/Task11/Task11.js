"use strict";
// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто
//     ті, які приводиться до false, а це 0 null undefined і тд).
//  0
// ''
// false
// null
//undefined
//NaN
// let x = 0;
// if (x === 0 || x === null || x === undefined || x === NaN || x === '') {
//     x = 'default';
// }
let x = null;
if (!x) {
    x = 'default';
}
