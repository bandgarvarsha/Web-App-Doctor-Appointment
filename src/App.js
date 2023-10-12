import "./App.css";

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About";
import Login from "./components/Login/Login";
import Register from "./components/Registration/Register";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import { Context } from "./components/Context/Context";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import DocterProfile from "./components/DocterProfile/DocterProfile";
import Slots from "./components/Slots";
import DocterRegistration from "./components/DocterRegistration";

import DocterLogin from "./components/Login/DocterLogin";
import { DocterContext } from "./components/Context/DocterContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(null);
  const [docter, setDocter] = useState(null);
  return (
    <div>
      <Context.Provider value={{ user, setUser }}>
        <DocterContext.Provider value={{ docter, setDocter }}>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="forgetPassword" element={<ForgetPassword />}></Route>
            <Route path="bookAppointment" element={<BookAppointment />}></Route>
            <Route
              path="/docterProfile/:id"
              element={<DocterProfile />}
            ></Route>
            <Route path="/edit/:id" element={<Register />}></Route>
            <Route path="/slots/:id" element={<Slots />}></Route>
            <Route
              path="/docterRegistration"
              element={<DocterRegistration />}
            ></Route>
            <Route path="/docterLogin" element={<DocterLogin />}></Route>
          </Routes>
        </DocterContext.Provider>
      </Context.Provider>
    </div>
  );
};

export default App;
