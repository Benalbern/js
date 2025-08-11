// // Definisi kelas Book
// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   info() {
//     console.log(`${this.title} oleh ${this.author}`);
//   }
// }

// // Definisi kelas Ebook yang mewarisi (extends) dari Book                                               ///SISTEM PERPUSTAKAAN///
// class Ebook extends Book {
//   constructor(title, author, fileSize) {
//     super(title, author);
//     this.fileSize = fileSize;
//   }

//   // Metode untuk menampilkan informasi Ebook
//   // Ini meng-override (menimpa) metode info() jika ada di kelas induk
//   info() {
//     console.log(`${this.title} oleh ${this.author}, ukuran file: ${this.fileSize} MB`);
//   }
// }

// // --- Contoh Penggunaan ---

// const buku = new Book('Laskar Pelangi', 'Andrea Hirata');
// buku.info();

// console.log('-------------------------------------------');

// const ebookSatu = new Ebook('Laskar Pelangi', 'Pidi Baiq', 12);
// ebookSatu.info();





// class HotelRoom {
//     #isBooked

//     bookRoom(){
//         this.#isBooked = true;
//     }

//     checkStatus(){
//         console.log(`${this.#isBooked ? 'sudah dipesan' : 'tersedia'}`);                               ///SISTEM RESERVASI HOTEL///
//     }
// }

// const room101 = new HotelRoom();

// // 1. Cek status awal kamar
// room101.checkStatus(); // Output: tersedia
// room101.bookRoom(); // Memesan kamar
// room101.checkStatus(); // Output: sudah dipesan



  

// class Product {
//     constructor(name) {
//         this.name = name;
//     }

//     display() {
//         console.log(`Produk: ${this.name}`);
//     }
// }

// class Clothing extends Product {
//     constructor(name, size) {
//         super(name); // Memanggil constructor dari kelas induk (Product)                                 ///SISTEM E-COMMERCE///
//         this.size = size;
//     }

//     // Meng-override (menimpa) metode display() dari kelas induk
//     display() {
//         console.log(`Produk: ${this.name}, Ukuran: ${this.size}`);
//     }
// }

// // --- Contoh Penggunaan ---
// const produkUmum = new Product("Buku Tulis");
// produkUmum.display();

// const kemeja = new Clothing("Kemeja Flanel", "L");
// kemeja.display();



     

// class Ticket {
//     constructor(event, price) {
//         this.event = event;
//         this.price = price;
//     }

//     printTicket() {
//         console.log(`Tiket untuk acara: ${this.event}, Harga: Rp${this.price}`);
//     }
// }

// // 2. Kelas turunan untuk tiket VIP
// class VIPTicket extends Ticket {
//     // Constructor diwarisi dari Ticket, jadi tidak perlu ditulis ulang

//     // Override metode printTicket untuk menambahkan detail VIP
//     printTicket() {
//         console.log(`Tiket untuk acara: ${this.event}, Harga: Rp${this.price} (VIP)`);                                   ///SISTEM TIKET KONSER///
//     }
// }

// // 3. Factory Function untuk membuat jenis tiket yang sesuai
// function createTicket(event, price) {
//     if (price > 100000) {
//         return new VIPTicket(event, price);
//     } else {
//         return new Ticket(event, price);
//     }
// }

// // --- Contoh Penggunaan ---
// const tiketBiasa = createTicket("Konser Band Lokal", 75000);
// tiketBiasa.printTicket();

// const tiketVIP = createTicket("Konser Internasional", 500000);
// tiketVIP.printTicket();





// Kelas dasar untuk Hewan
// class Animal {
//     // Properti private, tidak bisa diakses dari luar kelas.
//     // Dimulai dari 50 agar lebih menarik.
//     #energy = 50;

//     // Metode untuk menampilkan status energi saat ini
//     getStatus() {
//         console.log(`Energi saat ini: ${this.#energy}/100`);
//     }

//     eat(amount) {
//         console.log(`Makan untuk menambah ${amount} energi...`);
//         this.#energy += amount;
//         // Memastikan energi tidak melebihi 100 (clamping)
//         if (this.#energy > 100) this.#energy = 100;
//         this.getStatus();
//     }

//     sleep(time) {
//         const energyGain = time * 10; // Setiap jam tidur menambah 10 energi
//         console.log(`Tidur selama ${time} jam untuk menambah ${energyGain} energi...`);                                          //SISTEM ENERGI HEWAN///
//         this.#energy += energyGain;
//         if (this.#energy > 100) this.#energy = 100;
//         this.getStatus();
//     }
// }

