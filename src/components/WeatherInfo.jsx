import React from "react";
import moment from "moment";
// import { FaBeer } from 'react-icons/fa';

function WeatherInfo({ weather, location, isCelciusUnit }) {
  return (
    <>
      {weather.humidity ? (
        <div className="">
          <h2>
            Weather today in:{" "}
            <span className="font-semibold">{location.name}</span>
          </h2>
          <h2 className="font-semibold">
            {location.country}
            {", " + moment(location.localtime).format("LT")}
          </h2>
          <div className="flex justify-center">
            <h2>Condition: {weather.condition.text}</h2>
            <img className="w-9 h-9" src={weather.condition.icon} alt="" />
          </div>

          <h2 className="">
            <span></span> Temperature:{" "}
            <span className="text-red-300">
              {" "}
              {isCelciusUnit
                ? `${Math.floor(weather.temp_c)} °C`
                : `${Math.floor(weather.temp_f)} °F`}
            </span>
          </h2>
          <h2 className="">Wind: {weather.wind_kph} kph</h2>
          <h2 className="">Humidity: {weather.humidity}%</h2>
        </div>
      ) : (
        <div className="">
          <p className="">
            Temperature: <br></br>
            <span className="text-red-300">
              max{" "}
              {isCelciusUnit
                ? `${Math.floor(weather.day.maxtemp_c)} °C`
                : `${Math.floor(weather.day.maxtemp_f)} °F`}
            </span>
            <span className="text-blue-300">
              {" "}
              , min{" "}
              {isCelciusUnit
                ? `${Math.floor(weather.day.mintemp_c)} °C`
                : `${Math.floor(weather.day.mintemp_f)} °F`}
            </span>
          </p>
          <p className="">
            Wind:{" "}
            <span className="text-gray-400">
              {" "}
              {weather.day.maxwind_kph} kph
            </span>
          </p>
          <p>Hourly</p>
          <div className="relative flex items-center">
            <ul>
              <div
                className="w-[300px] pb-3 flex overflow-x-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-gray-800"
              >
                {weather.hour.map((hourly) => (
                  <li
                    className="m-4 min-w-[40px] text-lg flex flex-col items-center border-gray-500"
                    key={hourly.time}
                  >
                    <p className="text-white">
                      {moment(hourly.time).format("HH")}
                    </p>
                    <span>
                      <img
                        className="w-9 h-9"
                        src={hourly.condition.icon}
                        alt=""
                      />
                    </span>
                    <p className="text-red-300">
                      {isCelciusUnit
                        ? `${Math.floor(hourly.temp_c)}°`
                        : `${Math.floor(hourly.temp_f)}°`}
                    </p>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherInfo;
