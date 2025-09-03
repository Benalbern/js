// class Animal {
//     constructor() {
//         if (new.target === Animal) {
//             throw new Error("Abstract classes cannot be instantiated.");
        
//         }
//     }

//     makeSound() {
//         throw new Error("Harus di implementasikan di subclass.");
    
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         return"Woof!";
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         return"Meow!";
//     }
// }

// let d = new Dog();
// console.log(d.makeSound());

// let c = new Animal();
// console.log(c.makeSound());










class Engine {
    start() {
        console.log("Mesin menyala");
    }

}

class GPS {
    navigasi() {
        console.log("Navigasi aktif");
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.gps = new GPS();
        
    }

    drive() {
        this.engine.start();
        this.gps.navigasi();
        console.log("Mobil jalan");
    }
}

let car = new Car();
car.drive();