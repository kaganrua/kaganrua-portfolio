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
    <div name="home"  className="min-h-screen w-full bg-gradient-to-b from-black 
    to-gray-800 flex flex-col justify-center pt-20 pb-10">

      <div className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row">
        
        <div className='flex flex-col justify-center h-full'>
          

          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I am a Software Developer</h2>

          <p className='text-gray-500 py-4 max-w-md'>
          Turning ideas into impactful software is what I do best. As a passionate Software Developer, I specialize in building scalable web applications using Python, React, Node.js, and cloud technologies. I thrive on tackling complex problems, optimizing performance, and crafting user-focused solutions that make a difference.
          </p>

          <div className="flex justify-center md:justify-start">
            <button onClick={() => scrollToSection("portfolio")}className='text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </button>
          </div>

        </div >
        <div className="flex flex-col-reverse md:flex-row justify-center h-full items-center">
          <img src={PortfolioImage} alt="portfolio-image" className="rounded-2xl mx-auto w-2/3l md:order-2 flex flex-col justify-center"/>
        </div>

      </div>

    </div>
  )
}

export default Home;
