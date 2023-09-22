import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1/all",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// export const axiosSingle = axios.create({
//   baseURL: "https://www.googleapis.com/books/v1/volumes",
//   timeout: 10000,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

export default axiosInstance;
