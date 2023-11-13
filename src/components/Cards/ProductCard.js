import React from "react";
import "../../App.css";

function Card({ flavor, ingredients, price, image, containsNuts }) {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img loading="lazy" src={image} alt="icecream" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-left">{flavor}</h2>
          {containsNuts && (
            <div className="badge badge-outline">Contains Nuts</div>
          )}
          <p className="text-2xl ">${price}</p>
          <p className="text-xl">Ingredients:</p>
          <p>{ingredients}</p>

          <div className="card-actions justify-left">
            <button className="btn btn-secondary btn-outline">
              Add to Cart
            </button>
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
