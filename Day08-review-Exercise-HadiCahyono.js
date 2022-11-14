const data = [
  {
    name: "Avanza",
    brand: "Toyota",
    machine: "DOHC",
    cc: 1500,
  },
  {
    name: "Supra",
    brand: "Toyota",
    machine: "V8",
    cc: 5000,
  },
  {
    name: "Ertiga",
    brand: "Suzuki",
    machine: "DOHC",
    cc: 1550,
  },
];

const printData = (cb) => {
  if (!cb) {
    data.map((v, i) => {
      console.log(
        `${i + 1}. ${v.brand} ${v.name} ${v.machine} ${v.cc.toLocaleString(
          "id"
        )}`
      );
    });
  }
};

const find = (input) => {
  const result = data.filter((v, i) => {
    if (v.name === input) {
      console.log(
        `${i + 1}. ${v.brand} ${v.name} ${v.machine} ${v.cc.toLocaleString(
          "id"
        )}`
      );
    }
  });
  return result;
};

// printData();
printData(find("Ertiga"));
