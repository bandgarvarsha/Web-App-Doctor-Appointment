import React, { useState, useEffect } from "react";
import classes from "../components/Slots.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchAllSlots } from "./loginService";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Slots = () => {
  const [docter, setDocter] = useState();
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const docterId = params.id;

  useEffect(() => {
    const fetchSlots = async () => {

      try {
        if (selectedDate) {
          setIsLoading(true);

          const sDate = selectedDate.toISOString().split("T")[0];
          let fetchSlot = await fetchAllSlots(docterId, sDate);
          const { savedSlots, timeSlots } = fetchSlot.data;
          setDocter(timeSlots);
          setIsLoading(false);
          setSelectedSlots(savedSlots);

          console.log("fetch", timeSlots);
        }
      } catch (err) {
        setIsLoading(false);
        console.log("Seocnd");
        console.log("Error", err);
      }
    };

    fetchSlots();
  }, [docterId, selectedDate]);

  //handles slot selection
  const handleSlotClick = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(
        selectedSlots.filter((selectedSlot) => selectedSlot !== slot)
      );
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const saveSlots = async () => { 
    const docterId = sessionStorage.getItem("DocterId");

    try {
      const sDate = selectedDate.toISOString().split("T")[0];
      const response = await axios.post("http://localhost:5000/saveSlots", {
        docterId,
        sDate,
        selectedSlots,
      });
      console.log("SavedDate",sDate)
      console.log(response);
      if (response.status === 200) {
        toast.success("Slots saved successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (err) {
      toast.error("Failed to save slots. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const onDateChange = (date) => {
    console.log(date);

    const sdate = date
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");
    console.log("s", sdate);
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        minDate={new Date()}
        placeholderText="Select the date"
        dateFormat="dd-MM-yyyy"
        className={classes.datePicker}
        onChange={onDateChange} // it handles date selection
      />
      <div>
        {docter &&
          docter.map((slot, index) => (
            <div
              key={index}
              className={`${classes.slot} ${
                selectedSlots.includes(slot) ? classes.selected : " "
              } `}
              onClick={() => handleSlotClick(slot)}
            >
              {slot}
            </div>
          ))}
      </div>

      {isLoading && (
        /*<div className={classes.spinnerWrapper}>*/
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      {selectedDate && (
        <div>
          {selectedSlots.length===0 ? (
          <button
            onClick={saveSlots}
            className={classes.saveButton}
            disabled={selectedSlots.length > 0 ? false : true}
          >
            Save
          </button>
          ) : (
            <div>
              <button onClick={saveSlots} className={classes.saveButton}>Update</button></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Slots;
