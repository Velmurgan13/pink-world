import React from "react";

function Header() {
  return (
    <header className="flex flex-col relative w-full py-4 justify-items-center items-center bg-red-100">
      <div className="flex flex-row w-full px-5">
        <div className="flex w-full text-4xl font-bold text-pink-600">
          <a href="/" className=" w-full">
            <h1>Pink World</h1>
          </a>
        </div>
        <div className="flex  flex-col items-center">
          <ul className="flex flex-row w-full font-bold text-lg">
            <li className="px-3">Home</li>
            <li className="px-3">Services</li>
            <li className="px-3">About</li>
            <li className="px-3">Team</li>
            <li className="px-3">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
