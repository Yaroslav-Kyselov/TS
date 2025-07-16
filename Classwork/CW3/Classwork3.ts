// -------------------// Abstract Classes and Methods// Abstract classes cannot be instantiated directly
// abstract class Animal {
//     isAlive: boolean;
//     constructor(isAlive: boolean) {
//         this.isAlive = isAlive;
//     }
//     abstract bark(): void; // Abstract method, must be implemented by subclasses
// }
// class Bird extends Animal {
//     wings: boolean;
//
//     constructor(isAlive: boolean, wings: boolean) {
//         super(isAlive);
//         this.wings = wings;
//     }
//         bark(): void {
//         console.log("Chirp chirp");
//     }
// }

//---------------те саме через інтерфейс-------------------
// interface IAnimal {
//     isAlive: boolean;
//     sound: () => void; // Abstract method, must be implemented by subclasses
// }
// class Bird implements IAnimal {
//     isAlive: boolean;
//     wings: boolean;
//
//     sound(): void {
//     }
//
//     constructor(isAlive: boolean, wings: boolean) {
//         this.isAlive = isAlive;
//         this.wings = wings;
//     }
// }
// -------------------// те саме через типи-------------------
// type AnimalType = {
//     isAlive: boolean;
//     sound: () => void; // Abstract method, must be implemented by subclasses
// };
// class Horse implements AnimalType {
//     isAlive: boolean;
//     legs: number;
//
//     sound(): void {
//         console.log("Neigh neigh");
//     }
//
//     constructor(isAlive: boolean, legs: number) {
//         this.isAlive = isAlive;
//         this.legs = legs;
//     }
// }


