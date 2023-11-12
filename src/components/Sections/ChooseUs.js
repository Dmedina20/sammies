import "../../App.css";

import { useState } from "react";

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
          <div className="icecream ">
            <div className="head">
              <div className="bite bg-base-100"></div>
              <div className="bite bg-base-100"></div>
              <div className="stripContainer">
                <div className="strip"></div>
                <div className="strip"></div>
              </div>
              <div className="eyeContainer">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="mouth">
                <div className="tongue"></div>
              </div>
              <div className="mltContainer">
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
                <div className="drip"></div>
              </div>
            </div>
            <div className="stick"></div>

            <div className="puddle"></div>
          </div>
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
      <blockquote className="flex flex-col items-center p-4">
        <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
          "I recently used this website for a purchase and I was extremely
          satisfied with the ease of use and the variety of options available.
          The checkout process was seamless and the delivery was prompt."
        </p>

        <footer className="flex items-center gap-3 mt-6 md:mt-12">
          <img
            className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
            src="https://loremflickr.com/g/200/200/girl"
            alt="Sebastiaan Kloos"
            loading="lazy"
          />
          <a
            href="/"
            target="_blank"
            className="inline-block font-bold tracking-tight"
          >
            <p>Jane Doe</p>
            <p className="font-medium text-black/60">Founder of XYZ</p>
          </a>
        </footer>
      </blockquote>
    </>
  );
}

export default ChooseUs;
