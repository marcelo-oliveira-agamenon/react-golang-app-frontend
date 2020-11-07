import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-go.herokuapp.com",
  //baseURL: "http://localhost:4000"
});

export default api;
