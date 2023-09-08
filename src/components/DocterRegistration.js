import React, { useState } from "react";
import classes from "./DocterRegistration.module.css";
import { docterRegistrationFun } from "./loginService";
import { useNavigate } from "react-router";
const DocterRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [education, setEducation] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [information, setInformation] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let id = sessionStorage.getItem("Id");
    let registerDocter = await docterRegistrationFun(
      id,
      fullName,
      education,
      speciality,
      address,
      phoneNumber,
      experience,
      information
    );

    navigate("/");
  };

  return (
    <div className={classes.main}>
      <section className={classes.container}>
        <header>Register Form</header>
        <form className={classes.form}>
          <div className={classes.inputBox}>
            <label>Full Name</label>
            <input
              required=""
              value={fullName}
              placeholder="Enter ufull name"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={classes.column1}>
            <div className={classes.inputBox}>
              <label>Education</label>
              <input
                required=""
                value={education}
                placeholder="Enter your Education"
                type="telephone"
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
            <div className={classes.inputBox}>
              <label>Speciality</label>
              <input
                required=""
                value={speciality}
                placeholder="Enter your Specialization"
                type="text"
                onChange={(e) => setSpeciality(e.target.value)}
              />
            </div>
          </div>
          <div className={`${classes.inputBox} ${classes.address}`}>
            <label>Address</label>
            <input
              required=""
              value={address}
              placeholder="Enter address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={classes.column}>
            <div className={classes.inputBox}>
              <label>Phone number</label>
              <input
                required=""
                value={phoneNumber}
                placeholder="Enter phne number"
                type="tel"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className={classes.inputBox}>
              <label>Experience</label>
              <input
                required=""
                value={experience}
                placeholder="Enter your Experience"
                type="text"
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.inputBox}>
            <label>Information</label>
            <input
              required=""
              value={information}
              placeholder="Enter something abour yourself"
              type="text"
              onChange={(e) => setInformation(e.target.value)}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Profilepic</label>
            <input required="" name="profilePic" type="file" />
          </div>
          <button onClick={(e) => onSubmitHandler(e)}>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default DocterRegistration;
