import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { auth } from "../../app/firebase/config";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserDataSuccess,
  fetchUserData,
} from "../../app/features/userSlice";

const AuthProfile = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [birthday, setbirthDay] = useState("");
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    if (user) {
      dispatch(fetchUserData(user.uid));
    }
  }, [dispatch, user]);
  /**
   * The `handleUpdate` function updates the user's profile information in the database and dispatches
   * an action to update the user's profile in the application state.
   */
  const handleUpdate = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        await updateProfile(currentUser, {
          displayName: currentUser.displayName,
        });

        // Dispatch fetchUserRequest action to indicate the start of data fetching
        dispatch(fetchUserRequest());

        const db = getFirestore();
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userDataFromFirestore = userDoc.data(); // Fetch user data from Firestore

          await setDoc(
            userDocRef,
            {
              firstName: firstname,
              middleName: middlename,
              lastName: lastname,
              phoneNumber: phoneNumber,
              birthDay: birthday,
            },
            { merge: true }
          );

          // Dispatch updateUserDataSuccess action to update the user state
          dispatch(updateUserDataSuccess(userDataFromFirestore));

          // Dispatch fetchUserSuccess action to indicate successful data fetching
          dispatch(fetchUserSuccess(userDataFromFirestore));
        } else {
          // Dispatch fetchUserSuccess action with an empty payload if the user document doesn't exist
          dispatch(fetchUserSuccess({}));
        }
      } catch (error) {
        // Dispatch fetchUserFailure action to indicate the failure of data fetching
        dispatch(fetchUserFailure(error.message));
      }
    }
  };

  return (
    <>
      <h2 className="flex justify-center mt-5 text-3xl">
        Welcome {user?.displayName || ""}!
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols-1  ">
        <div className="ProfilePic lg:col-start-2 ">
          <div className="mx-auto w-64 mt-10 mb-10 text-center ">
            <div className="relative w-64">
              <img
                className="w-64 h-64 rounded-full absolute"
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <label className="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                <input type="file" className="hidden" />
                <img
                  className="hidden group-hover:block w-12"
                  src="https://www.svgrepo.com/show/33565/upload.svg"
                  alt=""
                />
              </label>
              <div className="flex absolute text-center justify-center items-center top-[260px] left-[50px]">
                <p>Upload your picture!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="UserInfo ">
          <div className="lg:mt-10 mt-[300px] mb-10 mx-auto">
            <div className="card bg-base-100 mx-auto lg:w-[100%] w-[90%]">
              <h2 className="card-title mt-5 flex justify-center ">
                Create your profile!
              </h2>
              <div className="card-body  lg:gap-x-2 lg:gap-y-2 grid grid-cols-1 lg:grid-cols-3 text-center mx-auto ">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered input-sm w-full"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Middle Name</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered input-sm w-full "
                      value={middlename}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </div>
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered input-sm w-full "
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </label>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Phone Number</span>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="123-456-7890"
                      className="input input-bordered input-sm w-full "
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                    />
                  </div>
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Date of Birth</span>
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      placeholder=""
                      className="input input-bordered input-sm w-full"
                      value={birthday}
                      onChange={(e) => setbirthDay(e.target.value)}
                    />
                  </div>
                </label>
              </div>
              <div className="card-actions justify-center mt-4">
                <button
                  onClick={handleUpdate}
                  className="btn btn-primary btn-wide hover:btn-accent"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthProfile;
