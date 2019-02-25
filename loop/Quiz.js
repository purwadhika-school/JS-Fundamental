const Hotels = [
  {
    nama: "Ramada",
    lokasi: "Kuta",
    rating: 4
  },
  {
    nama: "Sovereign",
    lokasi: "Kuta",
    rating: 5
  },
  {
    nama: "Golden Tulip",
    lokasi: "Denpasar",
    rating: 3
  },
  {
    nama: "The Ritz Carlton",
    lokasi: "Nusa Dua",
    rating: 5
  }
]

// Quiz
// 1. Tampilkan hasil sebagai berikut:
// Hotel Ramada in Kuta have * * * * stars
// Hotel Sovereign in Kuta have * * * * * stars
// Hotel Golden Tulip in Denpasar have * * * stars
// Hotel The Ritz Carlton in Nusa Dua have * * * * * stars

Hotels.map(dataHotel => {
  const namaHotel = dataHotel.nama
  const lokasiHotel = dataHotel.lokasi
  const ratingHotel = dataHotel.rating
  let stars = ""

  for (let i = 0; i < ratingHotel; i++) {
    stars += "* "
  }

  console.log(`Hotel ${namaHotel} in  ${lokasiHotel} have ${stars} stars`)
})
