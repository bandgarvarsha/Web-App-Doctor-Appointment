import React from "react";
import classes from "./Header.module.css";
import hospitalLogo from "../../assets/hospital1.png";
import Navbar from "./Navbar";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={hospitalLogo} alt="HospitalLogo" />
          <Navbar />
        </div>

        {/* <Navigation /> */}
      </header>
    </div>
  );
};

export default Header;
