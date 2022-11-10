class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = Math.floor(
      (new Date() - new Date(age)) / (1000 * 60 * 60 * 24 * 365)
    );
    this.score = score;
  }
}

const db = [
  new Student("Upin", "upin@mail.com", "1999-07-8", 85),
  new Student("Ipin", "ipin@mail.com", "1999-07-8", 83),
  new Student("Mail", "mail@mail.com", "1992-09-09", 80),
  new Student("Jarj", "jarj@mail.com", "1999-03-22", 82),
];

// const { name, email, age, score } = Student;

const sortedScore = db.sort((a, b) => {
  return a.score - b.score;
});

let avgScore = db.reduce((total, next) => total + next.score, 0) / db.length;

console.log(
  `Score\nHighest: ${sortedScore[sortedScore.length - 1].score}\nLowest: ${
    sortedScore[0].score
  }\nAverage: ${avgScore}`
);
const sortedAge = db.sort((a, b) => {
  return a.age - b.age;
});

let avgAge = db.reduce((total, next) => total + next.age, 0) / db.length;

console.log(
  `Age\nHighest: ${sortedAge[sortedAge.length - 1].age}\nLowest: ${
    sortedAge[0].age
  }\nAverage: ${avgAge}`
);

// <-----------------------> //
let carts = [];
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction extends Product {
  constructor(name, price, total, qty) {
    super(name, price);
    this.total = total;
    this.qty = qty;
  }
}
