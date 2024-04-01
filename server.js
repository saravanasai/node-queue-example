const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = 3000;


//export function taking more time & 
const reportExporter = (email, from, to) => {
  for (let index = from; index <= to; index++) {
    for (let i = from; i <= to; i ++) {
      for (let j = from; j <= to; j++) {
      }
    }
  }
  console.log("Email sent to maid ID:"+email);
  return 0;
};

app.post("/generate-report", async (req, res) => {
  let { email, from, to } = req.body;

  console.log("requets data:",{ email, from, to });
  
  let response = reportExporter(email, from, to);
  
  console.log("repsonse:" + response);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

































// let queue = [];

// queue.push({ email, from, to });

// setInterval(()=>{

//     if(queue[0]) {
//         let res = reportExporter(queue[0].email,queue[0].from,queue[0].to)
//         console.log("repsonse:" + res);
//         queue.shift();
//     }
  
// },5000);