import React, { useEffect, useState } from "react";
import moment from "moment";
import translate from "../assets/translation";

function WeatherInfo({ weather, location, isCelciusUnit, isEnglish }) {
  const [language, setLanguage] = useState(translate.en);

  useEffect(() => {
    if (isEnglish) {
      setLanguage(translate.en);
    }
    if (!isEnglish) {
      setLanguage(translate.sq);
    }
  }, [isEnglish]);

  return (
    <>
      {weather.humidity ? (
        <div className="">
          <h2>
            {language.location}{" "}
            <span className="font-semibold">{location.name}</span>
          </h2>
          <h2 className="font-semibold">
            {location.country}
            {", " + moment(location.localtime).format("LT")}
          </h2>
          <div className="flex justify-center">
            <h2>
              {language.condition} {isEnglish && weather.condition.text}
            </h2>
            <img className="w-9 h-9" src={weather.condition.icon} alt="" />
          </div>

          <h2 className="">
            <span></span> {language.temperature}{" "}
            <span className="text-red-300">
              {" "}
              {isCelciusUnit
                ? `${Math.floor(weather.temp_c)} °C`
                : `${Math.floor(weather.temp_f)} °F`}
            </span>
          </h2>
          <h2 className="">
            {language.wind} {weather.wind_kph} kph
          </h2>
          <h2 className="">
            {language.humidity} {weather.humidity}%
          </h2>
        </div>
      ) : (
        <div className="">
          <p className="">
            {language.temperature} <br></br>
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
            {language.wind}{" "}
            <span className="text-gray-400">
              {" "}
              {weather.day.maxwind_kph} kph
            </span>
          </p>
          <p>{language.hourly}</p>
          <div className="relative flex items-center">
            <ul>
              <div className="w-[300px] pb-3 flex overflow-x-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-gray-800">
                {weather.hour.map((hourly) => (
                  <li
                    className="m-4 min-w-[40px] text-lg flex flex-col items-center"
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
