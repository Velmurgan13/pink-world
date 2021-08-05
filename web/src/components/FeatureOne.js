import React from "react";

function International() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center mt-5 pt-10 bg-gray-300">
      <div className="flex flex-col w-10/12">
        <div className="flex flex-col w-full items-center mt-5">
          <h3 className="font-bold text-3xl text-center shadow-md">
            International Holiday Packages
          </h3>
          <div className="flex w-10/12">
            <h5 className="text-md mt-5 mb-5">
              Whether it’s your first international trip or you have travelled
              abroad multiple times, planning a holiday to a distant land is
              always a special feeling. Our international holiday packages are
              well-made and hold a high reputation among customers who have been
              travelling with us
            </h5>
          </div>
        </div>
        <div className="flex flex-row w-full bg-indigo-200 px-10 py-10 rounded-2xl">
          <div className="w-3/12 bg-indigo-400 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/maldives.jpeg" alt="maldives"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Maldives</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹64,000
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-red-300 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/bali.jpeg" alt="bali"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Bali</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹18,500
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-green-300 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/download.jpeg" alt="paris"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Paris</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹56,000
                  <span className="text-sm">.00</span>
                </span>
                <h6 className="text-xs">Starting Price</h6>
              </div>
            </div>
          </div>
          <div className="w-3/12 bg-yellow-300 items-center mx-2 rounded-md">
            <div className="flex flex-col mx-3 my-3 items-center justify-items-center">
              <img src="/images/singapore.jpeg" alt="singapore"></img>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <h3 className="font-bold text-2xl">Singapore</h3>
                <span className="text-xs">Packages</span>
              </div>
              <div className="flex flex-col w-6/12 mx-3 pb-3">
                <span className="font-bold text-2xl text-blue-600">
                  ₹40,000
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

export default International;
