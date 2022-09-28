async function getAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.map((data, i) => {
    console.log(data.name);
  });
}
getAPI();
