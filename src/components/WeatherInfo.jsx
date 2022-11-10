import React from "react";
import moment from "moment";

function WeatherInfo({ weather, location, isCelciusUnit }) {
  return (
    <div>
      {weather.humidity ? (
        <div className="">
          <h2>Weather today in:</h2>
          <h2>
            <span className="font-semibold">
              {location.name +
                " , " +
                location.country +
                ", " +
                moment(location.localtime).format("LT")}
            </span>
          </h2>
          <div className="flex justify-center">
            <h2>Condition: {weather.condition.text}</h2>
            <img className="w-9 h-9" src={weather.condition.icon} alt="" />
          </div>

          <h2 className="">
            Temperature:{" "}
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
          <h2>
            <span className="font-semibold">
              {location.name + " , " + location.country}
            </span>
          </h2>
          <h2 className="">
            Temperature: <br></br>
            <span className="text-red-300">
              max{" "}
              {isCelciusUnit
                ? `${Math.floor(weather.maxtemp_c)} °C`
                : `${Math.floor(weather.maxtemp_f)} °F`}
            </span>
            <span className="text-blue-300">
              {" "}
              , min{" "}
              {isCelciusUnit
                ? `${Math.floor(weather.mintemp_c)} °C`
                : `${Math.floor(weather.mintemp_f)} °F`}
            </span>
          </h2>
          <h2 className="">
            Wind:{" "}
            <span className="text-gray-400"> {weather.maxwind_kph} kph</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
