// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку декаду місяця потрапляє це число (у першу, другу чи третю).

let day:number = 11

if (day >= 1 && day <= 10) {
    console.log('1');
} else if (day > 10 && day <= 20) {
    console.log('2');
} else if (day > 20 && day <= 31) {
    console.log(3);
}