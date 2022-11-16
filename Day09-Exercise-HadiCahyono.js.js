/*
TITLE: function ganjilGenap
INPUT:
    1. function menerima satu parameter berupa angka -> (number)
PROCESS:
    1. if parameter di-modulo 2 hasilnya sama dengan 0 -> number % 2 == 0
    2. return "genap"
    3. else 
    4. return "ganjil"
OUTPUT:
    1. string ganjil atau string genap 
FINAL: 
    function ganjilGenap(number) {
    process 1
    process 2
    process 3
    process 4
    OUTPUT
}
*/

const ganjilGenap = (number) => {
  //   return number % 2 == 0 ? "Genap" : "Ganjil";
  if (number % 2 == 0) {
    return "genap";
  } else {
    return "ganjil";
  }
};

console.log(ganjilGenap(7));

/*
TITLE: function reverse
INPUT: function reverse memiliki parameter, diisi sebuah variabel yang berisi String
PROCESS:
    1. split variable '' -> String yang dijadikan argument akan dicacah menjadi tiap String dan dimasukkan ke array
    2. reverse variable -> String yang telah tercacah akan di-reverse
    3. join variable -> String yang telah di-reverse akan digabungkan kembali menjadi String utuh.
OUTPUT:
    -> variable awal ter-reverse
FINAL:
    function reverse(variable) {
        process 1
        process 2
        process 3
        OUTPUT
    }
*/

let words = "belum coba";

const reverse = (string) => {
  let split = string.split("");
  let rev = split.reverse("");
  return rev.join("");
};

console.log(reverse(words));

/*
TITLE: function modMap
INPUT: parameter containing init array and a callback
PROCESS: 
  1. create a variable of an empty array (called temp)
  2. for loop start index 0; index < init array length; index++
  3. temp push anonymous function callback (init array(itiration))
  4. return temp
  5. create callback function outiside function modMap
  6. callback named "exponent", have one parameter called number
  7. return number exponent equal 2
OUTPUT:
  1. an array of modified init array
*/

const modMap = (arr, callback) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(callback(arr[i]));
  }
  return temp;
};

const exponent = (number) => {
  return (number **= 2);
};

const num = [2, 4, 6];
console.log(modMap(num, exponent));

/* 
TITLE: modFilter function
INPUT: have two parameter, an array and a callback
PROCESS:
  1. create a new variable called "temp" containing empty array -> 
  2. for index start 0; index < array length; index++
  3. in for loop, create a new variable to check condition -> isFilter = callback and parameter
  4. if isFilter is true, push arr[i] to temp (else exit loop)
  5. after exiting the loop, return temp
OUTPUT: an array containing filtered items
*/

const modFilter = (arr, callback) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let isFilter = callback(arr[i]);
    if (isFilter) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

const genap = (number) => {
  return number % 2 == 0;
};

const numFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(modFilter(numFilter, genap));

/*
TITLE: modIndexOf function
INPUT: have two parameter, an array and a callback
PROCESS:
  1. create a new variable to store index location -> let pos = []
  2. for index start 0; index < array.length; index++
  3. if condition array[i] == callback parameter array [i]
  4. push i to array pos
  5. after exiting the loop, return array pos
  6. create a callback that will return any element that you want -> const cariItem =
OUTPUT: 
*/

const modIndexOf = (arr, callback) => {
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == callback(arr[i])) {
      pos.push(i);
    }
  }
  return pos;
};

const findPos = (item) => {
  const findItem = 9; // mencari Number 9 ada di posisi berapa
  return findItem;
};

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(modIndexOf(x, findPos));