// // Kelas turunan untuk Anjing
// class Dog extends Animal {
//     // Override metode eat agar lebih efektif untuk anjing
//     eat(amount) {
//         console.log("Anjing makan dengan sangat lahap!");
//         // Anjing mendapatkan energi 1.5x lebih banyak dari makanan yang sama
//         const boostedAmount = Math.floor(amount * 1.5);
//         super.eat(boostedAmount); // Memanggil metode eat() dari kelas induk (Animal)
//     }
// }

// // --- Contoh Penggunaan ---
// const myDog = new Dog();
// console.log("--- Status Awal Anjing ---");
// myDog.getStatus();

// console.log("\n--- Anjing Diberi Makan ---");
// myDog.eat(20); // Seharusnya menambah 20 * 1.5 = 30 energi

// console.log("\n--- Anjing Tidur ---");
// myDog.sleep(3); // Seharusnya menambah 3 * 10 = 30 energi




     
// Kelas dasar untuk Akun Bank
// class Account {
//     #balance = 0;

//     // Public getter untuk mengakses saldo secara aman (read-only dari luar)
//     get balance() {
//         return this.#balance;
//     }

//     // Metode untuk menampilkan saldo ke konsol
//     showBalance() {
//         console.log(`Saldo saat ini: Rp${this.balance}`);
//     }

//     deposit(amount) {
//         this.#balance += amount;
//         console.log(`Berhasil deposit Rp${amount}.`);
//         this.showBalance();
//     }

//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log("Penarikan gagal: Saldo tidak mencukupi.");
//         } else {
//             this.#balance -= amount;
//             console.log(`Berhasil menarik Rp${amount}.`);
//         }
//         this.showBalance();
//     }
// }

// // Kelas turunan untuk Rekening Tabungan dengan batasan                                                                            ///SISTEM REKENING BANK///
// class SavingsAccount extends Account {
//     // Override metode withdraw dengan logika tambahan
//     withdraw(amount) {
//         const maxWithdrawal = this.balance * 0.5;
//         if (amount > maxWithdrawal) {
//             console.log(`Penarikan gagal: Jumlah (Rp${amount}) melebihi batas 50% (Rp${maxWithdrawal}).`);
//             this.showBalance();
//         } else {
//             // Jika lolos pengecekan, panggil metode withdraw dari kelas induk
//             super.withdraw(amount);
//         }
//     }
// }

// // --- Contoh Penggunaan ---
// const mySavings = new SavingsAccount();
// console.log("--- Membuat Rekening Tabungan ---");
// mySavings.showBalance();

// console.log("\n--- Menabung ---");
// mySavings.deposit(200000);

// console.log("\n--- Mencoba Menarik Terlalu Banyak (Gagal) ---");
// mySavings.withdraw(150000); // Harus gagal karena > 50% dari 200.000

// console.log("\n--- Mencoba Menarik Sesuai Aturan (Berhasil) ---");
// mySavings.withdraw(80000); // Harus berhasil karena <= 50% dari 200.000





// // Kelas dasar untuk Kendaraan
// class Vehicle {
//     #speed = 0; // Kecepatan awal, private

//     // Metode untuk menampilkan kecepatan saat ini
//     showSpeed() {
//         console.log(`Kecepatan saat ini: ${this.#speed} km/h`);
//     }

//     accelerate(amount) {
//         this.#speed += amount;
//         // Batasi kecepatan maksimal 180
//         if (this.#speed > 180) this.#speed = 180;
//     }

//     brake(amount) {
//         this.#speed -= amount;
//         // Batasi kecepatan minimal 0
//         if (this.#speed < 0) this.#speed = 0;
//     }
// }

// // Kelas turunan untuk Mobil
// class Car extends Vehicle {
//     // Override metode accelerate
//     accelerate(amount) {
//         console.log("Mobil berakselerasi...");
//         super.accelerate(amount); // Panggil logika accelerate dari kelas induk                                                  ///SISTEM KECEPATAN KENDARAAN///
//     }
// }

// // --- Contoh Penggunaan ---
// const myCar = new Car();
// console.log("--- Mobil Dinyalakan ---");
// myCar.showSpeed();

// console.log("\n--- Menambah Kecepatan ---");
// myCar.accelerate(80);
// myCar.showSpeed();

// console.log("\n--- Menambah Kecepatan Hingga Maksimal ---");
// myCar.accelerate(150); // Seharusnya berhenti di 180
// myCar.showSpeed();




    
// Kelas dasar untuk Karyawan
// class Employee {
//     #workingHours = 0; // Total jam kerja, private

//     // Metode untuk menampilkan total jam kerja
//     showHours() {
//         console.log(`Total jam kerja tercatat: ${this.#workingHours} jam.`);
//     }

