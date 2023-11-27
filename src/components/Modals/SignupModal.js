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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      showModal();
    }, 10000); // 10 seconds

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
      <dialog id="my_modal_1" className="modal cursor-default fixed z-20">
        <div className="modal-box bg-base-100 text-base-content">
          <h3 className="font-bold text-3xl text-center ">
            Welcome to SAMMIES!
          </h3>
          <img
            className="lg:w-[150px] w-[110px] mx-auto mt-10"
            src={anya}
            alt="Welcome!"
          />

          <p className="pt-10 pb-20 lg:pt-10 lg:pb-10 tracking-tight line-clamp-3  text-xl text-center ">
            Don't miss out on{" "}
            <span className="font-bold">
              exclusive deals, personalized recommendations, and faster checkout
            </span>{" "}
            experiences!{" "}
            <span
              onClick={closeModalAndNavigate}
              className="text-primary hover:text-accent cursor-pointer"
            >
              Sign up
            </span>{" "}
            today to treat your taste buds!
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              <button
                onClick={closeModalAndNavigate}
                className="btn btn-primary hover:btn-accent btn-wide "
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SignupModal;
