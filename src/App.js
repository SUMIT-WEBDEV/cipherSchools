import React from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import CipherMap from "./Components/Map/CipherMap";

function App() {
  return (
    <div className="app">
      <Profile />
      <ProfileDetails />
    </div>
  );
}

export default App;
