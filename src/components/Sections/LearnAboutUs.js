import "../../App.css";
import { Link } from "react-router-dom";

function Learn() {
  return (
    <>
      <div className="hero min-w-screen bg-primary overflow-y-hidden">
        <div className="hero-content  lg:grid lg:grid-cols-1 lg:gap-12">
          <div>
            <h1 className=" text-center  text-3xl lg:text-5xl font-bold text-neutral-content">
              Learn About <span className="underline-word">Us</span>!
            </h1>
            <p className="py-6 text-center text-xl lg:text-2xl text-neutral-content max-w-md ">
              At SAMMIES, our commitment to crafting delightful frozen treats
              extends beyond the screen.
            </p>

            <div className="hero-content justify-center">
              <Link to="/about-us">
                <button className="btn btn-accent lg:font-bold">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
