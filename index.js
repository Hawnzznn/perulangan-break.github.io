let nilai = 75;
let izinOrangTua = true;

if (nilai >= 70) {
  console.log("Anda lulus.");
} else if (nilai >= 60 && izinOrangTua) {
  console.log("Anda lulus dengan izin orang tua.");
} else {
  console.log("Anda tidak lulus.");
}

console.log("Perulangan dengan for:");

for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

console.log("Perulangan dengan while:");

let angka = 1;

while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}
