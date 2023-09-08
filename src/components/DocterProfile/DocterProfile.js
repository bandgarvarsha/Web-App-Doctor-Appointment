import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import classes from "../DocterProfile/DocterProfile.module.css";
import { fetchDocterProfile } from "../loginService";
import DatePicker from "react-datepicker"; // Import the datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles

const DocterProfile = () => {
  const [docter, setDocter] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const params = useParams();
  const docterId = params.id;

  const fetchProfile = async () => {
    try {
      let fetchDocter = await fetchDocterProfile(docterId);
      console.log("fetch", fetchDocter.data);
      if (fetchDocter.status === 200) {
        setDocter(fetchDocter.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [docterId]);

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date when the user selects a new date
  };

  const getSlotsForSelectedDate = () => {
    if (!docter || !selectedDate) {
      return [];
    }
    const selectedDateStr = selectedDate.toISOString().split("T")[0]; // Convert selectedDate to string format "YYYY-MM-DD"

    const selectedDateData = docter.data.find(
      (slot) => slot.date === selectedDateStr
    );

    return selectedDateData ? selectedDateData.slots : [];
  };

  return (
    <div>
      {docter && (
        <div
          className={`container card  ${classes["profile-container"]}  mt-5 `}
        >
          <div>
            <img
              src={docter.image}
              alt="Docterpic"
              className={classes.cardImg}
            />
          </div>
          <div className={classes.profileInfo}>
            <h2 className={classes.name}>{docter.fullName}</h2>
            <div>{docter.education}</div>
            <div className={classes.speciality}>{docter.speciality}</div>
            <div>{docter.experience}</div>
            <div className={classes.address}>{docter.address}</div>
            <div>{docter.information}</div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()} // Set a minimum date if needed
              placeholderText="Select the date"
              className={classes.datePicker}
            />
            <div className="container ">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className={`col-lg-8 ${classes["m-flex"]}`}>
                      {docter.data &&
                        docter.data.map((slot) => (
                          <h5
                            onClick={() => setSelectedDate(new Date(slot.date))}
                            className={classes.dateContainer}
                          >
                            {/* {slot.date} */}
                          </h5>
                        ))}
                    </div>
                    <div className={`col-lg-8 ${classes["m-flex"]}`}>
                      {selectedDate && (
                        <div>
                          {getSlotsForSelectedDate().map((slot) => (
                            <div className={classes.slots}>{slot.start}</div>
                          ))}
                        </div>
                      )}

                      {/* {docter.data &&
                        docter.data.map((slot) => {
                          return (
                            slot.date == selectedDate &&
                            slot.slots &&
                            slot.slots.map((item) => (
                              <div className={classes.slots}>{item.start}</div>
                            ))
                          );
                        })} */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-5">
                  <button className={`mt-4 ${classes["button"]}`}>
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocterProfile;
