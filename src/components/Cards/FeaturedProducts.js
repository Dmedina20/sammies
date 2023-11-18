import "../../App.css";
import Card from "./ProductCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../../app/actions/cartActions";

function Products() {
  const dispatch = useDispatch();

  const cartItemsList = useSelector((state) => state.cartItemsList);

  const { loading, error, cartItems } = cartItemsList;

  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);

  const [itemsToShow, setItemsToShow] = useState(4);
  const handleShowMore = () => {
    setItemsToShow((prevItems) => prevItems + 10);
  };
  const handleShowLess = () => {
    setItemsToShow(4);
  };
  return (
    <>
      <div className="Featured-Product-Header overflow-hidden ">
        <h3 className="text-center mb-8 text-4xl font-bold ">
          <span className="underline-word">Featured Products</span>
        </h3>
      </div>
      <div className=" overflow-x-hidden py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 lg:gap-6 justify-center">
          {cartItems &&
            cartItems.slice(0, itemsToShow).map((item) => (
              <div className="w-full max-w-md mx-auto">
                <Card item={item} />
              </div>
            ))}
        </div>
      </div>
      <div className="items-center text-center pb-4">
        {cartItems && itemsToShow < cartItems.length ? (
          <>
            <button className="btn btn-secondary" onClick={handleShowMore}>
              More Flavors
            </button>
            {itemsToShow > 4 && (
              <button
                className="btn btn-secondary btn-outline"
                onClick={handleShowLess}
              >
                Show Less
              </button>
            )}
          </>
        ) : (
          <button
            className="btn btn-secondary btn-outline"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
}

export default Products;
