import axios from "axios";

axios.defaults.baseURL = "http://localhost:3010";

export const login = (email, password) => {
  return axios
    .post("/login", { email, password }, { withCredentials: true })
    .then((res) => res.data);
};

export const getProducts = () => {
  return axios
    .get("/product", { withCredentials: true })
    .then((res) => res.data);
};
