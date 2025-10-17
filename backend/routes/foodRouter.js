const express = require("express");
const { addFood, getFood } = require("../controllers/foodController");

const foodRouter = express.Router();

foodRouter.post("/add-food",addFood );
foodRouter.get("/get-food", getFood)

module.exports = foodRouter;