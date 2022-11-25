const cekTanggal = (tanggal) => {
  let newDate = new Date(tanggal);
  let day = newDate.getDay();
  //   const day = newDate.getDay();
  if (day == 5 || day == 6) {
    return `Weekend`;
  } else {
    return `Not yet`;
  }
};

// console.log(cekTanggal("12/3/2022"));
