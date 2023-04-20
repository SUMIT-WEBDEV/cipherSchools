import React from "react";
import "./Social.css";
// import { AiFillGithub } from "react-icons/ai";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

import { TfiWorld } from "react-icons/tfi";

function Social() {
  return (
    <div className="social">
      <div className="social__First">
        <li>
          <p>LinkedIn</p>

          <div className="socialFirst__Input">
            <AiFillLinkedin className="social__Icons" />
            <input type="text" placeholder="LinkedIn" />
          </div>
        </li>
        <li>
          <p>Github</p>
          <div className="socialFirst__Input">
            <AiFillGithub className="social__Icons" />
            <input type="text" placeholder="Github" />
          </div>
        </li>
        <li>
          <p>Facebook</p>
          <div className="socialFirst__Input">
            <AiFillFacebook className="social__Icons" />
            <input type="text" placeholder="Facebook" />
          </div>
        </li>
        <li>
          <p>Twitter</p>
          <div className="socialFirst__Input">
            <AiFillTwitterCircle className="social__Icons" />
            <input type="text" placeholder="Twitter" />
          </div>
        </li>
        <li>
          <p>Instagram</p>
          <div className="socialFirst__Input">
            <AiFillInstagram className="social__Icons" />
            <input type="text" placeholder="Instagram" />
          </div>
        </li>
        <li>
          <p>Website</p>
          <div className="socialFirst__Input">
            <TfiWorld className="social__Icons" />
            <input type="text" placeholder="LinkedIn" />
          </div>
        </li>
      </div>
    </div>
  );
}

export default Social;
