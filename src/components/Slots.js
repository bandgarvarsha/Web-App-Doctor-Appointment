import React, { useEffect, useState } from "react";
import { fetchAvailableSlots } from "./loginService";
import classes from "./Slots.module.css";

const Slots = () => {
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    const timeSlots = async () => {
      try {
        let fetchSlot = await fetchAvailableSlots();
        setAvailableSlots(fetchSlot.data);
        console.log(fetchSlot.data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    timeSlots();
  }, []);

  return (
    <div>
      {/* {console.log(availableSlots)} */}
      {availableSlots.map((slot) => (
        <div key={slot.id} className={classes.slots}>
          {slot.start}-{slot.end}
        </div>
      ))}
    </div>
  );
};

export default Slots;
