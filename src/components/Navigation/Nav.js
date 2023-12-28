import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import CartItem from "../Cards/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../../app/actions/CartActions";
import peeker from "../../images/anyaPeeker.png";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../../app/features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../app/firebase/config";

export default function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemsList = useSelector((state) => state.cartItemsList);
  const { cartItems } = cartItemsList;
  const [theme, setTheme] = useState("customLight");
  const cartItemsCount = cartItems.length;
  const [userLoaded, setUserLoaded] = useState(false);
  const user = useSelector((state) => state.user.user);

  const handleItemClick = () => {
    // Close the drawer by unchecking the checkbox
    const checkbox = document.getElementById("main-drawer");
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  useEffect(() => {
    const updatedState = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({ user }));
      } else {
        dispatch(logout());
      }
      setUserLoaded(true);
    });

    return () => updatedState();
  }, [dispatch]);

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
    signOut(auth);
  };

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
    setTheme((prevTheme) =>
      prevTheme === "customDark" ? "customLight" : "customDark"
    );
  };

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
          <input id="main-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="main-drawer"
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
            <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content text-center ">
              <li className="sammies">
                <Link to="/" onClick={handleItemClick}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>{" "}
                  Home
                </Link>
              </li>
              <li className="sammies">
                <Link to="/products" onClick={handleItemClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>{" "}
                  Products
                </Link>
              </li>

              <li className="sammies">
                <Link to="/contact" onClick={handleItemClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    />
                  </svg>{" "}
                  Contact
                </Link>
              </li>
              <li className="sammies">
                <Link to="/about-us" onClick={handleItemClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  About
                </Link>
              </li>

              {!user && userLoaded && (
                <li className="sammies">
                  <Link to="/login" onClick={handleItemClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>{" "}
                    Login
                  </Link>
                </li>
              )}

              {user && userLoaded && (
                <li className="sammies">
                  <Link
                    onClick={() => {
                      handleItemClick();
                      handleLogout();
                    }}
                    to="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>{" "}
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* Dropdown Menu End */}
      </div>
      {/* Logo Center */}
      <div className="navbar-center">
        <Link to="/">
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
          <div className="swap-off">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </label>
        {/* Light/Dark Toggle Button End */}
        {/* Cart Button */}
        <label
          htmlFor="my-drawer2"
          className="btn btn-ghost btn-circle drawer-button "
        >
          {cartItemsCount > 0 && (
            <span className="absolute overflow-hidden top-6 right-14 badge badge-sm badge-accent">
              {cartItemsCount}
            </span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {cartItemsCount > 0 && (
              <span className="absolute overflow-hidden top-6 right-14 badge badge-sm badge-accent">
                {cartItemsCount}
              </span>
            )}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </label>
        <div className="drawer drawer-end w-[0]  z-40 ">
          <input id="my-drawer2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content"></div>
          <div className="drawer-side disable-drag">
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                              />
                            </svg>
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
        {/* User Avatar */}
        {!user && userLoaded && (
          <div className="avatar overflow-hidden placeholder btn btn-ghost btn-circle">
            <div className="bg-transparent rounded-full  w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 bg-transparent "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        )}
        {user && userLoaded && (
          <div className="avatar overflow-hidden placeholder btn btn-ghost btn-circle">
            <Link to={`/profile/${user.uid}`}>
              {user.photoURL ? (
                // If user has a photoURL, display the image
                <div className="rounded-full  w-8 h-8">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="rounded-full w-8 h-8"
                  />
                </div>
              ) : (
                // If user doesn't have a photoURL, display the avatar
                <div className="bg-primary rounded-full  w-8 h-8">
                  <div className=" text-black items-center text-center justify-center flex  text-xl">
                    {user.displayName
                      ? user.displayName.charAt(0).toUpperCase()
                      : ""}
                  </div>
                </div>
              )}
            </Link>
          </div>
        )}
        {/* User Avatar End */}
      </div>
      {/* Cart Button End */}
    </div>
  );
}
