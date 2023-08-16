"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";
import {
  CursorArrowRaysIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const downloadCV = () => {
    window.open(
      "https://drive.google.com/uc?id=18k0zmbxeKEff9N3UAWNGyccNvYsbsUSA"
    );
  };
  return (
    <div>
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          lg:py-0
          md:py-0
          xl:py-0
          px-4
          text-lg text-gray-700"
        >
          <div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center  font-medium  hover:text-red-500"
            >
              <Image src={Logo} width={37} height={37} alt="Logo" />
              <h1 className="pl-3 text-2xl font-bold text-white">Dev Taimur</h1>
            </Link>
          </div>

          <button
            onClick={handleMenu}
            className="h-6 w-6 cursor-pointer md:hidden block text-white"
          >
            {showMenu ? <CursorArrowRaysIcon /> : <Bars3CenterLeftIcon />}
          </button>
          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
              py-4
              text-base text-white
              md:flex
              md:justify-between 
              gap-2
              items-center
              "
            >
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Experience
                </Link>
              </li>
              <li>
                <button
                  className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full"
                  onClick={downloadCV}
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {showMenu && (
        <div className="bg-white absolute right-full flex flex-col gap-4 z-10 top-24 w-full p-8 transition-transform duration-300 transform translate-x-full sm:translate-x-0">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            Contact
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            Experience
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full"
            onClick={downloadCV}
          >
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
