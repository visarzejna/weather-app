import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Spinner from "./Spinner";
import WeatherInfo from "./WeatherInfo";
import moment from "moment";
import SearchBar from "./SearchBar";

function CurrentWeather({ ip, isCelciusUnit }) {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { city } = useParams();

  useEffect(() => {
    if (city) {
      return;
    }
    if (ip) {
      setLoading(true);
      fetchFromAPI(`forecast.json?part=snippet&q=${ip}&days=3`)
        .then(({ location, current, forecast }) => {
          setLocation(location);
          setWeather(current);
          setForecast(forecast);
          setError("");
          setTimeout(function () {
            setLoading(false);
          }, 400);
        })
        .catch((err) => {
          const {
            response: {
              data: { error },
            },
          } = err;
          setError(error.message);
        });
    }
  }, [ip]);

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchFromAPI(`forecast.json?part=snippet&q=${city}&days=3`)
        .then(({ location, current, forecast }) => {
          setLocation(location);
          setWeather(current);
          setForecast(forecast);
          setError("");
          setTimeout(function () {
            setLoading(false);
          }, 400);
        })
        .catch((err) => {
          const {
            response: {
              data: { error },
            },
          } = err;
          setError(error.message);
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div className="p-3  bg-black bg-opacity-70 mt-44 flex justify-center ">
      <div className="flex flex-col justify-start  items-center text-center">
        <div className="sm:hidden">
          <SearchBar />
        </div>

        {error && (
          <div className="h-[592px]">
            <div
              className="w-[342px] mt-5 p-4 mb-4 text-sm bg-opacity-50 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-medium">Oops!</span> {error}
            </div>
          </div>
        )}
        {loading ? (
          <Spinner />
        ) : (
          location.name && (
            <div className="flex flex-col justify-center items-center sm:inline">
              <div className="w-[342px] sm:w-auto p-5 border border-gray my-2 text-white flex justify-center items-center text-2xl bg-slate-400 bg-opacity-20">
                <WeatherInfo
                  weather={weather}
                  location={location}
                  isCelciusUnit={isCelciusUnit}
                />
              </div>

              <ul className="flex flex-col gap-2 lg:flex-row">
                {forecast.forecastday.map((forecast) => (
                  <li key={forecast.date}>
                    <div className="border border-gray text-white flex flex-col justify-center items-center text-2xl p-5 bg-slate-400 bg-opacity-20">
                      <div className="text-red-500">
                        {moment(forecast.date).format("dddd")}
                      </div>
                      <WeatherInfo
                        className="gap-2"
                        weather={forecast}
                        location={location}
                        isCelciusUnit={isCelciusUnit}
                      />
                    </div>
                  </li>
                ))}{" "}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CurrentWeather;
