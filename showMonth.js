const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

function showMonth(result, month) {
  if (!result) {
    return month.map((reff, index) => {
      let list = index + 1 + ". " + reff;
      list.toString();
      console.log(list);
    });
  } else {
    console.log(result);
  }
}

getMonth(showMonth);
