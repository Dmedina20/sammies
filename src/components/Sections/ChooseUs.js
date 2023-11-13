import "../../App.css";
import MeltingIceCream from "../Animations/MeltingIceCream";

function ChooseUs() {
  return (
    <>
      <div className="Featured-Product-Header overflow-hidden ">
        <h3 className="text-center mb-8 text-4xl font-bold ">
          <p>
            Welcome to <span className="font-bold underline-word">SAMMIES</span>
            ,{" "}
          </p>
        </h3>
      </div>
      <div className=" overflow-y-hidden lg:py-30 py-40 lg:flex lg:justify-center lg:items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-40 lg:gap-30  justify-center">
          <MeltingIceCream />
          <div className="">
            <p className="indent-1 font-medium italic antialiased  leading-loose text-xl max-w-md lg:text-left text-center  ">
              Where every scoop tells a story of indulgence and delight! At
              <span className="font-bold"> SAMMIES</span>, we take pride in
              crafting more than just ice cream; we create moments of pure joy
              and flavor exploration. What sets us apart is our unwavering
              commitment to quality. From sourcing the finest, locally-sourced
              ingredients to our artisanal approach in churning out delectable
              flavors, each scoop is a testament to our passion for delivering a
              sensory experience like no other.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
