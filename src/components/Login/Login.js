import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { loginFun } from "../loginService";
import { Context } from "../Context/Context";
import sweet from "sweetalert2";

const Login = () => {
  const { user, setUser } = useContext(Context);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await loginFun(email, password);
      console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem("jwt", response.data.Token);
        sessionStorage.setItem("Id", response.data.id);
        setUser(response.data.fullName);
        console.log("herere");
        sweet.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
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
              value={email}
              placeholder="Enter Email"
              className="form-control "
              onChange={(e) => setEmail(e.target.value)}
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

export default Login;
