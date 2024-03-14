"use client";
import React, { useRef } from "react";
import { SearchIcon, LocateIcon, SunMoonIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearchIconClick = () => {
    const searchValue = inputRef.current?.value;
    const href = `/?search=${searchValue}`;
    if (searchValue) {
      router.push(href);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const searchValue = inputRef.current?.value;
      const href = `/?search=${searchValue}`;
      if (searchValue) {
        router.push(href);
      }
    }
  };
  const findLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const href = `/?lat=${latitude}&lon=${longitude}`;
      router.push(href);
    });
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center p-4  f w-full ">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <div className="w-auto">
          <SunMoonIcon size={40} />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold">WeatherCast</h1>
      </div>
      <div className="flex justify-end lg:order-3">
        <button
          className="bg-[#91A6F0] text-black rounded-lg p-2 flex gap-2"
          onClick={findLocation}
        >
          <LocateIcon size={24} />
          <p className="text-sm sm:text-lg">Current Location</p>
        </button>
      </div>
      <div className="flex justify-center col-span-2 p-4 lg:col-span-1 lg:order-1 ">
        <div className="bg-[#1E1E1E] rounded-lg flex items-center px-2 lg:w-full gap-2">
          <SearchIcon
            className="cursor-pointer"
            size={24}
            onClick={handleSearchIconClick}
          />
          <input
            ref={inputRef}
            placeholder="Search city"
            className="bg-transparent p-2 w-full active:outline-none focus:outline-none "
            type="text"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
