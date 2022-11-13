import React from "react";
import { Link } from "react-router-dom";

const Card = ({ seafood }) => {
  console.log(seafood);
  return (
    <div className="card p-3 shadow" style={{ width: "15rem" }}>
      <img src={seafood.strMealThumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{seafood.strMeal}</h5>
      </div>
      <Link to={`/seafood/${seafood.idMeal}`}>
        <button className="btn btn-primary btn-sm">
          <i class="fa-solid fa-eye"></i>
        </button>
      </Link>
    </div>
  );
};

export default Card;
