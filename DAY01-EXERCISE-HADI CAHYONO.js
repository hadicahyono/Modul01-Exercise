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
