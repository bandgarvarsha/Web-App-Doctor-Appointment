import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { docterLogin } from "../loginService";

import sweet from "sweetalert2";
import { DocterContext } from "../Context/DocterContext";

const DocterLogin = () => {
  const { docter, setDocter } = useContext(DocterContext);

  const navigate = useNavigate();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await docterLogin(emailId, password);
      console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem("jwt", response.data.Token);
        sessionStorage.setItem("DocterId", response.data.id);
        setDocter(response.data.fullName);
        console.log("herere");
        sweet.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(`/slots/${response.data.id} `);
      }
    } catch (err) {
      sweet.fire({
        icon: "error",
        title: "User does not exists!",
        text: " Please enter valid email and Password",
        showConfirmButton: true,
        borderRadius: "20px",
        // timer: 2000,
      });
    }
  };
  return (
    <>
      <div className={classes.loginbox}>
        <form>
          <center>
            <h3>Sign In</h3>
          </center>
          <div className="form-group mt-4 ">
            <input
              type="email"
              value={emailId}
              placeholder="Enter Email"
              className="form-control "
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              className="form-control "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="form-group mt-4">
              <button
                onClick={(e) => onSubmitHandler(e)}
                className={classes.submit}
                // className={`form-control ${classes["submit"]}`}
              >
                submit
              </button>
            </div>
          </div>
          <div className={classes.button}>
            <NavLink to="/register" className={classes.register}>
              Sign Up
            </NavLink>
            <NavLink to="/forgetPassword" className={classes.forgetpass}>
              Forget Password
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default DocterLogin;
