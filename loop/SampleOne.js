// map
const cars = ["Honda", "Toyota", "Mitsubhisi", "Mazda"]

cars.map((dataObject, index) => {
  console.log(`Data no ${index}. ${dataObject}`)
})

const carsData = [
  {
    brand: "Mazda",
    type: "Hatchback",
    year: "2015"
  },
  {
    brand: "Mitsubishi",
    type: "MPV",
    year: "2018"
  },
  {
    brand: "Suzuki",
    type: "Crossover",
    year: "2019"
  }
]

carsData.map((dataCars, index) => {
  console.log(`${index}. ${dataCars.brand} was launched at ${dataCars.year}`)
})
