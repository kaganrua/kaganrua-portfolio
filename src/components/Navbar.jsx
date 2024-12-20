import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'

const links = [
    {
        id:1,
        link: "home"
    },
    {
        id:2,
        link: "about"
    },
    {
        id:3,
        link: "portfolio"
    },
    {
        id:4,
        link: "skills"
    },
    {
        id:6,
        link: "contact"
    },
    

]


function Navbar() {

  const [nav, setNav] = useState(false)

  const scrollToSection = (sectionName) => {
    const section = document.getElementsByName(sectionName)[0];
    section?.scrollIntoView({ behavior: "smooth" });
  };




  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
           <h1 className='text-5xl font-signature ml-2'> Kagan </h1> 
        </div>

       <ul className='hidden md:flex'>
        {links.map(( {id, link }) => (
            <li onClick={() => scrollToSection(link)}key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                {link}
            </li>
        ))}
       </ul>

       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500
       md:hidden">
        {nav ? <FaTimes mes size={30} /> : <FaBars size={40} />} 
       </div>

       { nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" >
        {links.map(( {id, link }) => (
            <li onClick={() => {setNav(!nav); scrollToSection(link)}} key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                {link}
            </li>
        ))}
       </ul>

       )}

       
      
    </div>
  )
}

export default Navbar;
