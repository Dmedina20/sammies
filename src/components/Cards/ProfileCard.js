import React from "react";
import "../../App.css";

const ProfileCard = ({ userData }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-left text-left">
        <h2 className="card-title">Profile</h2>
        <p>Firstname: {userData.firstName}</p>
        <p>Middlename: {userData.middleName}</p>
        <p>Lastname: {userData.lastName}</p>
        <p>Phonenumber: {userData.phoneNumber}</p>
        <div className="card-actions items-center mx-auto">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
