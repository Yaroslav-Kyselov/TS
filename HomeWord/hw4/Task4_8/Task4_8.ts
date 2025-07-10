// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// function foobar(arrayOfPrimitives:boolean|string|number): void {
type PrimitiveType = boolean | string | number;
function foobar48(arrayOfPrimitives:PrimitiveType[]): void {

    document.write(`<ul>`);
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

foobar48([1123, 123, 12, 312, 321, 3, 'asdads', true]);