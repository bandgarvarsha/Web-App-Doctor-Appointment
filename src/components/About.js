import React from "react";

const About = () => {
  return (
    <div>
      <section>
        <div className="about1">
          <h1>About Us</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row ">
            <h2 className="sub-heading fs-1 mb-5 mt-5 health">
              Health with ease
            </h2>
          </div>
          <div className="row ">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="sub-heading1 pb-2">Mission</h2>
                <p>
                  3409TECH VENTURES PRIVATE LIMITED(Q UP) is on a mission to
                  remove voids and digitize healthcare for over a billion
                  Indians. We strengthen the doctor patient relationship by
                  eliminating waiting times and empowering doctors by creating
                  your Doctor's own brand app with easy-to-use features.
                </p>
              </div>
            </div>
            <div className="col-lg-6  ">
              <img
                src="./images/about.png"
                className="img-fluid"
                alt="image1"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6  order-sm-2  d-flex align-items-center">
              <div>
                <h2>
                  Q UP wants to navigate people for better healthcare experience
                </h2>
                <p>
                  People can access the best doctors, book appointments online,
                  take online consultations and stay connected with doctors on Q
                  UP.
                </p>
              </div>
            </div>
            <div className="col-lg-6  ">
              <img
                src="./images/about1.png"
                className="img-fluid"
                alt="image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="sub-heading1 pb-2">Vision</h2>
                <p>
                  We make healthcare simple, safe and secure. Educate patients,
                  digitize their approach and make healthcare easier.
                </p>
              </div>
            </div>
            <div className="col-lg-6  ">
              <img
                src="./images/about2.png"
                className="img-fluid"
                alt="about3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
