import React, { useContext } from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Authentications/register/Register";
import Login from "./Components/Authentications/login/Login";
import UpdatePassword from "./Components/Authentications/Update/UpdatePassword";
import { AuthContext } from "./Components/Authentications/context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />

          {user != null ? (
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Profile />
                  <ProfileDetails />
                </>
              }
            />
          ) : (
            <Route path="/" element={<Register />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// <div className="app">
// <Navbar />
// <Profile />
// <ProfileDetails />
// </div>
