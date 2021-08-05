import React from "react";

function Hero() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center">
      <div className="flex flex-col  w-10/12 items-center justify-items-center">
        <div className="w-10/12 items-center mt-4">
          <img
            src="/images/image1.jpg"
            alt="Tajmahal"
            className="w-full rounded-2xl"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
