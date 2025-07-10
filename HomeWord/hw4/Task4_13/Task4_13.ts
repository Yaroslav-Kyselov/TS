// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(// 10000,// [{currency:'USD',value:25},{currency:'EUR',value:42}],// 'USD') // => 400

function exchange(sumUAH:number, currencyValues:{currency:string,value:number}[], exchangeCurrency:string):number {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;

    }
    return -99999999999999999; // or throw an error, or return null, depending on your needs
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));