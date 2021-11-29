// console.log("welcome to fiori oncloud");

var express = require('express');
var app = express();

// app.get("/", (req,res) => {
//     res.send("wlecome to fiori cloud")
// });

// app.get("/home", (req, res) => {
//     res.send("<label>What's your name?</label><input><br><button>click me</button>")
// });

// this.aVendors = [
//     {
//         "id" : 46080413,
//         "Employee Name" : "yaswanth",
//         "Education" : "MSc",
//         "City": "Kadiri",
//         "Pin Code": 515591
//     }
// ];

// app.get("/vendors",(req,res)=>{
//     res.json(this.aVendors);
// })

// app.get("/index.html",(req,res) => {
//     res.sendFile(__dirname+"/webapp/index.html")
// })

app.use("/",express.static("webapp/"));

console.log("your server started on http://localhost:3000");

const portno = process.env.PORT || 3000;

app.listen(portno);