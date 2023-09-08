import React from "react";
import classes from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <div className={classes.forgetpasswordbox}>
      <form>
        <center>
          <h3>Forget Password</h3>
        </center>
        <div className="form-group mt-4 ">
          <input
            type="mobilenumber"
            placeholder="Enter your email"
            className="form-control "
          />
        </div>
        <div className="form-group mt-4 ">
          <button className="form-control btn btn-success">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
