import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/firebase/config";
import { useNavigate, Link } from "react-router-dom";

import "../../App.css";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  };
  const isLoginDisabled = password === "";

  return (
    <>
      <div className="mt-10 mb-10 mx-auto">
        <div className="card bg-base-100 shadow-xl mx-auto lg:w-[20%] w-[90%]">
          <div className="card-body text-center mx-auto ">
            <h2 className="card-title justify-center">Login</h2>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email address</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered input-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  className="input input-bordered input-sm w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 hover:stroke-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 hover:stroke-primary "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </label>
            <div className="card-actions justify-center mt-4">
              <button
                className="btn btn-primary btn-wide hover:btn-accent"
                onClick={handleLogin}
                disabled={isLoginDisabled}
              >
                Login
              </button>
            </div>
            <div className="mt-4">
              <p>
                Not a member?{" "}
                <Link to="/signup">
                  <span className="cursor-pointer text-primary">Sign up</span>!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
