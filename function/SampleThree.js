const product = {
  product_name: "Glass",
  product_price: 25000,
  product_color: "White",
  product_category: "Kitchen"
}

// Quiz
// 1. Create function to calculate the tax (10%)
// 2. Create function to calculate the shipping fee (20000)
// 3. Create function to calculate the discount (5%)
// 4. User should have know total amount (include tax, shipping fee, discount)

const hitungTax = price => price * 0.1

const hitungOngkir = () => 20000

const hitungDiscount = price => price * 0.05




const { product_price, product_name, product_category } = product  // destructuring

const pajak = hitungTax(product_price)
const ongkir = hitungOngkir()
const diskon = hitungDiscount(product_price)

const totalAmount = (product_price + pajak + ongkir) - diskon
console.log( totalAmount ) // 46,250
