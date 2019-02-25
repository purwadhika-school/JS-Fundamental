const DanielReport = {
  mathematic: 80,
  english: 55,
  bahasa: 100,
  science: 80,
  economy: 60
}

// rules
// 1. lebih dari 80, tampilkan nilai A
// 2. diantara 60 dan 80, tampilkan nilai B
// 3. kurang dari 60, tampilkan nilai C

// conditional statement
const average =
  (DanielReport.mathematic +
    DanielReport.english +
    DanielReport.bahasa +
    DanielReport.science +
    DanielReport.economy) /
  5
if (average > 80) {
  console.log("Congratulations! You got A!")
} else if (average >= 60 && average <= 80) {
  console.log("You got B!")
} else if (average < 60) {
  console.log("You got C!")
}
