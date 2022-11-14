import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(city) {
      navigate(`/current/${city}`);
      setCity('');
    }
  };

  return (
    <div>
      <form
        className="border border-gray-500 w-96 p-2 flex  bg-opacity-30 bg-slate-400"
        onSubmit={handleSubmit}
      >
        <input
        placeholder="Search a city"
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
    </div>
  );
}

export default SearchBar;
