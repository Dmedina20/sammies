import React, { useState, useEffect } from "react";
import anya from "../../images/anyaWave.png";
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
  const navigate = useNavigate();
  const showModal = () => {
    document.getElementById("my_modal_1").showModal();
  };
  const closeModalAndNavigate = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
    navigate("/signup");
  };
  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      showModal();
    }, 10000); // 10 seconds

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
      <dialog id="my_modal_1" className="modal cursor-default fixed z-20">
        <div className="modal-box bg-base-100 text-base-content overflow-hidden">
          <h3 className="font-bold text-3xl text-center ">
            Welcome to SAMMIES!
          </h3>
          <img
            className="lg:w-[150px] w-[110px] mx-auto lg:mt-10 mt-4"
            src={anya}
            alt="Welcome!"
          />

          <p className="lg:pt-10 pt-5 tracking-tight line-clamp-3  text-xl text-center ">
            Don't miss out on{" "}
            <span className="font-bold">
              exclusive deals and faster checkout
            </span>{" "}
            experiences!
          </p>
          <p className=" lg:pb-10 pb-0 tracking-tight line-clamp-3  text-xl text-center ">
            <span
              onClick={closeModalAndNavigate}
              className="text-primary hover:text-accent cursor-pointer"
            >
              Sign up
            </span>{" "}
            today to treat your taste buds!
          </p>
          <div className="modal-action mx-auto grid grid-cols-2 overflow-hidden justify-center">
            <button
              onClick={closeModal}
              className="btn sm:btn-sm lg:btn-md btn-outline btn-primary hover:btn-error  "
            >
              Not Now
            </button>

            <button
              onClick={closeModalAndNavigate}
              className="btn sm:btn-sm lg:btn-md btn-primary hover:btn-accent  "
            >
              Sign Up
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SignupModal;
