import React from "react";

function Footer() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center bg-gray-300 py-10 mt-5">
      <div className="flex flex-row w-10/12 mt-10">
        <div className=" flex flex-col w-3/12">
          <h3 className="font-bold text-xl">Search & Book</h3>
          <div className="flex w-full text-left mt-4">
            <ul className="text-md">
              <li className="mt-2">Bus</li>
              <li className="mt-2">Trains</li>
              <li className="mt-2">Flights</li>
              <li className="mt-2">Hotels</li>
              <li className="mt-2">Packages</li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col w-3/12">
          <div className=" flex flex-col w-full">
            <h3 className="font-bold text-xl">Company Info</h3>
            <div className="text-left mt-4">
              <ul className="text-md">
                <li className="mt-2">About Pink World</li>
                <li className="mt-2">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <h3 className="font-bold text-xl">B2B Offerings</h3>
            <div className="flex flex-col">
              <ul className="text-md">
                <li className="mt-2">Pink World Login</li>
                <li className="mt-2">B2B Hotels</li>
                <li className="mt-2">MICE Services</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-3/12">
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-xl">Useful Links</h3>
          </div>
          <div className="flex flex-col mt-4">
            <ul className="text-md">
              <li className="mt-2">Terms & Conditions</li>
              <li className="mt-2">Privacy Policy</li>
              <li className="mt-2">Feedback</li>
              <li className="mt-2">FAQ</li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col w-3/12">
          <div className="flex flex-col w-full">
            <h4 className="font-bold text-xl">Find Us On</h4>
          </div>
          <div className="flex flex-col mt-4">
            <ul className="text-md">
              <li className="mt-2">Facebook</li>
              <li className="mt-2">Instagram</li>
              <li className="mt-2">Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
