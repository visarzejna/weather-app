import React from "react";

function Spinner() {
  return (
    <div className="h-[592px] flex justify-center items-center">
      <div
      className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-white"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
    </div>
  );
}

export default Spinner;
