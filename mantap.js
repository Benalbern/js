// class Burung {
//     constructor(nama) {
//         this.nama = nama;
//     }
//     besuara() {
//         console.log(this.nama + " bersuara: Cuit Cuit");
//     }
// }

// class Ayam extends Burung {
//     besuara() {
//         console.log(this.nama + " bersuara: Kukuruyuk");                                      ///CONTOH1POLYMORPHISM///
//     }
// }

// class Bebek extends Burung {
//     besuara() {
//         console.log(this.nama + " bersuara: Kwek-kwek");
//     }
// }

// const daftarBurung = [new Ayam("Ayam"), new Bebek("Bebek"), new Burung("Burung")];

// daftarBurung.forEach(burung => burung.besuara());














// class Matematika {
//     static pi = 3.14159;

//     static luasLingkaran(jari) {
//         return this.pi * jari * jari;                                                                   ///CONTOH2STATIC///
//     }
// }

// console.log(Matematika.luasLingkaran(5));











class Mahasiswa {
    #nama

    constructor(nama) {
        this.#nama = nama;
    }

    get nama() {
        return this.#nama.toUpperCase();                                                           ///CONTOH3ENCAPSULATION///
    }

    set nama(value) {
        if (value.length < 3) {
            console.log("Nama terlalu pendek");
            return;
        }
        this.#nama = value;
    }
}

const mhs = new Mahasiswa("Budi");

console.log(mhs.nama); 

mhs.nama = "Bu"; 
mhs.nama = "Firdaus";
console.log(mhs.nama); 