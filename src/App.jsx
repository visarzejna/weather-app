import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";
import { getData } from "./utils/fetchFromAPI";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isCelciusUnit, setIsCelciusUnit] = useState(true);
  const [ip, setIp] = useState("");

  useEffect(() => {
    getData().then((data) => setIp(data.IPv4));
  }, []);

  return (
    <BrowserRouter>
      <div className="lg:h-screen lg:w-screen  bg-weather-background bg-no-repeat bg-cover">
        <Navbar
          setIsCelciusUnit={setIsCelciusUnit}
          isCelciusUnit={isCelciusUnit}
        />
        <Routes>
          <Route path="/" exact element={<CurrentWeather ip={ip} isCelciusUnit={isCelciusUnit}/>} />
          <Route path="/current/:city" exact element={<CurrentWeather ip={ip} isCelciusUnit={isCelciusUnit}/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
