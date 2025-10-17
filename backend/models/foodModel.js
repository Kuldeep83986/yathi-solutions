const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name:"String",
    category:"String",
    price:Number,
    rating:Number
})

const Food = mongoose.model("Food", foodSchema); 

module.exports = Food;