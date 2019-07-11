const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");

const app = express();
const db = require("./config/keys").mongoURI;

// connect to db
mongoose
  .connect(
    "mongodb+srv://wbadmin:815mjdbn@cluster0-x3q7y.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

//User Routes
app.use("/api/users", users);

app.get("/", (req, res) => res.send("Hello World!"));
const port = process.env.port || 5000;
app.listen(port, () => console.log(`app listenting at ${port}`));
