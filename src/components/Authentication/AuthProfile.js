import "../../App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
const AuthProfile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="grid grid-cols-4 mx-auto">
        <div className="ProfilePic col-start-2">
          <div className="mx-auto w-64 mt-10 mb-10 text-center ">
            <div className="relative w-64">
              <img
                className="w-64 h-64 rounded-full absolute"
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <div className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                <img
                  className="hidden group-hover:block w-12"
                  src="https://www.svgrepo.com/show/33565/upload.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="UserInfo">
          <div className="mt-10 mb-10 mx-auto">
            <div className="card bg-base-100  mx-auto lg:w-[100%] w-[90%]">
              <div className="card-body text-center mx-auto ">
                <h2 className="card-title justify-left">
                  Welcome {user?.displayName || ""}! Create your profile!
                </h2>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">
                      Username: {user?.displayName || ""}
                    </span>
                  </div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email address</span>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered input-sm w-full"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <div className="relative">
                    <input
                      placeholder=""
                      className="input input-bordered input-sm w-full pr-10"
                    />
                  </div>
                </label>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary btn-wide hover:btn-accent">
                    Sign Up
                  </button>
                </div>
                <div className="mt-4">
                  <p>
                    Already a member?{" "}
                    <span className="cursor-pointer text-primary">Log in</span>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthProfile;
