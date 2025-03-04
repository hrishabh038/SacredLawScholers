// axiosConfig.js
import axios from "axios";

const BaseAPI = axios.create({
  baseURL: "https://sacredlawscholarsbackend.onrender.com/api/",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default BaseAPI;
