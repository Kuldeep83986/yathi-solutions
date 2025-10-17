import axios from "axios";
import React, { useState } from "react";

const AddFood = () => {
  const [food, setFood] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
  });

  function handleChange(e) {
    setFood({ ...food, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(food);
    try {
      await axios.post("http://localhost:8080/food/add-food", food);
      setFood({
        name: "",
        category: "",
        price: "",
        rating: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={food.name}
          name="name"
          onChange={handleChange}
          placeholder="Food name.."
        />
        <br />
        <br />
        <input
          type="text"
          value={food.category}
          name="category"
          onChange={handleChange}
          placeholder="category"
        />
        <br />
        <br />
        <input
          type="text"
          value={food.price}
          name="price"
          onChange={handleChange}
          placeholder="price"
        />
        <br />
        <br />
        <input
          type="text"
          value={food.rating}
          name="rating"
          onChange={handleChange}
          placeholder="rating"
        />
        <br />
        <br />
        <button>submit</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default AddFood;
