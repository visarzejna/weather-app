import React from "react";

function Footer() {
  return (
    <footer className=" text-center lg:text-left">
      <div
        className="text-gray-700 text-center p-4 bg-black bg-opacity-25"
      >
        © 2022 Copyright:{" "}
        <a className="text-gray-800" href="https://github.com/visarzejna">
          Visar Zejna
        </a>
      </div>
    </footer>
  );
}

export default Footer;
