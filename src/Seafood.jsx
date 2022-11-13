import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Seafood = () => {
  const [seafoods, setSeafoods] = useState([]);
  const getSeafoods = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    console.log(data.meals);
    setSeafoods(data.meals);
  };
  useEffect(() => {
    getSeafoods();
  }, []);
  return <div className="container d-flex flex-wrap gap-4 my-5">
    {seafoods.map(seafood => <Card key={seafood.idMeal} seafood={seafood} />)}
  </div>;
};

export default Seafood;
