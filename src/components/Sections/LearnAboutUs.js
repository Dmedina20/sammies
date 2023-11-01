import "../../App.css";
import helping from "../../images/helping.png";

function Learn() {
  return (
    <>
      <div className="hero min-h-screen bg-primary overflow-y-hidden">
        <div className="hero-content  lg:grid lg:grid-cols-2 lg:gap-10">
          <img src={helping} alt="helping hands" className="hidden lg:block" />
          <div>
            <img
              src={helping}
              alt="helping hands"
              className="block lg:hidden"
            />
            <h1 className=" text-center mb-8 text-3xl lg:text-5xl font-bold text-neutral-content">
              Learn Our <span className="underline-word">Values</span>!
            </h1>
            <p className="py-6 text-center text-xl lg:text-2xl text-neutral-content">
              We build awareness and support for the social & environmental
              issues that we feel strongly about. Find out how you can help.
            </p>
            <div className="hero-content justify-center">
              <button className="btn btn-accent lg:font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
