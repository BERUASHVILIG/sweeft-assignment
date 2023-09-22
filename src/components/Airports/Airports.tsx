/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, useEffect } from "react";
// import { loadAllAirports } from "../../utils/ajax";
// const Airports = () => {
//   const [airports, setAirports] = useState<any>([]);

//   const fetchAirports = async () => {
//     const res = await fetch(
//       "https://api.api-ninjas.com/v1/airports?country=CN&name="
//     );
//     const data = await res.json();
//     setAirports(data);
//   };

//   useEffect(() => {
//     fetchAirports();
//   }, []);
//   return (
//     <div>
//       {airports.map((air: any) => {
//         return <div>{air}</div>;
//       })}
//     </div>
//   );
// };

// export default Airports;

import { useEffect, useState } from "react";
import { getAllAirports } from "../../utils/ajax";

const Airports = ({ name }: any) => {
  const [airports, setAirports] = useState<any>([]);
  console.log(name);
  const fetchAirports = async () => {
    try {
      const response = await getAllAirports(name);
      const data = response.data;
      setAirports(data);
    } catch (error) {
      console.error("Error fetching airports:", error);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, [name]);

  return (
    <div>
      {airports.map((airport: any, index: number) => {
        return <div key={index}>{airport.name}</div>;
      })}
    </div>
  );
};

export default Airports;
