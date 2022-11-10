// 11111111111 //
name1 = { nama: "Son", aliran: "reggae" };
name2 = { nama: "Son", aliran: "reggae" };

const check = (arr1, arr2) => {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
};

console.log(check(name1, name2));

// 222222222 //
const num1 = [{ a: 1, b: 2 }];
const num2 = [{ a: 1, c: 3 }];

const intersection = (arr1, arr2) => {
  const num3 = [...arr1, ...arr2];
};

intersection(num1, num2);

// 333333333 //

const stu = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const dent = [
  { name: "Student 2", email: "student2@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

const join = (arr1, arr2) => {
  const arr3 = [...arr1, ...arr2];
  let res = arr3.reduce((unique, o) => {
    if (!unique.some((obj) => obj.name === o.name && obj.email === o.email)) {
      unique.push(o);
    }
    return unique;
  }, []);
  console.log(res);
};

join(stu, dent);

// 444444444 //
class Name {
  constructor(name, age) {
    this.name = age;
    this.age = name;
  }
}

const db = new Name("David", 21);
console.log(db);

// 555555555 //

const factorial = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(6));
