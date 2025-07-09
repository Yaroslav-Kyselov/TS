// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
// let temps = [
//     [15, 20, 16],
//     [15, 20, 17],
//     [15, 20, 17],
//     [15, 20, 17],
//     [15, 20, 17],
//     [15, 20, 17],
//     [15, 20, 17],
// ];
type temperature = {
    day: string,
    morningTemp: number,
    dayTemp: number,
    nightTemp: number
}
let temps:temperature[] = [

    {day: '', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: '', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: '', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: '', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: '', morningTemp: 15, dayTemp: 20, nightTemp: 17},
    {day: '', morningTemp: 15, dayTemp: 20, nightTemp: 17},
]