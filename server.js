const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");

const app = express();
const db = require("./config/keys").mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect to db

mongoose
  .connect(
    "mongodb+srv://wbadmin:815mjdbn@cluster0-x3q7y.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

//User Routes
app.use("/api/users", users);

app.get("/", (req, res) => res.send("Hello World!"));
// const port = process.env.port || 3030;
app.listen(9000, () => console.log(`app listenting at port 9000 `));
