let addAccount = (inputname, inputemail, inputpass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = {};
      data = { username: inputname, email: inputemail, password: inputpass };
      let atps = inputemail.indexOf("@");
      let dots = inputemail.lastIndexOf(".");
      if (atps < 1 || dots < atps + 2 || dots + 2 >= inputemail.length)
        return reject(new Error("Error Input Data Email!"));
      return resolve(data);
    }, 3000);
  });
};

async function exeProgm(data1, data2, data3, cb) {
  try {
    if (!data1 || !data2 || !data3) throw new Error("Please Input Data!");
    let result = await cb(data1, data2, data3);
    return `Data berhasil dibuat!
Berikut datanya : 

Username : ${result.username}
Email : ${result.email}
Password : ${result.password}`;
  } catch (error) {
    return error.message;
  }
}

const doAsync = async () => {
  console.log(
    await exeProgm(inputUsername, inputEmail, inputpassword, addAccount)
  );
};
const prompt = require("prompt-sync")();
const inputUsername = prompt("Masukan Username : ");
const inputEmail = prompt("Masukan Email : ");
const inputpassword = prompt("Masukkan Password : ");
doAsync();
