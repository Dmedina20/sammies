import "../../App.css";

function Card({ flavor, ingredients, price, image }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="icecream" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{flavor}</h2>
          <p>{ingredients}</p>
          <div className="card-actions justify-end">
            <h1 className="text-xl pr-5 pt-2">${price}</h1>

            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
