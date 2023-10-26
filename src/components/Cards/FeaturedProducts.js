import "../../App.css";
import Card from "./ProductCard";
import iceCreamData from "../../flavors.json";
import { useState } from "react";

function Products() {
  const [itemsToShow, setItemsToShow] = useState(4);
  const handleShowMore = () => {
    setItemsToShow((prevItems) => prevItems + 10); // Show 3 more items when the "Show More" button is clicked
  };
  return (
    <>
      <div className=" overflow-x-hidden py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-6 ">
          {iceCreamData.slice(0, itemsToShow).map((iceCream) => (
            <div className="w-full max-w-md mx-auto">
              <Card
                key={iceCream.flavor}
                flavor={iceCream.flavor}
                ingredients={iceCream.ingredients}
                price={iceCream.price}
                image={iceCream.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="items-center text-center pb-4">
        {itemsToShow < iceCreamData.length && (
          <button className="btn btn-accent" onClick={handleShowMore}>
            More Flavors
          </button>
        )}
      </div>
    </>
  );
}

export default Products;
