const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE;
const DB = process.env.MONGODB_URI;

console.log(DB, "db")

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("No Connection", err);
  });

  