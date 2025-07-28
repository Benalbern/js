let sepeda = {
    name: "Polygon",
    jumlah_gigi_gear: 7  ,
    // weight: "200kg",
    color: "Green",

    start: function() {
        console.log("Sepeda dikayuh.");
    },

    drive: function() {
        console.log("Mobil berjalan.");
    },

    brake: function() {
        console.log("Sepeda mengerem.");
    },

    stop: function() {
        console.log("Mobil berhenti.");
    }

};

console.log(sepeda.name);
console.log(sepeda.jumlah_gigi_gear);
console.log(sepeda.color);
console.log("");
sepeda.start();
sepeda.brake();