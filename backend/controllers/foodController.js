const Food = require("../models/foodModel");

const addFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json({ message: "food added successfully..", food });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong..", err });
  }
};

const getFood = async (req, res) => {
    try{
        const food = await Food.find();
        res.status(200).json(food);

    }catch(err){
        res.status(500).json({ message: "Something went wrong..", err });
    }
};

module.exports = { addFood, getFood };
