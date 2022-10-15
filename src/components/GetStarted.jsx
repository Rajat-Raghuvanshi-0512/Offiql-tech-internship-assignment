import React from "react";
import { HomeBanner, Logo } from "../assets";

const GetStarted = () => {
  return (
    <div className=" bg-[#0B0E15] pt-14">
      <div className="flex justify-between px-5 md:px-16">
        <img src={Logo} alt="logo" className="w-32 h-14" />
        <button className="bg-[#0070E7] text-white px-4 rounded-lg my-2 hover:bg-[#005fc4] hover:scale-95 duration-300">
          Talk to us
        </button>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full text-center leading-snug mt-4 px-4">
        Grow your Business <br /> with Email Automation
      </h2>
      <div className="flex flex-col items-center justify-center pb-14">
        <img src={HomeBanner} alt="main-banner" />
        <button className="bg-[#0070E7] text-white px-5 py-3 rounded-md hover:bg-[#005fc4] hover:scale-95 duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
