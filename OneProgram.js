function getAPI(key, cb) {
  if (typeof key !== "string") return console.log("Invalid Input Name!");
  if (typeof cb !== "function") return console.log("Invalid Function!");
  let list = [];
  let api = fetch("https://jsonplaceholder.typicode.com/users");
  api
    .then((result) => result.json())
    .then((data) => {
      data.map((data) => {
        list.push(data.name);
      });
      let resultlist = [];
      cb(list, resultlist, key);
    })
    .catch((err) => console.log(err));
}
function callback(list, resultlist, key) {
  list.map((list, i) => {
    if (list.toLowerCase().indexOf(key.toLowerCase()) > -1) {
      resultlist = i + 1 + ". " + list;
      console.log(resultlist);
    }
  });
  console.log("ERROR!!! Data Not Found!");
}
const input = "";
getAPI(input, callback);
