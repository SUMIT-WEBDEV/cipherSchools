import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

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
    <div>
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label>
              Old Password:
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
            <label>
              New Password:
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <button type="submit">Update Password</button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default UpdatePassword;
