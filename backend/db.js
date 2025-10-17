const mongoose = require("mongoose");
require("dotenv").config();

const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected...");
  } catch (err) {
    console.log(err, "something went wrong");
  }
};

module.exports = DbConnect;
