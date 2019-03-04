// Function, Loop, Conditional
// Quiz

const products = [
  {
    product_name: "Glass",
    product_price: "25000",
    product_color: "White",
    product_category: "Kitchen",
    product_location: "Jakarta"
  },
  {
    product_name: "Shirt",
    product_price: "45000",
    product_color: "Red",
    product_category: "Fashion",
    product_location: "Bandung"
  },
  {
    product_name: "Indomie Goreng",
    product_price: "75000",
    product_color: "White",
    product_category: "Food",
    product_location: "Surabaya"
  },
  {
    product_name: "Jacket",
    product_price: "185000",
    product_color: "Blue",
    product_category: "Fashion",
    product_location: "Jakarta"
  }
]

// 1. Hitung pajaknya (15%)
// 2. Hitung diskonnya ( Fashion = 25% )
// 3. Hitung ongkir ( Jakarta: 15000, Bandung: 19000, Surabaya: 25000 )
// 4. Hitung berapa total yang harus dibayar User jika membeli masing2 product tsb, dengan menggunakan looping

// Expected Result:
// Jumlah yang harus dibayar untuk White Glass adalah Rp. XXX
// Jumlah yang harus dibayar untuk Red Shirt adalah Rp. XXX
// Jumlah yang harus dibayar untuk White Indomie Goreng adalah Rp. XXX
// Jumlah yang harus dibayar untuk Blue Jacket adalah Rp. XXX

const hitungPajak = price => price * 0.15

const hitungDiskon = (price, category) => {
  if (category === 'Fashion') {
    return price * 0.25
  } else {
    return 0
  }
}

const hitungOngkir = city => {
  if (city === "Jakarta") {
    return 15000
  } else if (city === "Bandung") {
    return 19000
  } else if (city === "Surabaya") {
    return 25000
  }
}

const hitungTotal = (price, pajak, diskon, ongkir) => (price + pajak + ongkir) - diskon

products.map((dataObject) => {
  const { product_price, product_location, product_category, product_name } = dataObject

  const priceInt = parseInt(product_price)
  const hasilHitungTax = hitungPajak(priceInt)
  const hasilHitungDiskon = hitungDiskon(priceInt, product_category)
  const hasilHitungOngkir = hitungOngkir(product_location)
  const totalAmount = hitungTotal(priceInt, hasilHitungTax, hasilHitungDiskon, hasilHitungOngkir)
  console.log( `Jumlah yang harus dibayar untuk ${product_name} adalah Rp. ${totalAmount}` )
})


