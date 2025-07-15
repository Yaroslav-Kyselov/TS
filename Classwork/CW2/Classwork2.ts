// let elementsByClassNameTarget: HTMLCollectionOf<Element> = document.getElementsByClassName('target');
// console.log(elementsByClassNameTarget);
//
// let ElementsByTagNameDiv: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
//
//
// let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
// let f1: HTMLFormElement = forms[0];
// console.log(f1.username);
// console.log(f1['age']);

// let p:HTMLParagraphElement=document.createElement('p');
// p.innerText='Hello World!';
// type UserType15= {
//     name: string,
//     age: number,
//     status: boolean
// }
// let users33 :UserType15[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (const user of users33) {
//     let div:HTMLDivElement=document.createElement('div');
//     div.innerText=user.name;
//     document.body.appendChild(div);
// }

// _________________________________fetch_________________________________
// interface IUser {
//     id: number;
//     name: string;
//    }
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then((users: IUser[]) => {
//
//     });
// async function foobar():Promise<IUser[]> {
//     let users:IUser[]=await fetch('https://jsonplaceholder.typicode.com/users')
//         .then((value:Response) => value.json());
//     return users;
// }
// -------------------------------type alias---------------------------------
// type MyString = string;
// let a23: MyString = 'hello';
//
// type MyType = string | number | boolean;
// let b23: MyType = true;
//
// type FalsyType = 0 | false | '' | undefined | null; // falsy values
// let c23: FalsyType = '';

// ------------------------------------type model intersection----------------------------
// type UserType = {
//     name: string;
//     age: number;
//     status: boolean;
// }
// let users45: UserType[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
// type UserType2 = UserType & {id: number}; //----до одного типу можна додавати ще властивості
// let users55: UserType2[] = [
//     {id:1, name: 'vasya', age: 31, status: false},
//     {id:1, name: 'petya', age: 30, status: true},
//     {id:1, name: 'kolya', age: 29, status: true},
//     {id:1, name: 'olya', age: 28, status: false},
//     {id:1, name: 'max', age: 30, status: true},
//     {id:1, name: 'anya', age: 31, status: false},
//     {id:1, name: 'oleg', age: 28, status: false},
//     {id:1, name: 'andrey', age: 29, status: true},
//     {id:1, name: 'masha', age: 30, status: true},
//     {id:1, name: 'olya', age: 31, status: false},
//     {id:1, name: 'max', age: 31, status: true}
// ]
// --------------------------------------interface--------------------------------
// interface IUser {
//     name: string;
//     age: number;
//     status: boolean;
// }
//
// let users77: IUser[] = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
//
// // ----------------------------------------додати властивості до інтерфейсу-------------------
// interface IUser2 extends IUser {
//     id: number;
// }
//
// let users78: IUser2[] = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 1, name: 'petya', age: 30, status: true},
//     {id: 1, name: 'kolya', age: 29, status: true},
//     {id: 1, name: 'olya', age: 28, status: false},
//     {id: 1, name: 'max', age: 30, status: true},
//     {id: 1, name: 'anya', age: 31, status: false},
//     {id: 1, name: 'oleg', age: 28, status: false},
//     {id: 1, name: 'andrey', age: 29, status: true},
//     {id: 1, name: 'masha', age: 30, status: true},
//     {id: 1, name: 'olya', age: 31, status: false},
//     {id: 1, name: 'max', age: 31, status: true}
// ]
// -------------------------classes----------------------------
// class User {
//     name: string;
//     age: number;
//     status: boolean;
//     //private status:boolean//---------можна добавити приватні властивості, які будуть доступні тільки в класі User
//    
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//  }
//  class User2 extends User {
//      constructor(name: string, age: number, status: boolean, private id: number) {
//          super(name, age, status);
//          this.id = id;
//      }
//     // id: number;
//  }
//  let user2: User2 = new User2('vasya', 31, false, 1);