// Clean Code
const productsPerTwoKilogram = {
  avocado: 45000,
  dragonFruit: 70000,
  mango: 45000,
  pineapple: 80000
}

const shippingFeePerKilogram = {
  Jakarta: 11000,
  Bandung: 20000,
  Tangerang: 15000,
  Yogyakarta: 25000,
  Surabaya: 21000
}

// Tasks:
// 1. Hitung shippingFee 2kg buah-buahan

// Rules:
// 1. Jika pengiriman ke Jakarta, maka tampilkan (shippingFee x 2) ditambah dengan harga barang
// 2. Jika pengiriman ke Bandung, maka tampilkan shippingFee x 2 ditambah dengan harga barang
// 3. Jika pengiriman ke Tangerang, maka tampilkan shippingFee x 2 ditambah dengan harga barang
// 4. Jika pengiriman ke Yogyakarta, maka tampilkan shippingFee x 2 ditambah dengan harga barang
// 5. Jika pengiriman ke Surabaya, maka tampilkan shippingFee x 2 ditambah dengan harga barang
// 6. Selain dari semua kota yang sdh disebut diatas maka tampilkan error

// avocado, mango

const fruitOne = productsPerTwoKilogram.mango
const shippingAddressFruitOne = "Surabaya"
console.log(fruitOne, shippingAddressFruitOne)

if (shippingAddressFruitOne === "Jakarta") {
  const totalAmount = fruitOne + shippingFeePerKilogram.Jakarta * 2
  console.log(totalAmount)
} else if (shippingAddressFruitOne === "Bandung") {
  const totalAmount = fruitOne + shippingFeePerKilogram.Bandung * 2
  console.log(totalAmount)
} else if (shippingAddressFruitOne === "Tangerang") {
  const totalAmount = fruitOne + shippingFeePerKilogram.Tangerang * 2
  console.log(totalAmount)
} else if (shippingAddressFruitOne === "Yogyakarta") {
  const totalAmount = fruitOne + shippingFeePerKilogram.Yogyakarta * 2
  console.log(totalAmount)
} else if (shippingAddressFruitOne === "Surabaya") {
  const totalAmount = fruitOne + shippingFeePerKilogram.Surabaya * 2
  console.log(totalAmount)
} else {
  console.log("Maaf, Kota tidak dapat ditemukan!")
}

console.log(totalAmount)
