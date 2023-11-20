import React from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../app/actions/CartActions";

function Card({ item }) {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addProductToCart(item));
  };
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img loading="lazy" src={item.image} alt="icecream" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-left">{item.name}</h2>
          {item.containsNuts && (
            <div className="badge badge-outline">Contains Nuts</div>
          )}
          <p className="text-2xl ">${item.price}</p>
          <p className="text-xl">Ingredients:</p>
          <p>{item.ingredients}</p>

          <div className="card-actions justify-left">
            <button
              onClick={addToCartHandler}
              className="btn btn-primary hover:btn-accent btn-outline"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
