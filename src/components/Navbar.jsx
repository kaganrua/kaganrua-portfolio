import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "work experience" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
];

function Navbar() {
    const [nav, setNav] = useState(false);

    const scrollToSection = (sectionName) => {
        const section = document.getElementsByName(sectionName)[0];
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setNav(false); // Close the menu after clicking
        }
    };

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
            <div>
                <h1 className="text-5xl font-signature ml-2">Kagan</h1>
            </div>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        onClick={() => scrollToSection(link)}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        {link}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={40} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center overflow-y-auto">
                    <ul className="w-full flex flex-col items-center gap-4">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                onClick={() => scrollToSection(link)}
                                className="cursor-pointer capitalize py-4 text-2xl text-gray-500 hover:text-white"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
