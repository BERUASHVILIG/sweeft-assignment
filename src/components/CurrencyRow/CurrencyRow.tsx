/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const CurrencyRow = ({ currencyCode }: any) => {
  console.log(currencyCode);
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [inputAmount, setInputAmount] = useState(1); // Input amount in the base currency
  const [selectedCurrency, setSelectedCurrency] = useState(currencyCode); // Selected target currency
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCurrencyOptions = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_CURRENCY_LATEST);
        const data = await res.json();
        const options = Object.keys(data.rates);
        setCurrencyOptions(options);
      } catch (error) {
        console.error("Error fetching currency options:", error);
      }
    };
    fetchCurrencyOptions();
  }, []);

  useEffect(() => {
    // Fetch and calculate the converted amount when selectedCurrency changes
    const fetchAndCalculateConvertedAmount = async () => {
      if (selectedCurrency) {
        try {
          const res = await fetch(
            `${
              import.meta.env.VITE_CURRENCY_LATEST
            }?base=${currencyCode}&symbols=${selectedCurrency}`
          );
          const data = await res.json();
          const rate = data.rates[selectedCurrency];
          const converted = inputAmount * rate;
          setConvertedAmount(converted);
        } catch (error) {
          console.error("Error fetching exchange rate:", error);
          setConvertedAmount(null);
        }
      }
    };
    fetchAndCalculateConvertedAmount();
  }, [currencyCode, selectedCurrency, inputAmount]);

  // Handle input amount change
  const handleInputAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value);
    setInputAmount(amount);
  };

  // Handle selected currency change
  const handleSelectedCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          type="number"
          value={inputAmount}
          onChange={handleInputAmountChange}
        />
        <div>{currencyCode}</div>
      </div>
      <div>
        Converted Amount:
        <select
          value={selectedCurrency}
          onChange={handleSelectedCurrencyChange}
        >
          {currencyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {convertedAmount != null
          ? `${inputAmount} ${currencyCode} = ${convertedAmount.toFixed(
              2
            )} ${selectedCurrency}`
          : "Loading..."}
      </div>
    </div>
  );
};

export default CurrencyRow;
