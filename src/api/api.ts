import axios from "axios";

const api = axios.create({
  baseURL: "https://loditojo-7t31.onrender.com/api",
});

export default api;