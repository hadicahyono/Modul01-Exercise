let testChar = "DC";

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
  return sortS === sortT;
};

const s = "anagram";
const t = "nagaram";
console.log(anagram(s, t));
