// є масив
type UserType5= {
    name: string,
    age: number,
    status: boolean
}


let users5:UserType5[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:

//- користувачів зі статусом true
// for (const user of users5) {
//     if (user.status) {
//         console.log(user);
//     }
// }

// - користувачів зі статусом false
// for (const user of users5) {
//     if (!user.status) {
//         console.log(user);
//     }
// }

// - користувачів які старші за 30 років
for (const user of users5) {
    if (user.age > 30) {
        console.log(user);
    }
}