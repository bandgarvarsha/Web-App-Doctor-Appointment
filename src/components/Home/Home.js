import React from "react";
import Corousal from "./Carousel";
import DocterList from "../DoctorList/DocterList";
import Date from "../Date";

const Home = () => {
  return (
    <div>
      {/* <Date /> */}

      <Corousal />

      <DocterList />
    </div>
  );
};

export default Home;
