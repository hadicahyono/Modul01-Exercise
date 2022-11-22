// <--> Area Rectangle <-->
// let p = 4;
// let l = 5;
// var areaRectangle = p * l;
// console.log(areaRectangle);

// <--> Perimeter of Rectangle <-->
// let p = 4;
// let l = 5;
// var perimeter = 2 * (p + l);
// console.log(perimeter);

// <--> Diameter, Circumference, & Area of a circle <-->
// let phi = 3.14;
// let d = 5; // d = diameter
// let circumference = phi * d;
// console.log(circumference);

// let r = 5; // d = diameter
// let d = r * 2;
// console.log(d);

// let phi = 3.14;
// let r = 5;
// let area = phi * r * r;
// console.log(area);

// <--> Mencari sudut segitiga <-->
// let a = 45;
// let b = 60;
// let c = a + b;
// console.log(c);

const luas = (panjang, lebar) => {
  return panjang * lebar;
};

const keliling = (panjang, lebar) => {
  return 2 * (panjang + lebar);
};

const kelilingLingkaran = (phi = 3.14, diameter) => {
  return phi * diameter;
};

const diameter = (r) => {
  return r * 2;
};

const luasLingkaran = (phi = 3.14, r) => {
  return phi * r * r;
};

const third = (a, b) => {
  return a + b;
};

// <--> Mencari perbedaan tanggal pada hari <-->
let days = 400;
var daysLeft;
let year = Math.floor(days / 365);
var daysLeft = days % 365;

let month = Math.floor(daysLeft / 30);
var daysLeft = daysLeft % 30;

console.log(
  `Dalam ${days} hari terdapat ${year} tahun, ${month} bulan, dan ${daysLeft} hari`
);

const kalender = (days) => {
  let daysLeft;
  let year = Math.floor(days / 365);
  daysLeft = days % 365;
  let month = Math.floor(daysLeft / 30);
  daysLeft = daysLeft % 30;

  return `Dalam ${days} hari terdapat ${year} tahun, ${month} bulan, dan ${daysLeft} hari`;
};

//Difference between dates in days
var date1 = new Date("10/27/2022");
var date2 = new Date("11/01/2022");
console.log(date2 - date1);
var diffTimes = Math.abs(date2 - date1);
var diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24));
console.log("diffDays", diffDays);
console.log(`Perbedaan hari ${date1} & ${date2} adalah ${diffDays} hari`);

const datesDiff = (tanggal1, tanggal2) => {
  let date1 = new Date(tanggal1);
  let date2 = new Date(tanggal2);

  let diffTimes = Math.abs(date2 - date1);
  let diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24));

  return diffDays;
};

// const datesDiff = (tanggal1, tanggal2) => {
//   let date1 = new Date(tanggal1);
//   let date2 = new Date(tanggal2);

//   let diffTimes = Math.abs(date2 - date1);
//   let diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24));

//   return `datesDiff => Perbedaan hari ${date1} & ${date2} adalah ${diffDays} hari`;
// };
// console.log(datesDiff("10/27/2022", "11/01/2022"));

module.exports = {
  luas,
  keliling,
  kelilingLingkaran,
  diameter,
  luasLingkaran,
  third,
  kalender,
  datesDiff,
};
