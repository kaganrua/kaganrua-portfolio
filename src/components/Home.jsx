import React from 'react';
import PortfolioImage from "../assets/professional-photo.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  const scrollToSection = (sectionName) => {
    const section = document.getElementsByName(sectionName)[0];
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 flex items-center pt-20 pb-10">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
        
        {/* Left Content - Text & Buttons */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Turning ideas into impactful software is what I do best. As a passionate Software Developer, I specialize in building scalable web applications using Python, React, Node.js, and cloud technologies. I thrive on tackling complex problems, optimizing performance, and crafting user-focused solutions that make a difference.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("work experience")}
              className="text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 cursor-pointer"
            >
              Experience
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={PortfolioImage}
            alt="portfolio"
            className="rounded-2xl w-2/3 md:w-96"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
