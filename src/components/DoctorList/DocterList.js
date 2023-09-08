import React, { useEffect, useState } from "react";
import { fetchDocterList } from "../loginService";
import classes from "../DoctorList/DocterList.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Docters = () => {
  const [docters, setDocters] = useState([]);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const fetchList = async () => {
      try {
        let docterList = await fetchDocterList();

        setDocters(docterList.data);
      } catch (err) {
        alert("could not find list");
      }
    };
    fetchList();
  }, []);

  const submitHandler = () => {
    navigate("/login");
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    className: "slick-slider",
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search docter"
        onChange={(e) => setSearch(e.target.value)}
        className={classes.search}
      />
      <button className={classes.btnSearch}>Search</button>
      <div className={classes.docter}>
        <Slider {...settings}>
          {docters
            .filter((docter) => {
              return search.toUpperCase() === ""
                ? docter
                : docter.name.toLowerCase().includes(search) ||
                    docter.education.toLowerCase().includes(search) ||
                    docter.Specialty.toLowerCase().includes(search);
            })
            .map((docter) => (
              <div key={docter._id}>
                <div className={classes.docter}>
                  <div className={classes.slideContainer}>
                    <div className={classes.slideContent}>
                      <div className="card-wrapper">
                        <div className={classes.card}>
                          <div className={classes.imageContent}>
                            <span className={classes.overlay}></span>
                            <div className={classes.cardImage}>
                              <img
                                src={docter.image}
                                alt="Docterpic"
                                className={classes.cardImg}
                              />
                            </div>
                          </div>
                          <div className={classes.cardContent}>
                            <Link
                              to={`docterProfile/${docter._id}`}
                              className={classes.name}
                            >
                              {docter.fullName}
                            </Link>
                            <h3 className={classes.education}>
                              {docter.education} - {docter.speciality}
                            </h3>
                            <h4 className={classes.address}>
                              {docter.address}
                            </h4>

                            <h4 className={classes.mobile}>
                              📞 {docter.phoneNumber}
                            </h4>
                            <button
                              className={classes.button}
                              onClick={submitHandler}
                            >
                              Book Appointment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Docters;
