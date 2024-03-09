import Image from "next/image";
import React from "react";
import { SearchIcon, LocateIcon, SunMoonIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center p-4">
      <div className="flex gap-2 items-center">
        <SunMoonIcon size={30} />
        <h1 className="text-2xl">WeatherCast</h1>
      </div>
      <div className="flex justify-end lg:order-3">
        <button className="bg-[#91A6F0] text-black rounded-lg p-2 flex gap-2">
          <LocateIcon size={24} />
          <p>Current Location</p>
        </button>
      </div>
      <div className="flex justify-center col-span-2 p-4 lg:col-span-1 lg:order-1 ">
        <div className="bg-[#1E1E1E] rounded-lg flex items-center px-2 lg:w-full">
          <SearchIcon size={24} />
          <input
            placeholder="Search city"
            className="bg-transparent p-2  active:outline-none focus:outline-none "
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
