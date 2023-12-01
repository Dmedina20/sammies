import React, { useEffect, useState } from "react";
import anya from "../../images/anyaWave.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../../app/features/userSlice";
import { auth } from "../../app/firebase/config";
const SignupModal = () => {
  const [userLoaded, setUserLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("User state changed:", user);
      if (user) {
        // User is signed in
        dispatch(login({ user }));
      } else {
        // User is signed out
        dispatch(logout());
      }
      // Set userLoaded to true once the user information is available
      setUserLoaded(true);
    });

    // Clean up the listener on unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const showSignupModal = () => {
      if (!user && userLoaded) {
        showModal();
      }
    };

    const timeoutId = setTimeout(showSignupModal, 10000); // 10 seconds

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, [user, userLoaded]); // Dependency array includes user and userLoaded

  const showModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
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
  return (
    <>
      {!user && userLoaded && (
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
      )}
    </>
  );
};

export default SignupModal;
