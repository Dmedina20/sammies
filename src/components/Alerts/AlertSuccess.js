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
          className="alert bg-accent lg:w-[500px] w-[300px] ml-10 lg:ml-3 fixed z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>

          <span className="text-black">{alert.message}</span>
        </div>
      )}
    </>
  );
};

export default AlertSuccess;
