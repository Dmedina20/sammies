import "../../App.css";
import Winter from "../../images/Winter.png";

function WinterSale() {
  return (
    <>
      <div className="hero min-w-screen bg-primary">
        <img src={Winter} alt="helping hands" className="h-full" />
        <div className="hero-content lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            {/* 
            <h1 className=" text-center mb-8 text-3xl lg:text-5xl font-bold text-neutral-content">
              Learn Our <span className="underline-word">Values</span>!
            </h1>
            <p className="py-6 text-center text-xl lg:text-2xl text-neutral-content">
              We build awareness and support for the social & environmental
              issues that we feel strongly about. Find out how you can help.
            </p>
            <div className=" hero-content justify-right">
              <button className="btn btn-accent lg:font-bold">
                Learn More
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WinterSale;
