import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seafood, setSeafood] = useState([]);
  const getSingleSeafood = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data.meals);
    setSeafood(data.meals[0]);
  };
  useEffect(() => {
    getSingleSeafood();
  }, []);
  return (
    <div className="container">
      <button
        onClick={() => navigate("/")}
        className="btn btn-outline-danger btn-sm"
      >
        <i class="fa-sharp fa-solid fa-caret-left"></i>
      </button>
      <div className="">
        <img
          src={seafood.strMealThumb}
          width="200px"
          height="200px"
          alt=""
          className="rounded mt-3"
        />
        <h2 className="my-3 text-primary">{seafood.strMeal}</h2>
        <h3 className="">
          {seafood.strCategory} ({seafood.strArea})
        </h3>
        <h3>How to cook?</h3>
        <p className="text-secondary">{seafood.strInstructions}</p>
        <a
          href={seafood.strYoutube}
          target="__blank"
          className="btn btn-danger"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Details;
