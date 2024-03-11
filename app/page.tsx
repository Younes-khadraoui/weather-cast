import Image from "next/image";
import {
  Calendar,
  LocateFixed,
  Wind,
  Droplets,
  Waves,
  Sun,
  Moon,
  HeartHandshakeIcon,
  Eye,
} from "lucide-react";
import { fetchWeather } from "@/hooks/useWeather";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const data = await fetchWeather({ search: searchParams.search || "london" });

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="bg-[#1E1E1E] rounded-lg mx-10 p-6 max-h-fit  mb-4 lg:mb-[4.3rem]">
        <h2 className="text-xl font-bold">NOW</h2>
        <div className="py-4 flex gap-4 items-center justify-around">
          <p className="text-5xl font-bold">{data?.current.temp_c}°c</p>
          <Image
            src={`https:${data?.current.condition.icon}` || ""}
            alt="Weather icon"
            width={120}
            height={60}
            className="w-auto"
          />
        </div>
        <p className="font-semibold text-lg opacity-80">
          {data?.current.condition.text}
        </p>
        <hr className="my-4 border-gray-500" />
        <div className="flex gap-2 items-center mb-3">
          <Calendar />
          <p className="text-xl"> {data?.location.localtime}</p>
        </div>
        <div className="flex gap-2 items-center">
          <LocateFixed />
          <p className="text-xl">{data?.location.name}</p>
        </div>
      </div>
      {/* Todays Highlights */}
      <div className="bg-[#1E1E1E] rounded-lg mx-10  lg:col-span-2">
        <h2 className="text-xl p-4 font-bold">Todays Highlights</h2>
        <div className="bg-[#272727] m-4 p-4 rounded-lg">
          <p className="text-lg font-semibold mb-4">Air Quality index</p>
          <div className="flex gap-4 items-center justify-around">
            <Wind size={40} />
            <div>
              <p className="text-center text-lg opacity-70">Kph</p>
              <p className="text-2xl text-center font-semibold">
                {data?.current.wind_kph}
              </p>
            </div>
            <div>
              <p className="text-center text-lg opacity-70">Mph</p>
              <p className="text-2xl text-center font-semibold">
                {data?.current.wind_mph}
              </p>
            </div>
            <div>
              <p className="text-center text-lg opacity-70">Degree</p>
              <p className="text-2xl text-center font-semibold">
                {data?.current.wind_degree}
              </p>
            </div>
          </div>
        </div>
        {/* meow */}
        <div className="flex">
          <div className="bg-[#272727] m-4 p-4 rounded-lg flex-grow">
            <p className="text-lg opacity-80 mb-4">Humidity</p>
            <div className="flex items-center gap-4">
              <Droplets size={45} />
              <p className="text-3xl font-semibold">
                {data?.current.humidity}%
              </p>
            </div>
          </div>
          <div className="bg-[#272727] m-4 p-4 rounded-lg flex-grow">
            <p className="text-lg opacity-80 mb-4">Pressure</p>
            <div className="flex items-center gap-4">
              <Waves size={45} />
              <p className="text-3xl font-semibold">
                {data?.current.pressure_mb}hPa
              </p>
            </div>
          </div>
        </div>
        {/* meow */}
        <div className="bg-[#272727] m-4 p-4 rounded-lg">
          <p className="text-lg font-semibold mb-4">Sunrise & Sunset</p>
          <div className="flex gap-4 items-center justify-around">
            <Sun size={40} />
            <div>
              <p className="text-center text-lg opacity-70">Sunrise</p>
              <p className="text-2xl text-center font-semibold">
                {data?.forecast.forecastday[0].astro.sunrise}
              </p>
            </div>
            <Moon size={40} />
            <div>
              <p className="text-center text-lg opacity-70">Sunset</p>
              <p className="text-2xl text-center font-semibold">
                {data?.forecast.forecastday[0].astro.sunset}
              </p>
            </div>
          </div>
        </div>
        {/* meow */}
        <div className="flex">
          <div className="bg-[#272727] m-4 p-4 rounded-lg flex-grow">
            <p className="text-lg opacity-80 mb-4">Visibility</p>
            <div className="flex items-center gap-4">
              <Eye size={45} />
              <p className="text-3xl font-semibold">
                {data?.current.humidity}%
              </p>
            </div>
          </div>
          <div className="bg-[#272727] m-4 p-4 rounded-lg flex-grow">
            <p className="text-lg opacity-80 mb-4">Feels like</p>
            <div className="flex items-center gap-4">
              <HeartHandshakeIcon size={45} />
              <p className="text-3xl font-semibold">
                {data?.current.feelslike_c}°C
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Toady at  */}
      <div className="mx-10 lg:col-span-2 lg:order-2 ">
        <h2 className="text-xl p-4 font-bold ">Today at</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {data?.forecast.forecastday[0].hour.slice(0, 6).map((hour, index) => (
            <div
              className="bg-[#1E1E1E] rounded-lg mb-4 p-2 grid justify-center items-center lg:gap-4 lg:py-4"
              key={index}
            >
              <p className="font-semibold text-2xl text-center">
                {hour.time.slice(11, 16)}
              </p>
              <Image
                src={`https:${hour.condition.icon}`}
                alt="Weather icon"
                width={80}
                height={60}
                className="w-auto"
              />
              <p className="font-semibold text-xl text-center opacity-80">
                {hour.temp_c}°C
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:mt-[-4.3rem]">
        <h2 className="mx-10 text-xl p-4 font-bold">5 days forecast</h2>
        <div className="bg-[#1E1E1E] rounded-lg mx-10 py-4">
          {data?.forecast.forecastday.map((day, index) => (
            <div className="flex items-center justify-around" key={index}>
              <div className="flex items-center py-2">
                <Image
                  src={`https:${day.day.condition.icon}`}
                  alt="Weather icon"
                  width={80}
                  height={60}
                  className="w-auto"
                />
                <p className="font-semibold text-2xl text-center opacity-80">
                  {day.day.avgtemp_c}°c
                </p>
              </div>
              <p className="font-medium text-2xl text-center">{day.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
