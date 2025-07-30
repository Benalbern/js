// function Bike(name, gear, color) {
//     this.name = name;
//     this.color = color;
//     this.gear = gear;


// this.start = function() {                                               ////LATIHAN1//////
//     console.log(`${this.name} is starting`);
// };


// this.brake = function() {
//     console.log(`${this.name} is braking`);
// };
// };

// let bike1 = new Bike("Yamaha", "MT-07", "Black");
// let bike2 = new Bike("Kawasaki", "Ninja 650", "Green");

// bike1.start();
// bike2.brake();

//  class Bike {
//     constructor(name, gear, color) {
//         this.name = name;
//         this.gear = gear;
//         this.color = color;
        
//     }

//     start() {
//         console.log(`${this.name} is starting`);                      ////LATIHAN2//////
//     }

//     brake() {
//         console.log(`${this.name} is braking`);
//     }
// }

// let bike1 = new Bike("Yamaha", "MT-07", "Black");
// bike1.start();
// let bike2 = new Bike("Kawasaki", "Ninja 650", "Green");
// bike2.brake();

class Collage {
    constructor(name, nim, jurusan, tahun) {
        this.name = name;
        this.nim = nim;
        this.jurusan = jurusan;
        this.tahun = tahun;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}, my NIM is ${this.nim}, I am majoring in ${this.jurusan}, and I am in the ${this.tahun} class.`);
    }

    isSenior() {
        if (this.tahun < 2025) {
            console.log(`${this.name} is a senior.`);
            return true;
        } else {                                                       /////LATIHAN3//////
            console.log(`${this.name} is not a senior.`);
            return false;
        }
    }
}

let collage1 = new Collage("Eben", "90894545", "Computer Science", 2024);
collage1.introduce();
collage1.isSenior();
let collage2 = new Collage("Dika", "90894546", "Information Systems", 2026);
collage2.introduce();
collage2.isSenior();