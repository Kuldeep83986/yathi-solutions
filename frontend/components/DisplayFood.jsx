import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DisplayFood = () => {
  const [foods, setFoods] = useState([]);

  const getFood = async () => {
    let foodData = await axios.get("http://localhost:8080/food/get-food");
    setFoods(foodData.data);
    console.log(foodData);
  };

  useEffect(() => {
    getFood();
  }, []);
  return (
    <div>
      {foods.map((el, i) => (
        <div key={i} style={{width:"300px", padding:"10px", border:"1px solid black"}}>
          <h1>Name: {el.name}</h1>
          <p>Category: {el.category}</p>
          <p>Price:  {el.price}</p>
          <p>Rating: {el.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayFood;
