import "../../App.css";
import anya from "../../images/anya.png";
import circles from "../../images/circles.svg";
function Hero() {
  return (
    <>
      <div className="hero min-h-screen overflow-x-hidden bg-primary">
        <div className="hero-overlay bg-opacity-0">
          <div className="bubbles  w-screen h-screen overflow-hidden">
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
            <div>
              <span className="bubble"></span>
            </div>
          </div>
        </div>
        <img
          src={circles}
          alt="bg-circles"
          className="circles w-screen
           h-screen hidden lg:block"
        />
        <div className="hero-content text-center lg:text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-accent">SHOP NOW</button>
          </div>
          <img src={anya} alt="anya" className="content-end hidden lg:block " />
        </div>
      </div>
    </>
  );
}

export default Hero;
