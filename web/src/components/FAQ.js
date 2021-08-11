import React from "react";

function FAQ() {
  return (
    <div className="flex flex-col w-full items-center justify-items-cente py-5">
      <div className="flex flex-col w-10/12">
        <div className="text-3xl text-center m-8 w-full">
          <h4 className="font-bold">Why Pink World?</h4>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-3/12 my-5 mx-5 items-center">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 py-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className=" flex flex-col text-center">
              <h4 className="font-bold text-lg">Your Trusted Advisor</h4>
              <p className="text-left mt-3">
                We’ll answer your every question. Our experienced travel experts
                and real-time on field know-how gives us this advantage.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-3/12 my-5 mx-5 items-center">
            <div className="">
              <img
                src="/images/listening.png"
                alt="listen"
                className="h-24 w-24 py-3"
              ></img>
            </div>
            <div className=" flex flex-col text-center">
              <h4 className="font-bold text-lg">We Love Listening</h4>
              <p className="text-left mt-3">
                Your holiday, your terms. We’ll fill in the blanks to plan the
                perfect trip in the blink of an eye.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-3/12 my-5 mx-5 items-center">
            <div className="">
              <img
                src="/images/smile.jpeg"
                alt="listen"
                className="h-24 w-24 py-3"
              ></img>
            </div>
            <div className=" flex flex-col text-center">
              <h4 className="font-bold text-lg">Memorable Experience</h4>
              <p className="text-left mt-3">
                Do everything or do nothing. Either way, your holiday will be
                nothing less than extraordinary.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-3/12 my-5 mx-5 items-center">
            <div className="">
              <img
                src="/images/handcraft.png"
                alt="listen"
                className="h-24 w-24 py-3"
              ></img>
            </div>
            <div className=" flex flex-col text-center">
              <h4 className="font-bold text-lg">Handcrafted Holidays</h4>
              <p className="text-left mt-3">
                We interact with our loyal customers to co-create unique
                experiences that will take your holiday to the next level.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row  w-full h-1">
          <div className="flex w-3/12 bg-red-300 mx-5 h-full"></div>
          <div className="flex w-3/12 bg-yellow-300 mx-5 h-full"></div>
          <div className="flex w-3/12 bg-blue-400  mx-5 h-full"></div>
          <div className="flex w-3/12 bg-green-300 mx-5 h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
