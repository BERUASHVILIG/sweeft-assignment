import axios from "axios";

console.log("aj", import.meta.env);

export const loadAllCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1", // import.meta.env.VITE_API ||
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllCountries = () => loadAllCountries.get("/all");

export const getSingleCountry = () => loadAllCountries.get(`/all`);
