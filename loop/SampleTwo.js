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

// For-loop
for (let i = 0; i < carsData.length; i++) {
    console.log(`${carsData[i].brand} was launched at ${carsData[i].year}`)
}