import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "../DocterProfile/DocterProfile.module.css";
import { fetchDocterProfile } from "../loginService";

const Profile = () => {
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
            <h2 className={classes.name}>{docter.name}</h2>
            <div>{docter.education}</div>
            <div className={classes.speciality}>{docter.specialty}</div>
            <div>{docter.experience}</div>
            <div className={classes.address}>{docter.address}</div>
            <div>{docter.info}</div>
            <div className="container ">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className={`col-lg-8 ${classes["m-flex"]}`}>
                      {docter.data &&
                        docter.data.map((slot) => (
                          <h5
                            onClick={() => setSelectedDate(slot.date)}
                            className={classes.dateContainer}
                          >
                            {slot.date}
                          </h5>
                        ))}
                    </div>
                    <div className={`col-lg-8 ${classes["m-flex"]}`}>
                      {docter.data &&
                        docter.data.map((slot) => {
                          return (
                            slot.date == selectedDate &&
                            slot.slots &&
                            slot.slots.map((item) => (
                              <div className={classes.slots}>{item.start}</div>
                            ))
                          );
                        })}
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

export default Profile;
