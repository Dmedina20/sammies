import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AlertSuccess = () => {
  const alert = useSelector((state) => state.alert);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Set isVisible to true when a new alert is received
    if (alert.type) {
      setIsVisible(true);

      // After 3 seconds, hide the alert
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Clear the timeout when the component unmounts or when the alert changes
      return () => clearTimeout(timeoutId);
    }
  }, [alert]);

  return (
    <>
      {isVisible && (
        <div
          role="alert"
          className={`alert ${
            alert.type === "success bg-success fixed z-20"
              ? "alert-success bg-success fixed z-20"
              : "alert-danger bg-accent mx-auto lg:w-[500px] w-[300px] ml-10 lg:ml-3  fixed z-20"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{alert.message}</span>
        </div>
      )}
    </>
  );
};

export default AlertSuccess;
