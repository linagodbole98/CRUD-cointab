const express = require("express");
const bodyParser = require("body-parser");
const  mongoose = require("mongoose");
const cors = require("cors");
const UserRoute = require("./routes/users")


 app= express();
port = 3001

app.use(bodyParser.json())


app.use(cors());

app.use("/", UserRoute)
app.get("/", (req, res)=> res.send("hello from express"))
app.all("*", (req,res)=>res.send("that route does not exist"))
app.listen(process.env.PORT || port, function () {
    console.log("Express app running on port " + (process.env.PORT || port));
  }); 