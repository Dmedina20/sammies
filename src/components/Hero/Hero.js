import "../../App.css";
import anya from "../../images/anya.png";
import circles from "../../images/circles.svg";
import { Link } from "react-router-dom";
const Bubble = () => <span className="bubble"></span>;
function Hero() {
  return (
    <>
      <div className="hero min-h-screen overflow-x-hidden overflow-y-hidden bg-primary">
        <div className="hero-overlay bg-opacity-0">
          <div className="bubbles w-screen h-screen overflow-hidden">
            {[...Array(15)].map((_, index) => (
              <div key={index}>
                <Bubble />
              </div>
            ))}
          </div>
        </div>
        <img
          src={circles}
          alt="bg-circles"
          className="circles w-screen h-screen hidden lg:block"
        />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <img src={anya} alt="anya" className=" " />
            <h1 className="mb-5 text-7xl font-bold">SAMMIES</h1>
            <p className="mb-5 text-3xl">
              The <span className="underline-word font-bold">treat</span> that
              brings back childhood memories
            </p>
            <Link to="/products">
              <button className="btn btn-accent">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
