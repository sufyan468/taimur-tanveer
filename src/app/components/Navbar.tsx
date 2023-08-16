"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
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
  return (
    <div>
      <header>
        <nav
          className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-7
          md:py-0
          px-4
          text-lg text-gray-700 mb-1 sm:mb-6 md:mb-5 lg:mb-10 xl:mb-10"
        >
          <div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center  font-medium  hover:text-red-500"
            >
              <Image src={Logo} width={37} height={37} alt="Logo" />
              <h1 className="pl-3 text-2xl font-bold text-white">Dev Sufyan</h1>
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
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Service
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
                  to="blogs"
                  smooth={true}
                  duration={500}
                  className="md:p-4 font-medium  py-2 block hover:text-red-500"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <button className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full">
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
            Portfolio
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            Service
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
            to="blogs"
            smooth={true}
            duration={500}
            className="md:p-4 font-medium  py-2 block hover:text-red-500"
          >
            Blogs
          </Link>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-7 rounded-full">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