//     logHours(hours) {
//         this.#workingHours += hours;
//     }
// }

// // Kelas turunan untuk Karyawan Remote
// class RemoteEmployee extends Employee {
//     // Override metode logHours dengan aturan khusus
//     logHours(hours) {
//         if (hours > 8) {
//             console.log("Gagal: Melebihi batas kerja harian (maksimal 8 jam).");
//         } else {
//             console.log(`Berhasil mencatat ${hours} jam kerja.`);
//             super.logHours(hours); // Panggil metode logHours dari kelas induk                                                ///SISTEM MANAJEMEN KARYAWAN REMOTE///
//         }
//     }
// }

// // --- Contoh Penggunaan ---
// const remoteWorker = new RemoteEmployee();
// console.log("--- Status Awal ---");
// remoteWorker.showHours();

// console.log("\n--- Mencoba Mencatat Jam Kerja Berlebih (Gagal) ---");
// remoteWorker.logHours(10);
// remoteWorker.showHours();

// console.log("\n--- Mencatat Jam Kerja Sesuai Aturan (Berhasil) ---");
// remoteWorker.logHours(8);
// remoteWorker.showHours();




 
// Kelas dasar untuk Pesawat
// class Airplane {
//     #altitude = 0; // Ketinggian awal, private

//     // Metode untuk menampilkan ketinggian saat ini
//     showAltitude() {
//         console.log(`Ketinggian saat ini: ${this.#altitude} meter.`);
//     }

//     ascend(meters) {
//         this.#altitude += meters;
//         // Batasi ketinggian maksimal 12000 meter
//         if (this.#altitude > 12000) this.#altitude = 12000;
//     }

//     descend(meters) {
//         this.#altitude -= meters;
//         // Batasi ketinggian minimal 0 meter
//         if (this.#altitude < 0) this.#altitude = 0;
//     }
// }

// // Kelas turunan untuk Jet
// class Jet extends Airplane {
//     // Override metode ascend
//     ascend(meters) {
//         console.log("Jet menanjak dengan cepat!");
//         // Panggil logika ascend dari kelas induk dengan nilai dua kali lipat                                                   ///SISTEM PESAWAT DAN JET///
//         super.ascend(meters * 2);
//     }
// }

// // --- Contoh Penggunaan ---
// const myJet = new Jet();
// console.log("--- Jet di landasan pacu ---");
// myJet.showAltitude();

// console.log("\n--- Jet Lepas Landas ---");
// myJet.ascend(4000); // Seharusnya naik 8000 meter
// myJet.showAltitude();

// console.log("\n--- Mencoba Melewati Batas Maksimal ---");
// myJet.ascend(3000); // Seharusnya mencoba naik 6000m, tapi akan berhenti di 12000m
// myJet.showAltitude();




   
// Kelas dasar untuk Tempat Parkir
// class ParkingSpot {
//     #isOccupied = false; // Status tempat parkir, private

//     getStatus() {
//         console.log(`Status: ${this.#isOccupied ? 'Terisi' : 'Kosong'}`);
//     }

//     occupy() {
//         this.#isOccupied = true;
//         console.log("Tempat parkir telah terisi.");
//     }

//     vacate() {
//         this.#isOccupied = false;
//         console.log("Tempat parkir telah dikosongkan.");
//     }
// }

// // Kelas turunan untuk Tempat Parkir Mobil Listrik
// class ElectricParkingSpot extends ParkingSpot {
//     // Override metode occupy dengan validasi tambahan
//     occupy(car) {
//         if (car && car.isElectric) {
//             console.log("Mobil listrik terdeteksi. Parkir diizinkan.");
//             super.occupy(); // Panggil metode occupy dari kelas induk
//         } else {
//             console.log("Gagal parkir: Hanya mobil listrik yang diizinkan.");                                       ///SISTEM PARKIR OTOMATIS///
//         }
//     }
// }

// // --- Contoh Penggunaan ---
// const evSpot = new ElectricParkingSpot();

// // Representasi mobil sederhana dalam bentuk objek
// const electricCar = { type: 'Tesla', isElectric: true };
// const regularCar = { type: 'Avanza', isElectric: false };

// console.log("--- Status Awal Tempat Parkir EV ---");
// evSpot.getStatus();

// console.log("\n--- Mencoba Parkir Mobil Biasa (Gagal) ---");
// evSpot.occupy(regularCar);
// evSpot.getStatus();

// console.log("\n--- Mencoba Parkir Mobil Listrik (Berhasil) ---");
// evSpot.occupy(electricCar);
// evSpot.getStatus();






  
// class User {
//     #password; // Private field untuk menyimpan password dengan aman

