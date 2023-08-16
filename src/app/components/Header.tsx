import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import UserImg from "../assets/sufyan.png";
import Circle from "../assets/circle.png";
import Cup from "../assets/cup.svg";
import CountingAnimation from "./General/CountingAnimation";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div
      className="container-fluid w-full bg-harmonies	ck min-h-screen bg-[url('https://devman-react.vercel.app/img/hero/1.jpg')] "
      id="home"
    >
      <div className="container mx-auto relative">
        <Navbar />
        <div className="grid grid-col-2 gap-16 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8  sm:grid-cols-1 lg:grid-cols-2 py-5 sm:py-10 md:py-15 lg:py-20 xl:py-20  px-4 text-white">
          <div>
            <h3 className="text-3xl font-medium">Hello I'm</h3>
            <h1 className="text-7xl font-semibold mb-7">Taimur Tanveer</h1>
            <h6 className="text-3xl font-medium mb-4">
              Senior Android Developer
            </h6>
            <p className="text-xl mb-8">
              Software Developer, specializing in the development, testing, and
              implementation of mobile applications.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-800  font-bold py-3 px-9 rounded-full mt-4 hover:bg-red-600 transition duration-300 ease-in-out">
                Get a Qoute
              </button>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-4 py-3 font-bold rounded-full mt-4 hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className=" sm:ps-0 lg:ps-44 ">
            <div className="relative">
              <Image
                src='https://drive.google.com/file/d/1NVuyptHAe7N1l_evXhC5VqHqxHQr_CfH/view?usp=sharing'
                alt="Cover"
                style={{ borderRadius: "12px" }}
              />
              <div className="absolute  -top-14  -right-1 md:-right-14 lg:-right-14 xl:-right-14 bg-white p-8 rounded-xl">
                <Image src={Cup} alt="Cup" width={45} height={45} />
              </div>
              <div className="absolute bottom-2 lg:bottom-2 -left-1 md:-left-14 lg:-left-14 xl:-left-14 bg-white py-4 px-2 rounded-xl w-156 ">
                <div className="flex items-center gap-2">
                  <CountingAnimation
                    className="text-5xl font-bold text-blue-400 animate-number"
                    finalValue={6}
                    duration={1000}
                  />
                  <h3 className="text-1xl font-bold text-slate-800">
                    Years of <br /> Experience
                  </h3>
                </div>
              </div>
              {/* <div className="absolute -bottom-14 -left-14 d-sm-none">
                <Image src={Circle} alt="Circle" width={120} height={122} />
              </div> */}
              <div className="absolute bottom-8 -right-1 md:-right-14 lg:-right-14 xl:-right-14 bg-white py-4 px-2 rounded-xl w-156 ">
                <div className="flex items-center gap-3">
                  <CountingAnimation
                    className="text-5xl font-bold text-red-400"
                    finalValue={14}
                    duration={1000}
                  />
                  <h3 className="text-1xl font-bold text-slate-800">
                    Projects <br /> Completed
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
