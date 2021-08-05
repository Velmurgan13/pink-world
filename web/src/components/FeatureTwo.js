import React from "react";

function Domestic() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center py-10 bg-gray-300">
      <div className="flex flex-col w-10/12">
        <div className="flex flex-col w-full items-center mt-5">
          <h3 className="font-bold text-3xl text-center shadow-md">
            Domestic Holiday Packages
          </h3>
          <div className="flex w-10/12">
            <h5 className="text-md mt-5 mb-5">
              Travelling abroad for a holiday is a great thing but there isn’t
              anything that beats the diversity of landscapes and cultures in
              India. We inspire local travellers to travel more in India, as our
              India holiday packages acquaint travellers with the incredible
              beauty of the country. Take a look at top selling holiday packages
              in India
            </h5>
          </div>
        </div>
        <div className="flex flex-row w-full bg-indigo-200 px-10 py-10 rounded-2xl">
          <div className="w-3/12 bg-indigo-400 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/goa.jpeg" alt="goa"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Goa</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹14,000
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-red-300 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/mumbai.jpeg" alt="paris"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Mumbai</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹13,500
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-green-300 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/tajmahal.jpeg" alt="paris"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Agra</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹20,000
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-yellow-300 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/kerala.jpeg" alt="paris"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Kerala</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹27,800
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domestic;
