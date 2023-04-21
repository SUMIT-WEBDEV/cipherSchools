import { useContext, useRef } from "react";
import "./login.css";
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import { CircularProgress } from "@material-ui/core";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
    navigate("/");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src={"/Pages/LoginPage.jpg"} alt="" />

          <span className="loginDesc"></span>
        </div>
        <div className="loginRight">
          <form
            className="loginBox"
            onSubmit={handleClick}
            encType="multipart/form-data"
          >
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="3"
              className="loginInput"
              ref={password}
            />

            <button className="loginButton" type="submit" disabled={isFetching}>
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )} */}
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">
                {/* {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Create a New Account"
                )} */}
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
