import React, { useState } from "react";
import SearchBar from "./SearchBar";

function Navbar({ isCelciusUnit, setIsCelciusUnit, isEnglish, setIsEnglish }) {
  
  const handleUnitType = () => {
    setIsCelciusUnit(!isCelciusUnit);
  };
  
  const handleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <nav className=" bg-black bg-opacity-60 w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="inline-flex">
        <a className="_o6689fn px-2" href="/">
          <div className="hidden text-white md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
        </a>
      </div>
      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <SearchBar />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleUnitType}
          className="inline-flex mx-2 items-center relative px-2 border rounded-full hover:shadow-lg"
        >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 w-16 ">
            <span className="text-white">°C | °F</span>
          </div>
        </button>
        <button
          type="button"
          onClick={handleLanguage}
          className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
        >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 w-16 ">
            <span className="text-white">EN | SQ</span>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
