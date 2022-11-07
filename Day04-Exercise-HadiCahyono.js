let height = 5;
let bentuk = "";
let number = 0;

for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= i; j++) {
    number++;
    if (number < 10) {
      bentuk += `0${number} `;
    } else {
      bentuk += `${number} `;
    }
  }
  bentuk += `\n`;
}

console.log(bentuk);

let n = 45;
let num = 0;

for (let i = 0; i < n; i++) {
  num++;
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`${num} FizzBuzz`);
  } else if (num % 3 == 0) {
    console.log(`${num} Fizz`);
  } else if (num % 5 == 0) {
    console.log(`${num} Buzz`);
  }
}

const bmi = (weight, height) => {
  let heightCm = height / 100;
  let rumus = Math.floor(weight / heightCm ** 2);

  if (rumus < 18.5) {
    return `${weight}kg & ${height}cm == ${rumus}: is less weight`;
  } else if (rumus >= 18.5 && rumus <= 24.9) {
    return `${weight}kg & ${height}cm == ${rumus}: ideal`;
  } else if (rumus >= 25.0 && rumus <= 29.9) {
    return `${weight}kg & ${height}cm == ${rumus}: overweight`;
  } else if (rumus >= 30.0 && rumus <= 39.9) {
    return `${weight}kg & ${height}cm == ${rumus}: very overweight`;
  } else if (rumus > 39.9) {
    return `${weight}kg & ${height}cm == ${rumus}: obesity`;
  }
};
console.log(bmi(63, 168));

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const removeGanjil = (numbers) => {
  let genap = [];
  let ganjil = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      genap.push(numbers[i]);
    } else {
      ganjil.push(numbers[i]);
    }
  }
  return `Genap: ${genap}\nGanjil: ${ganjil}`;
};

console.log(removeGanjil(arrayNumbers));

const jadiSplit = (string) => {
  let huruf = "";
  let spasi = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      huruf += string[i];
    } else if (string[i] == " ") {
      spasi.push(huruf);
      huruf = "";
    }
  }
  spasi.push(huruf);
  return spasi;
};

console.log(jadiSplit("bisa gak ya sampai berapa kata"));
