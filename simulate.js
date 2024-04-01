const axios = require("axios");

let reportDataArray = [];
const simulateUserRequest = async (id) => {
  console.time(id);
  let response = await axios.post("http://localhost:3000/generate-report", {
    email: id + "Fred@lazy.com",
    from: 1,
    to: 1000,
  });

  reportDataArray.push([id, response.data, console.timeEnd(id)]);
};

for (let index = 1; index <= 25; index++) {
  simulateUserRequest(index);
}

console.log("data:"+reportDataArray);
