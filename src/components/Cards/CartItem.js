import React from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import {
  deleteItemFromCart,
  updateCartQty,
} from "../../app/actions/CartActions";

const CartItem = ({ item }) => {
  const [stateQty, setStateQty] = React.useState(item.qtyInCart);
  const dispatch = useDispatch();

  const handleCartDelete = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId));
  };

  const handleCartQty = (itemId, qty) => {
    dispatch(updateCartQty(itemId, qty));
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
            <p className="lg:ml-4">${item.price}</p>
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
              value={stateQty}
              onChange={(e) => {
                setStateQty((prev) => Number(e.target.value));
                console.log(stateQty);
                handleCartQty(item.id, stateQty);
              }}
            />
          </p>

          <div className="flex float-right">
            <button
              type="button"
              className="font-medium text-primary hover:text-accent"
              onClick={(e) => handleCartDelete(item.id, e)}
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
