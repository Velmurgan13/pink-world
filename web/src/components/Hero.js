import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Hero() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center">
      <div className="block w-10/12">
        <div className="relative mt-5">
          <Carousel
            axis="horizontal"
            showArrows={true}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
          >
            <img
              src="images/carousel-3.jpeg"
              alt="carousel-1"
              className="rounded-lg"
            />

            <img
              src="images/carousel-4.jpeg"
              alt="carousel-4"
              className="rounded-lg"
            />

            <img
              src="images/carousel-2.jpeg"
              alt="carousel-2"
              className="rounded-lg"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Hero;
