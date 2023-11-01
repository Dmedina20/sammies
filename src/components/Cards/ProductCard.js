import React from "react";
import "../../App.css";

function Card({ flavor, ingredients, price, image, containsNuts }) {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="icecream" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{flavor}</h2>
          <p>{ingredients}</p>
          <p className="text-2xl ">${price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-accent">Buy Now</button>
          </div>
          {containsNuts && (
            <div className="card-actions justify-end">
              <div className="badge badge-warning badge-outline">
                Contains Nuts
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
