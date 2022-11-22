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
    temp.push(callback(arr[i], i));
  }
  return temp;
};

const exponent = (value, i) => {
  // return (value **= 2);
  return `${i + 1}. ${value}`;
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
    // let isFilter = callback(arr[i]);
    if (callback(arr[i])) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

const genap = (value, i) => {
  return value % 2 == 1;
  // return ` ${i + 1}. ${value}`;
};

const numFilter = [5, 6, 7, 8];
console.log(modFilter(numFilter, genap));

// let filtered = numFilter.filter((v, i) => {
//   if (v % 2 == 0) {
//     return `a. ${v}`;
//   }
// });

// console.log(filtered);

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

const x = [1, "b", 3, "d", 5, "f", 7, "h", 9];

console.log(modIndexOf(x, findPos));
