import "../../App.css";
import anya from "../../images/anya.png";
import circles from "../../images/circles.svg";
const Bubble = () => <span className="bubble"></span>;
function Hero() {
  return (
    <>
      <div className="hero min-h-screen overflow-x-hidden bg-primary">
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
        <div className="hero-content text-center lg:text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Sammies</h1>
            <p className="mb-5">
              The treat that brings back childhood memories
            </p>
            <button className="btn btn-accent">Shop Now</button>
          </div>
          <img src={anya} alt="anya" className="content-end hidden lg:block" />
        </div>
      </div>
    </>
  );
}

export default Hero;
