import React from 'react'
import PortfolioImage from "../assets/professional-photo.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Home() {

  const scrollToSection = (sectionName) => {

    const section = document.getElementsByName(sectionName)[0];
    console.log(section)
    section?.scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <div name="home"  className="h-screen w-full bg-gradient-to-b from-black 
    to-gray-800">

      <div className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row">
        
        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I am a Software Developer</h2>

          <p className='text-gray-500 py-4 max-w-md'>
          I'm a passionate Software Developer with experience in building
            scalable web applications using Python, React, Node.js, and cloud
            technologies. I thrive on solving complex problems, optimizing
            performance, and delivering user-focused solutions.
          </p>

          <div>
            <button onClick={() => scrollToSection("portfolio")}className='text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </button>
          </div>

        </div>
        <div>
          <img src={PortfolioImage} alt="portfolio-image" className="rounded-2xl mx-auto w-2/3l md:w-full"/>
        </div>

      </div>

    </div>
  )
}

export default Home;
