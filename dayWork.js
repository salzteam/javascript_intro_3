let cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

async function tryCatch(day, cb) {
  try {
    const result = await cb(day);
    console.log(result);
    console.log(`Hari ini hari ${result} merupakan hari kerja`);
  } catch (error) {
    console.log(error.message);
  }
}

/* ! Try - Catch !
 -+ Penggunaan try adalah untuk melanjutkan return nilai dari sebuah Async Promise, penggunaan try bisa memakai
    await sehingga kita bisa membuat program berjalan secara synchronous. Await sendiri berfungsi untuk memberi
    jeda program agar menunggu respon dari sebuah Async Promise. Ketika selesai mendapatkan respon dari Async Promise maka
    program akan dilanjutkan.

 -+ Penggunaan catch adalah untuk menangkap error yang terjadi pada proses Promise.
*/

function thenCatch(input) {
  cekHariKerja(input)
    .then((result) => {
      console.log(`Hari ini hari ${result} merupakan hari kerja`);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
/* ! Then - Catch !
 -+ Penggunaan then digunakan pada saat menggunakan Promise, then sendiri bisa diasumsikan sebagai return nilai resolve yang 
    dimana didapatkan pada saat Promise selesai. Ketika Promise selesai, then akan berfungsi untuk melanjutkan result
    dari sebuah Promise yang dimana hasil result berupa resolve / diterima. Perbedaan try sama then sendiri adalah cara
    mengeksekusi program yang dimana jika try harus menggunakan Async/Await, sedangkan then tidak perlu. Jadi efek yang
    terjadi jika tidak menggunakan Async/Await adalah proses pengeksekusian program kita yang secara Asynchronus yang artinya
    program akan terus berjalan tanpa menunggu response Promise selesai.

 -+ Sedangkan catch adalah kebalikan dari then, fungsi catch sendiri adalah untuk menampung nilai result dari sebuah Promise 
    jika nilainya bersifat reject / ditolak. 
*/

function valid(dayy, cb1, cb2, hk) {
  if (!dayy) return console.log("Please Input day!");
  if (typeof dayy !== "string")
    return console.log("Input harus berupa string!");
  if (typeof cb1 !== "function") return console.log("Invalid param 1 !");
  if (typeof cb2 !== "function") return console.log("Invalid param 2 !");
  if (typeof hk !== "function") return console.log("Invalid param 3 !");
  const days = ["sabtu", "minggu", "senin", "selasa", "rabu", "kamis", "jumat"];
  const day = dayy.toLowerCase();
  let val = false;
  for (let i = 0; i <= days.length; i++) {
    if (days.indexOf(day) > -1) {
      val = true;
    } else {
      val = false;
    }
  }
  if (val == true) {
    cb1(day);
    cb2(day, hk);
  } else {
    console.log("Invalid input day!");
  }
}

const intUser = "Sabtu";
valid(intUser, thenCatch, tryCatch, cekHariKerja);
