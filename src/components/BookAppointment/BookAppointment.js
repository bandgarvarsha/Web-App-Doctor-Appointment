import React from "react";
import classes from "../BookAppointment/BookAppointment.module.css";

const BookAppointment = () => {
  return (
    <div className={classes.bookingbox}>
      <form>
        <div>
          <div className="form-group mt-4 ">
            <input
              type="text"
              placeholder="Fullname"
              className="form-control "
            />
          </div>
          <div className="form-group mt-4">
            <input type="number" placeholder="+91" className="form-control " />
          </div>
          <div className="form-group mt-4">
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="form-control "
            />
          </div>
          <div className="form-group mt-4 ">
            <input
              type="Date"
              placeholder="DD//MM//YYYY"
              className="form-control "
            />
          </div>

          <div className="form-group mt-4">
            <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
            <input type="radio" name="gender" value="female" /> Female
          </div>

          <div className="form-group mt-4">
            <button className={classes.button}>Book Appointment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
