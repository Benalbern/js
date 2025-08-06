// class Animal {
//     speak() {
//         console.log("Animal is speaking");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat is meowing");                                         ////LATIHAN1 (override)////
//     }
// }

// const myCat = new Cat();
// myCat.speak(); 




// class BankAccount {
//     constructor() {
//         this._balance = 0;
//     }
//     deposit(amount) {
//         this._balance += amount;
//     }
//     showBalance() {
//         console.log(`Saldo saat ini: Rp${this._balance}`);                      /////LATIHAN2 (konvesi) encapsulation/////
//     }
// }

// const akun = new BankAccount();
// akun.deposit(100000);
// akun.showBalance();

// akun._balance = 50000000;
// akun.showBalance(); 



// class SecureAccount {
//     #balance = 0; // Private field

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo aman: Rp${this.#balance}`);                           /////LATIHAN3 (private field)/////
//     }
// }

// const akun = new SecureAccount();
// akun.deposit(100000);
// akun.#balance = 50000000; // This will throw an error because #balance is private
// akun.showBalance(); // This will still work and show the correct balance




// class Message {
//     send() {
//         console.log("mengirim pesan umum");
//     }
// }

// class Email extends Message {
//     send() {
//         console.log("mengirim email ke pengguna");
//     }                                                                                   ///////SOAL1 (override)//////
// }

// class SMS extends Message {
//     send() {
//         console.log("mengirim SMS ke nomor penerima");
//     }
// }

// const a = new Message();
// const b = new Email();
// const c = new SMS();

// a.send(); // Output: mengirim pesan umum
// b.send(); // Output: mengirim email ke pengguna 
// c.send(); // Output: mengirim SMS ke nomor penerima



// class User {
//     #password;
//     constructor(password) {
//         this.#password = password; // Private field
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Password benar, akses diberikan.");              /////SOAL2 (private field)/////
//         } else {
//             console.log("Password salah, akses ditolak.");
//         }
//     }
// }

// const user = new User("firdaus");
// user.checkPassword("firdaus"); // Output: Password benar, akses diberikan.
// user.checkPassword("da"); // Output: Password salah, akses ditolak.




