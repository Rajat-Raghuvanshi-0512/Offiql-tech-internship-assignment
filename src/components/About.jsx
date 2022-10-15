import React from "react";
import { AIImg } from "../assets";
import data from "../aboutData.json";

const About = () => {
  return (
    <div className="bg-[#1C232B] px-5 sm:px-10 md:px-20 pt-16">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 text-[#E0ECFF]">
          <h3 className="text-white font-extrabold text-4xl md:text-5xl px-5">
            AI <span className="text-[#0070E7]">framework</span>
          </h3>
          {data.map((item) => (
            <div key={item.title} className="border-l-2 my-14 pl-5 pr-20">
              <h5 className="font-bold text-xl mb-3">{item.title}</h5>
              <p className="font-light text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 md:p-10">
          <img src={AIImg} alt="aiimg" />
        </div>
      </div>
    </div>
  );
};

export default About;
