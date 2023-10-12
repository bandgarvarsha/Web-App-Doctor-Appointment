import axios from "axios";

export const loginFun = async (email, password) => {
  return await axios.post("http://localhost:5000/login", {
    emailId: email,
    password: password,
  });
};

export const docterLogin = async (emailId, password) => {
  return await axios.post("http://localhost:5000/docterLogin", {
    emailId: emailId,
    password: password,
  });
};

export const fetchDocterList = async () => {
  return await axios.get("http://localhost:5000/doctorList");
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
  information,
  emailId,
  password
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
    emailId,
    password,
  });
};

export const fetchAllSlots = async (dId,date) => {
  console.log("Date",date)
  return await axios.get(`http://localhost:5000/allSlots/${dId}/${date}`);
};

export const fetchSavedSlots = async (selectedDate,selectedSlots) => {
  return await axios.post("http://localhost:5000/saveSlots",{
    selectedDate:selectedDate,selectedSlots:selectedSlots
  });
};
