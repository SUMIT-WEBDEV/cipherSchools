import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const firstName = useRef();
  const lastName = useRef();
  const phone = useRef();
  // const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        phone: phone.current.value,
      };
      try {
        await axios.post(`http://localhost:5000/auth/register`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src={"/Pages/LoginPage.jpg"} alt="" />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="firstName"
              ref={firstName}
              className="loginInput"
            />
            <input
              placeholder="lastName"
              ref={lastName}
              className="loginInput"
            />
            {/* <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            /> */}

            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />

            <input placeholder="phone" ref={phone} className="loginInput" />

            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
