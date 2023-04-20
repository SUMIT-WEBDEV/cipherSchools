import React from "react";
import "./About.css";

function About() {
  return (
    <div className="profileDetails__About">
      <div className="profileDetails__Text">
        <h1>ABOUT ME</h1>
        <button>Edit</button>
      </div>

      <div className="profileDetails__Input">
        <textarea placeholder="Add something about you." />
      </div>
    </div>
  );
}

export default About;