//     constructor(password) {
//         this.#password = password;
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Benar");
//         } else {
//             console.log("Salah");                                                                               ///SISTEM LOGIN APLIKASI///
//         }
//     }
// }

// // --- Contoh Penggunaan ---
// const appUser = new User("kucingOren123");

// console.log("Mencoba login dengan password yang benar:");
// appUser.checkPassword("kucingOren123");

// console.log("\nMencoba login dengan password yang salah:");
// appUser.checkPassword("kucinghitam");

// Mencoba mengakses password secara langsung akan menyebabkan error, membuktikan enkapsulasi berhasil.
// console.log(appUser.#password); // SyntaxError: Private field '#password' must be declared in an enclosing class









    
// Kelas dasar untuk Kendaraan
// class Vehicle {
//     move() {
//         console.log("Kendaraan bergerak");
//     }
// }

// // Kelas turunan untuk Mobil
// class Car extends Vehicle {
//     // Override metode move
//     move() {
//         console.log("Mobil berjalan di jalan raya");                                                          ///SISTEM KENDARAAN///
//     }
// }

// // Kelas turunan untuk Perahu
// class Boat extends Vehicle {
//     // Override metode move
//     move() {
//         console.log("Perahu berlayar di laut");
//     }
// }

// // --- Contoh Penggunaan ---
// const myCar = new Car();
// const myBoat = new Boat();

// myCar.move();
// myBoat.move();










    
// class Order {
//     // Private field dengan nilai default
//     #status = "Pending";

//     // Public getter untuk membaca status
//     get status() {
//         return this.#status;
//     }

//     // Public setter untuk mengubah status dengan validasi
//     set status(newStatus) {
//         if (newStatus === "Delivered" || newStatus === "Cancelled") {
//             this.#status = newStatus;
//             console.log(`Status pesanan berhasil diubah menjadi: ${this.#status}`);                                                                  ///SISTEM PESANAN MAKANAN///
//         } else {
//             console.log(`Gagal: Status "${newStatus}" tidak valid. Status harus "Delivered" atau "Cancelled".`);
//         }
//     }
// }

// // --- Contoh Penggunaan ---
// const myOrder = new Order();
// console.log(`Status awal: ${myOrder.status}`);

// console.log("\n--- Mencoba mengubah status menjadi tidak valid ---");
// myOrder.status = "Shipped"; // Ini akan ditolak oleh setter
// console.log(`Status setelah percobaan gagal: ${myOrder.status}`);

// console.log("\n--- Mencoba mengubah status menjadi valid ---");
// myOrder.status = "Delivered"; // Ini akan diterima oleh setter
// console.log(`Status akhir: ${myOrder.status}`);













   
// Kelas dasar untuk Pembayaran
// class Payment {
//     #amount; // Private field untuk menyimpan jumlah pembayaran

//     constructor(amount) {
//         this.#amount = amount;
//     }

//     // Public getter diperlukan agar subclass bisa membaca nilai #amount yang private
//     get amount() {
//         return this.#amount;
//     }

//     process() {
//         console.log(`Memproses pembayaran sebesar Rp${this.amount}`);                                             ///SISTEM PEMBAYARAN///
//     }
// }

// // Kelas turunan untuk Pembayaran Kartu Kredit
// class CreditCardPayment extends Payment {
//     // Override metode process untuk memberikan pesan yang lebih spesifik
//     process() {
//         console.log(`Memproses pembayaran kartu kredit sebesar Rp${this.amount}`);
//     }
// }

// // --- Contoh Penggunaan ---
// const ccPayment = new CreditCardPayment(250000);
// ccPayment.process();











   
// Kelas dasar untuk Akun
// class Account {
//     #balance = 0; // Private field dengan nilai awal 0

//     // Public getter agar subclass bisa membaca nilai #balance
//     get balance() {
//         return this.#balance;
//     }

//     // Metode untuk menambah saldo (agar contoh lebih realistis)                                                         ///SISTEM AKUN PREMIUM BANK///
//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }

//     showBalance() {
//         console.log(`Saldo: Rp${this.balance}`);
//     }
// }

// // Kelas turunan untuk Akun Premium
// class PremiumAccount extends Account {
//     // Override metode showBalance
//     showBalance() {
//         console.log(`Saldo anda adalah: Rp${this.balance} (Akun Premium)`);
//     }
// }

// // --- Contoh Penggunaan ---
// const premiumUser = new PremiumAccount();
// premiumUser.deposit(500000);
// premiumUser.showBalance();
