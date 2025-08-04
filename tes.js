// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} Sedang makan`);
//   }                                                    /////CONTOH//////
// }
            
// class Cat extends Animal {
//     constructor(name, color) { 
//         super(name);
//         this.color = color;
//     }   
//     meow() {
//         console.log(`${this.name} ${this.color} mengeong`);
//     }
// }

// const kucing = new Cat("Ronaldo", "hitam");
// kucing.eat();
// kucing.meow();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} sedang berbicara`);
//   }
// }

// class Dog extends Animal {
//     constructor(name, color) {
//         super(name);
//         this.color = color;                                     //////LATIHAN1//////
//     }
//     bark() {
//         console.log(`${this.name} ${this.color} menggonggong`);
//     }
// }

// class Bird extends Animal {
//     constructor(name, color) { 
//         super(name);
//         this.color = color;
//     }   
//     fly() {
//         console.log(`${this.name} ${this.color} terbang`);
//     }
// }

// const anjing = new Dog("Bud", "cokelat");
// const burung = new Bird("Steven", "hijau");
// anjing.speak();
// anjing.bark();
// burung.speak();
// burung.fly();

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class Manager extends Employee {                                
    constructor(name, position, salary, department) {       ///////LATIHAN2//////
        super(name, position, salary);
        this.department = department;
    }
    lead() {
        console.log(`${this.name} memimpin departemen ${this.department} sebagai ${this.position} dengan gaji ${this.salary} Rupiah`);
    }
}


const firdaus = new Manager("Bud", "Manajer", 10000, "Pemasaran");
firdaus.lead();