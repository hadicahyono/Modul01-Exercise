let number = 9;
for (let i = 1; i <= number + 1; i++) {
  console.log(`${number} x ${i}`);
}

// <------------------>
let input = "a";
let removeSpasi = input.replace(/\s+/g, "");
// console.log(`Ini remove spasi: ${removeSpasi} `);
let inputReverse = removeSpasi.split("").reverse().join("");
// console.log(`Ini split reverse dan join: ${inputReverse}`);

if (inputReverse === removeSpasi) {
  console.log(`${input}: palindrome`);
} else {
  console.log(`${input}: tidak palindrome`);
}

// <------------------>
let cm = 125; //satuan cm
let km = cm / 100000;
console.log(`${cm}cm = ${km}km`);

// <------------------>
let nilai = 10000;
let nilaiUbah = nilai.toLocaleString("id");
let rupiah = console.log(`Rp. ${nilaiUbah},00`);

// <------------------>
let word = "Hello World";
let search = "ld";
let remove = word.toLowerCase().replace(search, "");
console.log(`input: ${word}\nremove: ${search}\nresult: ${remove}`);

//<------------------>
let kata = "kita coba kata ini";
let tiapKata = kata.split(" ");
// console.log(tiapKata);

for (i = 0; i < tiapKata.length; i++) {
  tiapKata[i] = tiapKata[i][0].toUpperCase() + tiapKata[i].slice(1);
}
console.log(tiapKata.join(" "));

//<------------------>
let string = "kelas perkakas";
let revString = string.split("").reverse().join("");
console.log(revString);

//<------------------>
// memisahkan huruf vokal dan konsonan dalam sebuah variable (kata/kalimat dan tanpa spasi)
// nge-loop satu variable untuk ngecek tiap i untuk vokal/konsonan dan spasi

let kalimat = "kkiittaa ccoobbaa ppaakkaaii ssppaassii",
  vokal = [],
  konsonan = [];

for (i = 0; i < kalimat.length; i++) {
  if (
    kalimat[i] === "a" ||
    kalimat[i] === "i" ||
    kalimat[i] === "u" ||
    kalimat[i] === "e" ||
    kalimat[i] === "o"
  ) {
    vokal.push(kalimat[i]);
  } else if (kalimat[i] === " ") {
    continue;
  } else {
    konsonan.push(kalimat[i]);
  }
}

let newVokal = [...new Set(vokal.join(""))];
let newKonsonan = [...new Set(konsonan.join(""))];

console.log(`vokal: ${newVokal.join("")}\nkonsonan: ${newKonsonan.join("")}`);
