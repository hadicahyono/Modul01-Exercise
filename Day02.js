// //Difference between dates in days
// var date1 = new Date("10/27/2022");
// var date2 = new Date("11/01/2022");
// console.log(date2 - date1);
// var diffTimes = Math.abs(date2 - date1);
// var diffDays = Math.ceil(diffTimes / (1000 * 60 * 60 * 24));
// console.log(diffTimes);
// console.log(`Perbedaan hari ${date1} & ${date2} adalah ${diffDays} hari`);

// let celcius = 23;
// let fahrenheit = (celcius * 9) / 5 + 32;
// console.log(`${celcius} derajat celcius = ${fahrenheit} fahrenheit`);
// let number = 17;
// if (number % 2 == 0) {
//   console.log(`${number} merupakan angka GENAP`);
// } else {
//   console.log(`${number} merupakan angka GANJIL`);
// }

// let number = 9;
// if (number == 2 || number == 3 || number == 5 || number == 7) {
//   console.log(`${number} merupakan bilangan prima`);
// } else if (number % 2 == 1 && number % 3 == 1) {
//   console.log(`${number} merupakan bilangan prima`);
// } else {
//   console.log(`${number} bukan bilangan prima`);
// }

// let numbers = 3;
// let num = 0;
// for (i = 1; i <= numbers; i++) {
//   num += i;
// }
// console.log(`Penjumlahan dari ${numbers} adalah ${num}`);

// let n = 10;
// let factorial = 1;
// for (i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// let number = 8;
// let num1 = 0,
//   num2 = 1,
//   num3;
// for (let i = 1; i <= number; i++) {
//   console.log(num1);
//   num3 = num1 + num2;
//   num1 = num2;
//   num2 = num3;
// }

const toFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const ganjilGenap = (angka) => {
  if (angka % 2 == 0) {
    return `Genap`;
  } else {
    return `Ganjil`;
  }
};

const prima = (angka) => {
  if (angka == 2 || angka == 3 || angka == 5 || angka == 7) {
    return "Prima";
  } else if (number % 2 == 1 && number % 3 == 1) {
    return "Prima";
  } else {
    return "Bukan prima";
  }
};

const loopAdd = (num) => {
  let temp = 0;
  for (i = 1; i <= num; i++) {
    temp += i;
  }
  return temp;
};

const factorial = (n) => {
  let temp = 1;
  for (i = 1; i <= n; i++) {
    temp *= i;
  }
  return temp;
};

const fibo = (number) => {
  let num1 = 0;
  let num2 = 1;
  let num3;
  for (let i = 1; i <= number; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  return num1;
};

module.exports = {
  toFahrenheit,
  ganjilGenap,
  prima,
  loopAdd,
  factorial,
  fibo,
};
