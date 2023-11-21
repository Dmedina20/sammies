import "../../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import CartItem from "../Cards/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../../app/actions/CartActions";
import peeker from "../../images/anyaPeeker.png";

export default function Nav() {
  const dispatch = useDispatch();
  const cartItemsList = useSelector((state) => state.cartItemsList);
  const { cartItems } = cartItemsList;
  const [theme, setTheme] = useState("customLight");
  const cartItemsCount = cartItems.length;
  const groupCartItems = () => {
    const groupedItems = {};
    cartItems.forEach((item) => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].qtyInCart += item.qtyInCart;
      } else {
        groupedItems[item.id] = { ...item };
      }
    });
    return Object.values(groupedItems);
  };

  const toggleTheme = () => {
    setTheme(theme === "customDark" ? "customLight" : "customDark");
  };

  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch, cartItems]);
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.qtyInCart,
      0
    );
  };

  return (
    <div className="navbar bg-base-100 bg-base-100">
      <div className="navbar-start">
        {/* Dropdown Menu */}
        <div className="drawer z-40">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost btn-circle drawer-button z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Dropdown Menu End */}
      </div>
      {/* Logo Center */}
      <div className="navbar-center">
        <Link to="/" className=" normal-case text-xl">
          <img className="w-20 h-20" src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Logo Center End */}
      <div className="navbar-end">
        {/* Light/Dark Toggle Button */}
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          <input onClick={toggleTheme} type="checkbox" />
          <div className="swap-on">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
          <div className="swap-off">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </label>
        {/* Light/Dark Toggle Button End */}
        {/* Cart Button */}
        <div className="drawer drawer-end lg:w-auto w-[60px] z-40 ">
          <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer2"
              className="btn btn-ghost btn-circle drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-3 lg:right-0  badge badge-sm badge-accent">
                  {cartItemsCount}
                </span>
              )}
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="p-4 lg:w-90 min-h-screen bg-base-100 text-base-content no-scrollbar ">
              <div className="mt-1">
                <div className=" ">
                  {cartItems.length === 0 ? (
                    <>
                      <div className="mt-3 items-center justify-center grid grid-cols-1 mx-auto">
                        <h1 className="font-bold text-center text-lg">
                          CART IS EMPTY!
                        </h1>
                        <img
                          className=" mt-10 mx-auto lg:h-[150px] lg:w-[200px] h-[130px] w-[150px] "
                          src={peeker}
                          alt="peeker"
                        />
                        <p className=" font-xs mt-3 text-base lg:font-medium text-center">
                          Sammy is concerned :(
                        </p>
                        <p className=" font-xs lg:font-medium text-base text-center">
                          Please purchase some icecream
                        </p>
                        <p className="font-xs lg:font-medium text-base text-center">
                          to make her feel better!
                        </p>
                        <Link className="mx-auto " to="/products">
                          <button className="btn mt-4 btn-wide btn-accent">
                            Buy Icecream!
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="items-center justify-center grid grid-cols-1 mx-auto">
                      <h1 className="text-center font-bold pb-10">Cart</h1>
                      <ul className="-my-6 divide-y divide-gray-200">
                        {groupCartItems().map((groupedItem) => (
                          <CartItem item={groupedItem} key={groupedItem.id} />
                        ))}
                        {/* Total Section */}
                        <div className="text-center justify-center">
                          <p className="mt-6">
                            Total:{" "}
                            <span className="font-bold">
                              ${calculateTotal().toFixed(2)}
                            </span>
                          </p>
                          <button className="btn mt-4 btn-wide btn-accent ">
                            Checkout
                          </button>
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart Button End */}
    </div>
  );
}
