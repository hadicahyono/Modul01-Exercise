const {
  toFahrenheit,
  ganjilGenap,
  prima,
  loopAdd,
  factorial,
  fibo,
} = require("./Day02");

test("Test toFahrenheit function", () => {
  expect(toFahrenheit(25)).toBe(77);
});

test("Test ganjilGenap function", () => {
  expect(ganjilGenap(2)).toBe("Genap");
});

test("Test prima function", () => {
  expect(prima(7)).toBe("Prima");
});

test("Test loopAdd function", () => {
  expect(loopAdd(4)).toBe(10);
});

test("Test factorial function", () => {
  expect(factorial(3)).toBe(6);
});

test("Test fibo function", () => {
  expect(fibo(7)).toBe(13);
});
