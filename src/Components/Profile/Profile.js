import React, { useContext, useEffect, useRef, useState } from "react";
import "./Profile.css";
import { MdEdit } from "react-icons/md";
import { AuthContext } from "../Authentications/context/AuthContext";
import axios from "axios";

function Profile() {
  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);

  const [updateProfile, setUpdateProfile] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/auth/${user._id}`)
        .then((res) => {
          setDetails(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const showModal = () => {
    setUpdateProfile(true);
  };
  const hideModal = () => {
    setUpdateProfile(false);
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

  return (
    <>
      <div className="profile">
        <div className="profile__Left">
          <div className="profile__Logo">
            <img src="./profileEmail.jpg" alt="" />
            <MdEdit className="profileEdit__logo" onClick={showModal} />
          </div>

          <div className="profile__Name">
            <li>Hello,</li>
            <li>
              {user.firstName} {user.LastName}
            </li>
            <li>{user.email}</li>
          </div>
        </div>

        <div className="profile__Right">0 Followers</div>
      </div>

      {updateProfile && (
        <div className="profile__Modal">
          <div className="profileModal__WrapperAll" ref={modalRef}>
            <div className="ProfileModal__Toggle">
              <h2>Profile Update</h2>
              <h1 onClick={hideModal}>X</h1>
            </div>

            <div className="profileModal__Wrapper">
              <div className="profileModal__Left">
                <img src="./profileEmail.jpg" alt="" />
              </div>

              <div className="profileModal__Right">
                <p>first Name</p>
                <input value={details.firstName} />
                <br />
                <p>Last Name</p>
                <input value={details.LastName} />
                <br />
                <p>Email Address</p>
                <input value={details.email} />
                <br />
                <p>Phone no</p>
                <input />
                <br />
              </div>
            </div>

            <div className="profileModal__buttons">
              <button style={{ backgroundColor: "black" }}>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
