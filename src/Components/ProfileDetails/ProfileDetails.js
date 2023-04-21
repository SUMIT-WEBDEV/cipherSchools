import React from "react";
import "./ProfileDetails.css";
import About from "../About/About";
import Social from "./Social/Social";
import CipherMap from "../Map/CipherMap";
import Bottom from "./Others/Bottom";

function ProfileDetails() {
  return (
    <div className="profileDetails">
      <div className="profileDetails__Wrapper">
        <About />

        <div>
          <CipherMap />
        </div>
        <div>
          <Social />
        </div>
        <div>
          <Bottom />
        </div>
        <div>{/* PASSWORD & SECURITY */}</div>
      </div>
    </div>
  );
}

export default ProfileDetails;
