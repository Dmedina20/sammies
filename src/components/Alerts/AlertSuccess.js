import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AlertSuccess = () => {
  const alert = useSelector((state) => state.alert);
  const [isVisible, setIsVisible] = useState(false);
  const fadeIn = {
    opacity: 0,
    from: { opacity: 0 },
    to: { opacity: 1 },
  };

  const fadeOut = {
    opacity: 1,
    from: { opacity: 1 },
    to: { opacity: 0 },
  };
  useEffect(() => {
    let timeoutId;

    // Set isVisible to true when a new alert is received
    if (alert.type) {
      setIsVisible(true);

      // Clear the existing timeout
      clearTimeout(timeoutId);

      // After 3 seconds, hide the alert
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }

    // Clear the timeout when the component unmounts or when the alert changes
    return () => clearTimeout(timeoutId);
  }, [alert]);
  return (
    <>
      {isVisible && (
        <div
          role="alert"
          style={{
            animation: `${fadeIn} 0.5s ease-in-out, ${fadeOut} 0.5s ease-in-out 2s forwards`,
          }}
          className={`alert ${
            alert.type === "success bg-success fixed z-90"
              ? "alert-success bg-success fixed z-20"
              : "alert-danger bg-accent mx-auto lg:w-[500px] w-[300px] ml-10 lg:ml-3  fixed z-20"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className=" stroke-black shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-black">{alert.message}</span>
        </div>
      )}
    </>
  );
};

export default AlertSuccess;
