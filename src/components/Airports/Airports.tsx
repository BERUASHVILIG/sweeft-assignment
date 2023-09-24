/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import { getAllAirports } from "../../utils/ajax";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { saveAllAirports } from "../../redux/actions";

const Airports = ({ code }: any) => {
  const dispatch = useAppDispatch();
  const airports = useAppSelector((state) => state.airports);

  const fetchAirports = async () => {
    try {
      const { data } = await getAllAirports(`${code}`);
      dispatch(saveAllAirports(data));
    } catch (error) {
      console.error("Error fetching airports:", error);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, [code]);

  return (
    <div>
      <h1>Airports:</h1>
      {airports.map((airport: AirportsType, index: number) => {
        return <div key={index}>{airport.name}</div>;
      })}
    </div>
  );
};

export default Airports;
