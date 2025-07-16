// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1

// let currentNumber:number = +localStorage.getItem('number');
// currentNumber += 1;
// localStorage.setItem('number', currentNumber);
// document.getElementById('target').innerText = currentNumber;

let storedValue:string|null = localStorage.getItem('number');
let currentNumber: number = storedValue ? +storedValue : 0;

currentNumber += 1;

localStorage.setItem('number', currentNumber.toString());

const target = document.getElementById('target');
if (target) {
    target.innerText = currentNumber.toString();
}