const {
  luas,
  keliling,
  kelilingLingkaran,
  diameter,
  luasLingkaran,
  third,
  kalender,
  datesDiff,
} = require("./Day01.js");

test("Test luas function", () => {
  expect(luas(4, 5)).toBe(20);
});

test("Test keliling function", () => {
  expect(keliling(4, 5)).toBe(18);
});

test("Test keliling lingkaran function", () => {
  expect(kelilingLingkaran(3.14, 25)).toBe(78.5);
});

test("Test diameter function", () => {
  expect(diameter(5)).toBe(10);
});

test("Test luasLingkaran function", () => {
  expect(luasLingkaran(3.14, 5)).toBe(78.5);
});

test("Test third function", () => {
  expect(third(45, 60)).toBe(105);
});

test("Test kalender function", () => {
  expect(kalender(400)).toEqual(
    `Dalam 400 hari terdapat 1 tahun, 1 bulan, dan 5 hari`
  );
});

test("Test datesDiff function", () => {
  expect(datesDiff("10/27/2022", "11/01/2022")).toBe(5);
});
