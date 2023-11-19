import React from "react";
import { useSelector } from "react-redux";

const AlertSuccess = () => {
  const alert = useSelector((state) => state.alert);

  return (
    <div>
      {/* Your alert component */}
      {alert.type && (
        <div
          role="alert"
          className={`alert ${
            alert.type === "success" ? "alert-success" : "alert-danger"
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

      {/* ... rest of your component JSX ... */}
    </div>
  );
};

export default AlertSuccess;
