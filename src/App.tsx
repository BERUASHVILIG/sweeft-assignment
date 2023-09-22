import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getAllCountries } from "./utils/ajax";
import { saveAllCountry } from "./redux/actions";
// import "./App.css";

const App = () => {
  const countries = useAppSelector((state) => state.countries);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(""); // State to store the selected country

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await getAllCountries();
        dispatch(saveAllCountry(data));
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [dispatch]);

  // Function to handle select change
  const handleSelectChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <div>
            <select onChange={handleSelectChange}>
              <option value="">Select a country</option>
              {countries.length > 0 ? (
                countries.map((country, index) => (
                  <option key={index} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))
              ) : (
                <option value="">No countries available.</option>
              )}
            </select>

            {selectedCountry && (
              <div>
                <h2>Country Information</h2>
                {/* Display additional information for the selected country */}
                {countries.map((country, index) => {
                  if (country.name.common === selectedCountry) {
                    return (
                      <div key={index}>
                        <div>Capital:{country.capital}</div>
                        <div>Region:{country.region}</div>
                        <div>Population:{country.population}</div>
                        <div>{country.currencies[0]?.name[0]}</div>
                        <img src={country.flags.png} alt="" />
                        <div>Name: {country.name.common}</div>
                        <div>Area: {country.area}</div>
                        {/* Add more information here */}
                      </div>
                    );
                  }
                  return null; // Render nothing if the country doesn't match
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
