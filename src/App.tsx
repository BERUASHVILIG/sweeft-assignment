import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getAllCountries } from "./utils/ajax";
import { saveAllCountry } from "./redux/actions";
import Airports from "./components/Airports";
import CurrencyRow from "./components/CurrencyRow";
import Navigation from "./components/Navigation";
import NavigationModal from "./components/NavigationModal";

// style
import "./App.css";
import { Box, Typography } from "@mui/material";

const App = () => {
  const countries = useAppSelector((state) => state.countries);
  const currentLocation = useAppSelector((state) => state.currentLocation);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await getAllCountries();
        dispatch(saveAllCountry(data));
        setIsLoading(false);
        setSelectedCountry(hasAgreed ? currentLocation : selectedCountry);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [dispatch, currentLocation]);

  const handleSelectChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  const handleAgreement = () => {
    setHasAgreed(true);
  };

  const handleDisagreement = () => {
    setHasAgreed(false);
  };

  return (
    <Box>
      <Box>
        {isLoading ? (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="lds-dual-ring"></Box>
          </Box>
        ) : (
          <Box>
            {hasAgreed ? (
              <select
                style={{ marginTop: "50px" }}
                onChange={handleSelectChange}
                value={selectedCountry}
              >
                <option value="">Select a country</option>
                {countries.length > 0 ? (
                  countries.map((country: any, index: number) => (
                    <option key={index} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))
                ) : (
                  <option value="">No countries available.</option>
                )}
              </select>
            ) : (
              <NavigationModal
                onAgree={handleAgreement}
                onDisagree={handleDisagreement}
              />
            )}
            {!hasAgreed && (
              <select
                style={{ marginTop: "50px" }}
                onChange={handleSelectChange}
                value={selectedCountry}
              >
                <option value="">Select a country</option>
                {countries.length > 0 ? (
                  countries.map((country: any, index: number) => (
                    <option key={index} value={country.name.common}>
                      {country.name.common}
                    </option>
                  ))
                ) : (
                  <option value="">No countries available.</option>
                )}
              </select>
            )}

            {selectedCountry && (
              <Box>
                <Typography variant="h6" color="#fff">
                  Country Information
                </Typography>
                {isLoading ? (
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box className="lds-dual-ring"></Box>
                  </Box>
                ) : (
                  countries.map((country: any, index: number) => {
                    if (country.name.common === selectedCountry) {
                      return (
                        <Box key={index}>
                          <img src={country.flags.png} alt="" />
                          <Typography variant="h6" color="#fff">
                            Current User Location
                          </Typography>
                          <Navigation />
                          <Typography>Capital:{country.capital}</Typography>
                          <Typography>Region:{country.region}</Typography>
                          <Typography>
                            Population:{country.population}
                          </Typography>
                          <Typography>Name: {country.name.common}</Typography>
                          <Typography>Area: {country.area}</Typography>
                          <Typography>code:{country.cca2}</Typography>
                          <Box>
                            Currency code:
                            {Object?.keys(country?.currencies)?.map((code) => (
                              <li key={code}>{code}</li>
                            ))}
                          </Box>

                          <Box sx={{ display: "flex", gap: "15px" }}>
                            <Airports code={country.cca2} />
                            {selectedCountry && (
                              <Box>
                                <Box>
                                  {Object?.keys(country?.currencies)?.map(
                                    (code) => (
                                      <CurrencyRow
                                        key={code}
                                        currencyCode={code}
                                      />
                                    )
                                  )}
                                </Box>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      );
                    }
                    return null;
                  })
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default App;
