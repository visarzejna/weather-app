import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";
import { getData } from "./utils/fetchFromAPI";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isCelciusUnit, setIsCelciusUnit] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);
  const [ip, setIp] = useState("");

  useEffect(() => {
    getData().then((data) => setIp(data.IPv4));
  }, []);

  return (
    <BrowserRouter>
      <div className="lg:h-screen lg:w-screen font-roboto bg-weather-background bg-no-repeat bg-cover">
        <Navbar
          setIsCelciusUnit={setIsCelciusUnit}
          setIsEnglish={setIsEnglish}
          isEnglish={isEnglish}
          isCelciusUnit={isCelciusUnit}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <CurrentWeather
                ip={ip}
                isEnglish={isEnglish}
                isCelciusUnit={isCelciusUnit}
              />
            }
          />
          <Route
            path="/current/:city"
            exact
            element={<CurrentWeather ip={ip} isEnglish={isEnglish} isCelciusUnit={isCelciusUnit} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
