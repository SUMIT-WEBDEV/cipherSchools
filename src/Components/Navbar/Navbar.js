import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentications/context/AuthContext";

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);

  const [logout, setLogout] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      // auth.signOut();
      dispatch({
        type: "LOGIN_FAILURE",
      });
      setLogout(true);
      window.location.reload();
    }
  };

  useEffect(() => {
    localStorage.removeItem("basket");
  }, [logout]);

  return (
    <div className="navbar">
      <div className="navbar__Left">
        <img src="./cipherLogo.png" alt="logo" width="30px" />
        <h2>CipherSchools</h2>
        <p>
          Browse <strong>˅</strong>
        </p>
      </div>

      <div className="navbar__Right">
        <h3>hello {user ? user.firstName : "user"},</h3>

        <Link to="/register" className="navbar__Right">
          <img
            src="./profileImage.jpg"
            alt="profile"
            width="30px"
            height="30px"
          />
        </Link>

        <Link onClick={handleAuthentication} className="right">
          <p>{user ? "Sign out" : "Sign In"}</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
