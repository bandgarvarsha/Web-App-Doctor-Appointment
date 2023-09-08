import React, { useEffect, useState } from "react";
import classes from "./Register.module.css";
import { registrationFun, updateUserProfile } from "../loginService";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../Context/Context";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmaiId] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const params = useParams();
  const userId = params.id;
  // console.log(userId);

  const updateUsersProfile = async () => {
    try {
      let updateUser = await updateUserProfile(userId);
      console.log("Update user", updateUser);
      if (updateUser.status === 200) {
        setFullName(updateUser.data.fullName);
        setAddress(updateUser.data.address);
        setMobileNo(updateUser.data.mobileNo);
        setEmaiId(updateUser.data.emailId);
        setPassword(updateUser.data.password);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    if (userId) {
      updateUsersProfile();
    }
  }, [userId]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let id = sessionStorage.getItem("Id");
      if (userId) {
        let updatedUser = await registrationFun(
          id,
          fullName,
          address,
          mobileNo,
          emailId,
          password
        );
        navigate("/about");
      } else {
        let register = await registrationFun(
          id,
          fullName,
          address,
          mobileNo,
          emailId,
          password
        );
        navigate("/login");
      }
    } catch (err) {
      alert("Some issue occured");
    }
  };

  const clickOnReset = () => {
    setFullName("");
    setAddress("");
    setMobileNo("");
    setEmaiId("");
    setPassword("");
  };

  return (
    <div>
      <form className={classes.registrationbox}>
        <center>
          <h3>{!userId ? "Registration" : "Update Profile"}</h3>
        </center>
        <div className="form-group mt-4 ">
          <input
            type="text"
            value={fullName}
            placeholder="Enter your FullName"
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 ">
          <input
            type="text"
            value={address}
            placeholder="Enter Address"
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 ">
          <input
            type="text"
            value={mobileNo}
            placeholder="Enter Mobile Number"
            className="form-control"
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="form-group mt-4 ">
          <input
            type="email"
            value={emailId}
            placeholder="Enter email"
            className="form-control"
            onChange={(e) => setEmaiId(e.target.value)}
            disabled={userId ? true : false}
          />
        </div>

        <div className="form-group mt-4 ">
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            disabled={userId ? true : false}
          />
        </div>
        <div className={classes.formactions}>
          {!user && (
            <button
              className="btn btn-warning"
              type="reset"
              onClick={clickOnReset}
            >
              Reset
            </button>
          )}
          <div className={classes.submit}>
            <button
              className={classes.register}
              type="submit"
              onClick={(e) => onSubmitHandler(e)}
            >
              {userId ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
