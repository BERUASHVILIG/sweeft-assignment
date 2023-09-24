/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const loadAllCountries = axios.create({
  baseURL: import.meta.env.VITE_COUNTRY_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const loadAllAirports = axios.create({
  baseURL: import.meta.env.VITE_AIRPORTS_BASE_URL,
  headers: { "X-Api-Key": import.meta.env.VITE_AIRPORTS_API_KEY },
  timeout: 10000,
});

export const loadAllCurrency = axios.create({
  baseURL: import.meta.env.VITE_CURRENCY_LATEST,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getAllCurrencyLatest = () => loadAllCurrency.get("");

export const getExchangeRate = (fromCurrency: string, toCurrency: string) =>
  loadAllCurrency.get(`?base=${fromCurrency}&symbols=${toCurrency}`);

export const getAllAirports = (code: string) =>
  loadAllAirports.get(`?country=${code}`);

export const getAllCountries = () => loadAllCountries.get("");

export const getSingleCountry = () => loadAllCountries.get(`/all`);
