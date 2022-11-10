import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Spinner from "./Spinner";
import WeatherInfo from "./WeatherInfo";
import moment from "moment";

function CurrentWeather({ ip, isCelciusUnit }) {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { city } = useParams();

  useEffect(() => {
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
          }, 500);
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
      fetchFromAPI(`forecast.json?part=snippet&q=${city}&days=4`)
        .then(({ location, current, forecast }) => {
          setLocation(location);
          setWeather(current);
          setForecast(forecast);
          setError("");
          setTimeout(function () {
            setLoading(false);
          }, 500);
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
    <div className="p-3  bg-black bg-opacity-70 h-2/3 mt-44 flex justify-center ">
      <div className=" flex flex-col justify-evenly  items-center text-center">
        {error && (
          <div
            className="mt-5 p-4 mb-4 text-sm bg-opacity-50 text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Oops!</span> {error}
          </div>
        )}
        {loading ? (
          <Spinner />
        ) : (
          location.name && (
            <div>
              <div className="border border-gray  text-white flex justify-center items-center text-2xl p-5 bg-slate-400 bg-opacity-20">
                <WeatherInfo
                  weather={weather}
                  location={location}
                  isCelciusUnit={isCelciusUnit}
                />
              </div>

              <ul className="flex">
                {forecast.forecastday.map((forecast) => (
                  <li key={forecast.date}>
                    <div className="border border-gray   text-white flex flex-col justify-center items-center text-2xl p-5 bg-slate-400 bg-opacity-20">
                      <div className="text-red-500">
                        {moment(forecast.date).format("dddd")}
                      </div>
                      <WeatherInfo
                        className="gap-2"
                        weather={forecast.day}
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
