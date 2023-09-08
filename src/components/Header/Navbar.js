import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";
import { Context } from "../Context/Context";
import { NavDropdown } from "react-bootstrap";
import profilePhoto from "../../assets/g3.jpg";
const Navbar = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setUser(null);
    sessionStorage.removeItem("Id");
    sessionStorage.removeItem("jwt");
    navigate("/");
  };

  const updateHandler = () => {
    navigate(`/edit/${sessionStorage.getItem("Id")}`);
  };

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.leftNav}>
          <NavLink to="/" className={classes.nav}>
            Home
          </NavLink>
          <NavLink to="/about" className={classes.nav}>
            About
          </NavLink>
        </div>

        {user ? (
          <span className={classes.rightNav}>
            <NavDropdown
              title={
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className={classes.profilePhoto}
                />
              }
              className={`${classes.customNavDropdown} noArrow`}
            >
              <div>
                <NavDropdown.Item>{user}</NavDropdown.Item>
                <NavDropdown.Item onClick={updateHandler}>
                  View and Update profile
                </NavDropdown.Item>

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </span>
        ) : (
          <NavLink to="/login" className={classes.nav}>
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
};

export default Navbar;
