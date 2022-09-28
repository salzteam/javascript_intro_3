let rata = (a, b, c, d) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a >= 0 && b >= 0 && c >= 0 && d >= 0) {
        const nilai = a + b + c + d;
        const hasil = nilai / 4;
        let grade = "";
        if (hasil >= 90) grade = "A";
        else if (hasil >= 80) grade = "B";
        else if (hasil >= 70) grade = "C";
        else if (hasil >= 60) grade = "D";
        else if (hasil <= 59) grade = "E";
        return resolve(`Rata - Rata : ${hasil}
Grade = ${grade}`);
      } else {
        return reject(new Error("Data Tidak Boleh Minus!!!"));
      }
    }, 3000);
  });
};

async function validasi(a, b, c, d, cb) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  )
    return "Invalid Number!";
  try {
    const rest = await cb(a, b, c, d);
    console.log(rest);
  } catch (Error) {
    console.log(Error);
  }
}
validasi(100, 100, 100, 100, rata);
