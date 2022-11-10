import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SearchBar from "./components/SearchBar";
// import { useParams } from "react-router-dom";

import "./App.css";
import { fetchFromAPI } from "./utils/fetchFromAPI";

function App() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Ferizaj");
  const [error, setError] = useState("");
  // const { city } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchFromAPI(`current.json?part=snippet&q=${city}`)
      .then(({ location, current }) => {
        setLocation(location);
        setWeather(current);
        setError('');
      })
      .catch((err) => {
        const { response: { data: { error } }} = err
        setError(error.message);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="h-screen w-screen bg-weather-background bg-no-repeat bg-cover flex justify-evenly items-center">
      {/* <SearchBar /> */}
      <div className="w-8/12 h-4/5 p-3  bg-black bg-opacity-70 flex flex-col justify-evenly  items-center text-center">
        <div>
          <h1 className="text-white text-3xl p-3">Select a city:</h1>
          <form className="border w-96 p-2 flex  bg-opacity-30 bg-slate-400" onSubmit={handleSubmit}>
            <input
              type="text"
              className="ml-2 bg-transparent text-white focus:outline-0 flex-1"
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
          {error && (
            <div
              className="mt-5 p-4 mb-4 text-sm bg-opacity-70 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-medium">Oops!</span> {error}
            </div>
          )}
        </div>
        {location.name && (
          <div className="border w-96 text-white text-2xl p-5 bg-slate-400 bg-opacity-20">
            <div className="">
              <h2>City: {location.name}</h2>
              <h2 className="">
                Temperature: {Math.floor(weather.temp_c)} Celcius
              </h2>
              <h2 className="">Wind: {weather.wind_kph} kph</h2>
              <h2 className="">Humidity: {weather.humidity}%</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
