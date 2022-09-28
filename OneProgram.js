let keyName = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = [
        "Abigail",
        "Alexandra",
        "Alison",
        "Amanda",
        "Angela",
        "Bella",
        "Carol",
        "Caroline",
        "Carolyn",
        "Deirdre",
        "Diana",
        "Elizabeth",
        "Ella",
        "Faith",
        "Olivia",
        "Penelope",
      ];
      const resultSearch = [];
      for (let i = 0; i <= name.length - 1; i++) {
        callback(name[i], resultSearch);
      }
      if (resultSearch.length == 0) return reject(new Error("Data Not Found!"));
      return resolve(resultSearch);
    }, 3000);
  });
};

const keySearch = (list, restArr) => {
  if (list.toLowerCase().indexOf(input.toLowerCase()) > -1) {
    restArr.push(list);
    return;
  }
};

async function start(key, cb) {
  if (!key) return console.log("Please Input Name");
  if (typeof key !== "string") return console.log("Invalid Input Name!");
  if (typeof cb !== "function") return console.log("Invalid Function!");
  try {
    const result = await keyName(cb);
    console.log(result);
  } catch (Error) {
    console.log("ERROR!! Data Not Found");
  }
}

const input = "an";
start(input, keySearch);
