let testChar = "AA";

const chars = (char) => {
  for (var i = 0, j = 0; i < char.length; i++) {
    j = char[i].charCodeAt() - 64 + j * 26;
  }
  return j;
};

// console.log(chars(testChar));

let numbers = [1, 1, 2, 3, 3, 4, 5];
const unique = numbers.filter((number) => {
  return numbers.indexOf(number) === numbers.lastIndexOf(number);
});

// console.log(unique);

const anagram = (s, t) => {
  const newS = s.split("");
  const newT = t.split("");

  const sortS = newS.sort().join("");
  const sortT = newT.sort().join("");

  const lowS = sortS.toLowerCase();
  const lowT = sortT.toLowerCase();
  return lowS === lowT;
};

const s = "rat";
const t = "car";
// console.log(anagram(s, t));

const fibo = (n) => {
  let num1 = 0;
  let num2 = 1;
  let num3;
  for (let i = 1; i <= n; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  }
  return num2;
};

console.log(fibo(5));
