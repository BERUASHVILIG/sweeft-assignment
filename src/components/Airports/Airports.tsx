import React, { useEffect, useState } from "react";
import { getAllAirports } from "../../utils/ajax";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { saveAllAirports } from "../../redux/actions";
import { AirportsType } from "../../@types/general";
import { TextField, Typography, Box } from "@mui/material";
import { useDebounce } from "../../utils/cutomHooks";

const Airports = ({ code }: any) => {
  const dispatch = useAppDispatch();
  const airports = useAppSelector((state) => state.airports);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce<string>(searchQuery, 500);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const { data } = await getAllAirports(`${code}`);
        dispatch(saveAllAirports(data));
      } catch (error) {
        console.error("Error fetching airports:", error);
      }
    };
    fetchAirports();
  }, [code, dispatch]);

  const filteredAirports = airports.filter((airport: AirportsType) =>
    airport.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h6" color="#fff">
        Airports:
      </Typography>
      <TextField
        type="text"
        placeholder="Search Airports"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {filteredAirports.length === 0 ? (
        <Typography>No airports found for your search.😢</Typography>
      ) : (
        filteredAirports.map((airport: AirportsType, index: number) => (
          <Box key={index}>
            <Typography color="#fff">{airport.name}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Airports;
