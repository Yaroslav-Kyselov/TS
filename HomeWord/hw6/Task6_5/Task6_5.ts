// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str65:string):string[] {
    if (str65) {
        const split = str65.split(' ');
        return split;
    }
    return [''];

}

console.log(stringToArray('sad asd'));