import React from "react";
import dayjs from "dayjs";

const Footer = () => {
  const currentYear = dayjs().format("YYYY");

  return (
    <div className="w-full p-5 bg-gray-900 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-col-1 text-center gap-16 sm:grid-cols-1 lg:grid-cols-1">
          <div className="w-100">
            <p className="text-lg text-white">
              Developed by{" "}
              <span className="text-red-400 font-bold">Abu Sufyan</span>
              {"  "}CopyRight © by {currentYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
