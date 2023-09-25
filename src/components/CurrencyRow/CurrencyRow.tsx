import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllCurrencyLatest } from "../../utils/ajax";
import { saveAllCurrency } from "../../redux/actions";

// style
import { Box, TextField, Typography } from "@mui/material";

const CurrencyRow = ({ currencyCode }: any) => {
  const currencies = useAppSelector((state) => state.currencies);
  const dispatch = useAppDispatch();

  const [inputAmount, setInputAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const fetchCurrencyOptions = async () => {
    try {
      const { data } = await getAllCurrencyLatest();
      dispatch(saveAllCurrency(data.rates));
      if (!selectedCurrency) {
        setSelectedCurrency(Object.keys(data.rates)[0] || null);
      }
    } catch (error) {
      console.error("Error fetching currency options:", error);
    }
  };

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

  const handleInputAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value);
    setInputAmount(amount);
  };

  const handleSelectedCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    fetchCurrencyOptions();
  }, [dispatch, selectedCurrency]);

  useEffect(() => {
    fetchAndCalculateConvertedAmount();
  }, [currencyCode, selectedCurrency, inputAmount]);

  return (
    <Box>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" color="#fff">
          Currency Information
        </Typography>
        <TextField
          type="number"
          value={inputAmount}
          onChange={handleInputAmountChange}
        />
        <Box>{currencyCode}</Box>
        <select
          value={selectedCurrency || ""}
          onChange={handleSelectedCurrencyChange}
        >
          {currencies ? (
            Object.keys(currencies).map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))
          ) : (
            <option value="">Loading...</option>
          )}
        </select>
      </Box>
      <Box>
        <Box color="#fff">=</Box>
        <Typography variant="h3" color="#fff">
          {convertedAmount != null
            ? `${inputAmount} ${currencyCode} = ${convertedAmount.toFixed(
                2
              )} ${selectedCurrency}`
            : "Loading..."}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrencyRow;
