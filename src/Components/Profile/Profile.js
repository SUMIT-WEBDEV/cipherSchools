import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__Logo">
        <img src="./profileEmail.jpg" alt="" />
        <div className="profile__Name">
          <p>Hello,</p>
          <h3>Sumit Sahu</h3>
          <p>sahu99516@gmail.com</p>
        </div>
      </div>

      <div className="profile__Right">0 Followers</div>
    </div>
  );
}

export default Profile;
