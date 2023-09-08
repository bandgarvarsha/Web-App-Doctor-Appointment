import axios from "axios";

export const loginFun = async (email, password) => {
  return await axios.post("http://localhost:5000/login", {
    emailId: email,
    password: password,
  });
};

export const fetchDocterList = async () => {
  return await axios.get("http://localhost:5000/doctorList");
};

export const fetchAvailableSlots = async () => {
  return await axios.get("http://localhost:5000/timeSlots");
};

export const registrationFun = async (
  id = null,
  fullName,
  address,
  mobileNo,
  emailId,
  password
) => {
  return await axios.post("http://localhost:5000/signup", {
    id,
    fullName,
    address,
    mobileNo,
    emailId,
    password,
  });
};

export const fetchDocterProfile = async (id) => {
  return await axios.get(`http://localhost:5000/docterProfile/${id}`);
};

export const updateUserProfile = async (id) => {
  return await axios.get(`http://localhost:5000/updateUserProfile/${id}`);
};

export const docterRegistrationFun = async (
  id = null,
  fullName,
  education,
  speciality,
  address,
  phoneNumber,
  experience,
  information
) => {
  return await axios.post("http://localhost:5000/docterRegistration", {
    id,
    fullName,
    education,
    speciality,
    address,
    phoneNumber,
    experience,
    information,
  });
};
