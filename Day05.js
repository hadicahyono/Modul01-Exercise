const numbers = [3, 2, 5, 4, 1, 6, 9, 8];

const withSort = (arr) => {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return `${sortedArr[0]}, ${sortedArr[sortedArr.length - 1]}, ${parseFloat(
    sum / arr.length
  )}`;
};

const withoutSort = (arr) => {
  let sum = 0;
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return `${arr[0]}, ${arr[arr.length - 1]}, ${parseFloat(sum / arr.length)}`;
};

console.log(withSort(numbers));
console.log(withoutSort(numbers));

const words = ["me", "ji", "ku", "hi", "bi", "ni", "u"];
const join = (arr, separator) => {
  let res = "";
  for (let i = 0; i < arr.length - 1; i++) {
    res += arr[i];
    res += separator;
  }
  res += `and ${arr[arr.length - 1]}`;
  return res;
};

console.log(join(words, ", "));

const wordTest = "Hello world";
const split = (string, separator) => {
  let huruf = "";
  let temp = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] != separator) {
      huruf += string[i];
    } else if (string[i] == separator) {
      temp.push(huruf);
      huruf = "";
    }
  }
  temp.push(huruf);
  return temp;
};

console.log(split(wordTest, "l"));

const num1 = [1, 2, 3, 4];
const num2 = [2, 3, 4];
const tambah = (arr1, arr2) => {
  let newArr = [];
  let len = 0;
  let diff = Math.abs(arr1.length - arr2.length);

  if (arr1.length > arr2.length) {
    len = arr2.length;
  } else if (arr1.length < arr2.length) {
    len = arr1.length;
  } else {
    len = arr2.length;
  }

  for (let i = 0; i < len; i++) {
    let res;
    res = arr1[i] + arr2[i];
    newArr.push(res);
  }

  if (diff != 0) {
    if (arr1.length > arr2.length) {
      for (let i = len; i < len + diff; i++) {
        newArr.push(arr1[i]);
      }
    } else {
      for (let i = len; i < len + diff; i++) {
        newArr.push(arr2[i]);
      }
    }
  }
  return newArr;
};

console.log(tambah(num1, num2));

const desk = ["pen", "ruler", "laptop", "mouse", "keyboard", "water"];
const unique = (string) => {
  desk.push(string);
  return [...new Set(desk)];
};

console.log(unique("pen"));

const nums = [1, 2, 3, 4, 5, 6, 7];
const removeOdd = (arr) => {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return even;
};
console.log(removeOdd(nums));

module.exports = {
  withSort,
  withoutSort,
  join,
  split,
  tambah,
  unique,
  removeOdd,
};
