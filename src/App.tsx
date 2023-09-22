// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [country, setCountry] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const fetchCounties = async () => {
//     try {
//       const res = await fetch("https://restcountries.com/v3.1/all");
//       const data = await res.json();
//       setCountry(data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching countries:", error);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       fetchCounties();
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       <div style={{ marginBottom: "16px" }}>
//         {isLoading ? (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <div className="lds-dual-ring"></div>
//           </div>
//         ) : (
//           <select>
//             <option value="">Select a country</option>
//             {country.length > 0 ? (
//               country.map((cont: any, index: number) => (
//                 <option key={index} value={cont.name.common}>
//                   {cont.name.common}
//                 </option>
//               ))
//             ) : (
//               <option value="">No countries available.</option>
//             )}
//           </select>
//         )}
//       </div>
//       {/* Other content */}
//     </div>
//   );
// }

// export default App;
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const { countries }: GlobalState = useAppSelector((state: any) => state);
  // const countries = useAppSelector((state: GlobalState) => state.countries);
  console.log(countries);

  return (
    <div>
      {countries.map((country: CountryType) => {
        return <div>{country.name.official}</div>;
      })}
      <div>hahh</div>
    </div>
  );
};

export default App;
