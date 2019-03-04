// Case:
// 4 Functions
// Hasil dari Func1 dibawa ke Func2
// Hasil dari Func2 dibawa ke Func3
// Hasil dari Func3 dibawa ke Func4
// Hasil dari Func4 adalah hasil akhir dan ditampilkan ke user

const perkalian = (a, b) => a * b

const pembagian = (c, d) => c / d

const penjumlahan = (e, f) => e + f

const pengurangan = (g, h) => g - h

const hasilPenjumlahan = penjumlahan(50, 30)
const hasilPembagian = pembagian(hasilPenjumlahan, 2)
const hasilPerkalian = perkalian(hasilPembagian, 5)    // params[1] = 5
const hasilPengurangan = pengurangan(hasilPerkalian, 25)    // params[1] = 25
console.log(hasilPengurangan)
