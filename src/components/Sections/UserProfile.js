import "../../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../app/features/userSlice";
import ref from "../../images/ref.png";

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.user.userData);

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
 used to fetch user data when the `user` variable changes. */

  useEffect(() => {
    if (user) {
      dispatch(fetchUserData(user.uid));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="UserProfile card mt-10 mx-auto">
        <div className="Header card shadow-2xl items-center text-center justify-center flex mx-auto grid grid-cols-1">
          <div className="profile-background overflow-hidden lg:w-[1320px] lg:h-[325px] w-[350px] h-[150px] ">
            <img
              className=" object-fill w-full h-full rounded-tl-lg rounded-tr-lg "
              src={ref}
              alt="User Background"
            />
          </div>
          <div className="profile-picture flex flex-col items-center -mt-20">
            <img
              className="h-40 w-40  border-4 border-base-100 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <div className=" cursor-default text-center justify-center items-center ">
              <p>
                <span className="text-xl ">{user.displayName}</span>{" "}
              </p>
            </div>
          </div>
          <div className="profile-info w-full h-full mt-[200px]">
            <h1 className="text-left text-xl pl-6">Personal Info </h1>
            <div class="divider before:bg-primary after:bg-primary -mt-2" />
            <ul className="text-left pl-4">
              <li>
                Full Name: {userData.firstName} {userData.lastName}
              </li>
              <div class="divider  -mt-2" />
              <li>Email: {user.email}</li>
              <div class="divider  -mt-2" />
              <li>DoB: {userData.birthDay}</li>
              <div class="divider  -mt-2" />
              <li>Phone Number: {userData.phoneNumber}</li>
              <div class="divider  -mt-2" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
