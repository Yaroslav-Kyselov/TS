// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

type Book_1={
    title: string,
    pageCount: number,
    genre: string,
    authors: {name: string, age: number} []
}

let book_1:Book_1 = { title: 'asdasd',
    pageCount: 123213,
    genre: 'music',
    authors: [
        {
            name: 'asdasd',
            age: 20
        },
        {
            name: 'asdasd',
            age: 20
        }
    ]
};