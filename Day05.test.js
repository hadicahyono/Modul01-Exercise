const {
  withSort,
  withoutSort,
  join,
  split,
  tambah,
  unique,
  removeOdd,
} = require("./Day05");

const numbers = [3, 2, 5, 4, 1, 6, 9, 8];
const words = ["me", "ji", "ku", "hi", "bi", "ni", "u"];
const wordTest = "Hello world";
const num1 = [1, 2, 3, 4];
const num2 = [2, 3, 4];
const nums = [1, 2, 3, 4, 5, 6, 7];

test("Test withSort function", () => {
  expect(withSort(numbers)).toBe(`1, 9, 4.75`);
});

test("Test withouSort function", () => {
  expect(withoutSort(numbers)).toBe(`1, 9, 4.75`);
});

test("Test join function", () => {
  expect(join(words, ", ")).toBe("me, ji, ku, hi, bi, ni, and u");
});

test("Test split function", () => {
  expect(split(wordTest, "l")).toEqual(["He", "", "o wor", "d"]);
});

test("Test tambah function", () => {
  expect(tambah(num1, num2)).toEqual([3, 5, 7, 4]);
});

test("Test unique function", () => {
  expect(unique("pen")).toEqual([
    "pen",
    "ruler",
    "laptop",
    "mouse",
    "keyboard",
    "water",
  ]);
});

test("Test removeOdd function", () => {
  expect(removeOdd(nums)).toEqual([2, 4, 6]);
});
