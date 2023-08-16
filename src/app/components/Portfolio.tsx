import { m } from "framer-motion";
import React, { FC } from "react";
import { PortfolioType } from "../utils/types";

type PortfolioProps = {
  data: PortfolioType[];
  subtitle: string;
  title: string;
  description: string;
};

const Portfolio: FC<PortfolioProps> = ({
  data,
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="w-100 relative" id="portfolio">
      <div className="container  mx-auto px-4  p-10 ">
        <div className="pt-4 pb-14 text-center font-medium ">
          <p className="text-red-500 font-bold pb-2">{subtitle}</p>
          <h1 className="text-4xl pb-5 font-bold text-slate-800">{title}</h1>
          <p className="text-slate-700">{description}</p>
        </div>
        <div className="flex flex-col gap-y-12 w-100">
          {data.length > 0 &&
            data.map((item) => (
              <div
                className="z-40 bg-center cursor-wait rounded-3xl hover:scale-105 transition-all duration-500 ease-in-out relative"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                  backgroundColor: item.background,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                  key={item.id}
                >
                  <div
                    className={`py-16 px-6  w-auto sm:w-96 md:w-96 lg:w-96  ${item.contentDirection}`}
                  >
                    <h1 className="text-3xl font-bold text-white pb-2">
                      {item.title}
                    </h1>
                    <p className="font-bold text-white pb-2">
                      <span className="font-bold text-red-300">Role :</span>{" "}
                      {item.subtitle}
                    </p>
                    <p className="font-bold text-white pb-2">
                      <span className="font-bold text-red-300">
                        Tools & Technologies :
                      </span>
                      {item.tools}
                    </p>

                    <p className="text-white">{item.description}</p>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="portfolio-shape" />
    </div>
  );
};

export default Portfolio;
