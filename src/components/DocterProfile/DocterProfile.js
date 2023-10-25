import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "../DocterProfile/DocterProfile.module.css";
import { fetchDocterProfile } from "../loginService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const DocterProfile = () => {
  const [docter, setDocter] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const docterId = params.id;

  const fetchProfile = async () => {
    try {
      // fetch all docters information by docter id
      let fetchDocter = await fetchDocterProfile(docterId);

      if (fetchDocter.status === 200) {
        setDocter(fetchDocter.data);
        console.log(fetchDocter.data);
        console.log(fetchDocter.data.slots);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [docterId]);

  useEffect(() => {
    // fetch available slots
    const fetchAvailableSlots = async () => {
      try {
        if (selectedDate) {
          setIsLoading(true);

          let response = await axios.get(
            `http://localhost:5000/allSlots/${docterId}/${
              selectedDate.toISOString().split("T")[0]
            }`
          );
          if (response.status === 200) {
            setIsLoading(false);
            setSelectedSlots(response.data.savedSlots);
          } else {
            setSelectedSlots([]);
          }
        }
      } catch (err) {
        setIsLoading(false);
        console.log("Error", err);
      }
    };
    fetchAvailableSlots();
  }, [docterId, selectedDate]);

  const dateChangeHandler = (date) => {
    setSelectedDate(date);
  };

  const handleSlotClick = (slot) => {
    console.log("Selecet", selectedSlots);
    // if (selectedSlots.includes(slot)) {
    //   console.log(selectedSlots.filter((selectedSlot) => selectedSlot !== slot))
    //   setSelectedSlots(
    //    selectedSlots.filter((selectedSlot) => selectedSlot !== slot)
    //   );
    // }
    // } else {
    //   setSelectedSlots([...selectedSlots, slot]);
    // }
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
            {/* <div>{docter.date}</div>*/}

            <DatePicker
              dateFormat={"yyyy-MM-dd"}
              minDate={new Date()}
              placeholderText="Select the date"
              className={classes.datePicker}
              selected={selectedDate}
              onChange={dateChangeHandler}
            />

            <div className="container d-flex ">
              {!isLoading && selectedDate && selectedSlots.length === 0 && (
                <div className={classes.message}>
                  No slots are available for this date
                </div>
              )}
              {selectedSlots &&
                selectedSlots.length > 0 &&
                selectedSlots.map((slot, item) => (
                  <div
                    className={`${classes.slots} ${
                      selectedSlots.includes(slot) ? classes.selectedSlot : ""
                    }`}
                    key={item}
                    onClick={() => handleSlotClick(slot)}
                  >
                    {slot}
                  </div>
                ))}
            </div>
            {isLoading && (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}

            <div className="col-lg-4 mt-5">
              <button className={`mt-4 ${classes["button"]}`}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocterProfile;
