import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Bottom.css";
import { AuthContext } from "../../Authentications/context/AuthContext";

function Bottom() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const [errorMessage, setErrorMessage] = useState("");
  const [updateProfile, setUpdateProfile] = useState(false);
  const [updateInterest, setUpdateInterest] = useState(false);

  const { user } = useContext(AuthContext);
  const modalRef = useRef(null);

  const showModal = () => {
    setUpdateProfile(true);
  };
  const hideModal = () => {
    setUpdateProfile(false);
  };

  const showInterest = () => {
    setUpdateInterest(true);
  };
  const hideInterest = () => {
    setUpdateInterest(false);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        hideModal();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        hideInterest();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (newPassword !== confirmPassword) {
    //   setErrorMessage("Passwords do not match");
    //   return;
    // }

    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    setOldPassword("");
    setNewPassword("");

    axios
      .put(`http://localhost:5000/auth/updatePassword/${user._id}`, data)
      .then((res) => {
        console.log(res.data);
        console.log("change Successfully");
      })
      .catch((err) => {
        console.log("nhi huwa");
        console.log(err);
      });
  };

  return (
    <>
      <div className="bottom">
        <div className="bottom__prof">
          <div className="Bottom__Text">
            <h1>PROFESSIONAL INFORMATION</h1>
            <button>Edit</button>
          </div>

          <div className="bottom__First">
            <li>
              <p>Highest Education</p>

              <div className="bottomFirst__Input">
                <input type="text" placeholder="Graduation" />
              </div>
            </li>
            <li>
              <p>What do you do currently</p>
              <div className="bottomFirst__Input">
                <input type="text" placeholder="Github" />
              </div>
            </li>
          </div>
        </div>

        <div className="bottom__Password">
          <div className="Bottom__Text">
            <h1>PASSWORD & SECURITY</h1>
            <button onClick={showModal}>Change</button>
          </div>

          <div className="bottom__First ">
            <li className="password">
              <p>Password</p>
              <div className="bottomFirst__Input">
                <input type="text" placeholder="••••••••••••••••" />
              </div>
            </li>
          </div>
        </div>

        <div className="bottom__Interset">
          <div className="Bottom__Text">
            <h1>INTERESTS</h1>
            <button onClick={showInterest}>Edit</button>
          </div>
        </div>
      </div>

      {/* ------------------------modal-------------------------- */}

      {updateProfile && (
        <div className="password__Modal" ref={modalRef}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="passwordModal__Wrapper">
              <p>Current Password</p>
              <input
                placeholder="Current Password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <br />
              <p>New Password</p>
              <input
                placeholder="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <br />
              <p>Confirm Password</p>
              <input
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="profileModal__buttons">
              <button style={{ backgroundColor: "black" }} onClick={hideModal}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}

      {/* ------------------------Interest-------------------------- */}

      {updateInterest && (
        <div className="modal__Interest" ref={modalRef}>
          <div className="modalInterest__Wrapper">
            <div className="model__divs">
              <p>App Development</p>
              <p>Web Development</p>
            </div>
            <div className="model__divs">
              <p>App Development</p>
              <p>Web Development</p>
            </div>
            <div className="model__divs">
              <p>Programming</p>
              <p>Machine Learning</p>
            </div>
            <div className="model__divs">
              <p>Data Science</p>
              <p>Others</p>
            </div>
          </div>
          <div className="profileModal__buttons">
            <button style={{ backgroundColor: "black" }} onClick={hideInterest}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Bottom;
