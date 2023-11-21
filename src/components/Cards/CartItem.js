import React from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import {
  deleteItemFromCart,
  updateCartQty,
} from "../../app/actions/CartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleCartDelete = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Check if the quantity is greater than 1 before decreasing
    if (item.qtyInCart > 1) {
      // Decrease the quantity by 1
      dispatch(updateCartQty(item.id, item.qtyInCart - 1));
    } else {
      // If the quantity is 1 or less, remove the item from the cart
      dispatch(deleteItemFromCart(item.id));
    }
  };

  const handleCartQty = (newQty) => {
    dispatch(updateCartQty(item.id, newQty));
  };

  // Calculate the total price for the item based on the quantity
  const calculateItemTotal = () => {
    return (item.price * item.qtyInCart).toFixed(2);
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className=" w-full h-full object-cover object-center "
        />
      </div>

      <div className="ml-4 lg:flex flex-1 flex-col">
        <div>
          <div className="lg:flex justify-between font-bold ">
            <h3>
              <a href={item.name}>{item.name}</a>
            </h3>
            <p className="lg:ml-4">${calculateItemTotal()}</p>
          </div>
        </div>
        <div className="lg:flex lg:flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            Qty{" "}
            <input
              className="bg-base-100"
              disabled
              type="number"
              min="1"
              value={item.qtyInCart}
              onChange={(e) => {
                const newQty = Number(e.target.value);
                handleCartQty(newQty);
              }}
            />
          </p>

          <div className="flex float-right">
            <button
              type="button"
              className="font-medium text-primary hover:text-accent"
              onClick={(e) => handleCartDelete(e)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
