import { useEffect } from "react";
import useGeolocation from "../../utils/cutomHooks";
import { getCurrentLocation } from "../../utils/ajax";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveCurrentLocation } from "../../redux/actions";

// style
import { Box } from "@mui/material";

const Navigation = () => {
  const currentLocation = useAppSelector((state) => state.currentLocation);
  const dispatch = useAppDispatch();
  const { location } = useGeolocation();

  useEffect(() => {
    if (location) {
      const apiKey = import.meta.env.VITE_GEOCODING_API_KEY;
      const { latitude, longitude } = location;

      getCurrentLocation(latitude, longitude, apiKey)
        .then((response) => {
          const results = response.data.results;
          if (results.length > 0) {
            dispatch(
              saveCurrentLocation(results[results.length - 1].formatted_address)
            );
          } else {
            <div>cant find location</div>;
          }
        })
        .catch((error) => {
          <div>Error occured!,{error}</div>;
        });
    }
  }, [location, dispatch]);

  return <Box>{currentLocation}</Box>;
};

export default Navigation;
