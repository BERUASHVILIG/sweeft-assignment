/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

console.log("aj", import.meta.env);

export const loadAllCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1", // import.meta.env.VITE_API ||
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const loadAllAirports = axios.create({
  baseURL: `https://api.api-ninjas.com/v1/airports?country=CN&name=`,
  //   baseURL: `https://api.api-ninjas.com/v1/airports?name=`, // import.meta.env.VITE_API ||
  headers: { "X-Api-Key": "lBzfWwzAIm/iretSPiIi8w==BcXlbBnw7MEB2rEo" },
  timeout: 10000,
});

export const getAllAirports = (name: any) => loadAllAirports.get(`${name}`);

// export const getAllAirports = () => loadAllAirports.get(name);

export const getAllCountries = () => loadAllCountries.get("/all");

export const getSingleCountry = () => loadAllCountries.get(`/all`);
