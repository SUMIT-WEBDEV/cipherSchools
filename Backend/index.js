const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("mongoDB connection established successfully!!")
);

const userRoute = require("./Routes/auth");

app.use("/auth", userRoute);

app.listen(port, () => {
  console.log(`CipherSchools listening at http://localhost:${port}`);
});
