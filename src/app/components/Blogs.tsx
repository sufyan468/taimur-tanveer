import React, { FC } from "react";
import { BlogType } from "../utils/types";

type BlogsProps = {
  data: BlogType[];
  subtitle: string;
  title: string;
  description: string;
};

const Blogs: FC<BlogsProps> = ({ data, subtitle, title, description }) => {
  return (
    <div className="container mx-auto pt-8 px-4 pb-24" id="blogs">
      <div className="pt-4 pb-14 text-center font-medium ">
        <p className="text-red-500 font-bold ">{subtitle}</p>
        <h1 className="text-4xl pb-5 font-bold text-slate-800">{title}</h1>
        <p className="text-slate-700">{description}</p>
      </div>
      <div className="grid grid-col-3 gap-12 sm:grid-cols-1 lg:grid-cols-3">
        {data.length &&
          data.map((item) => (
            <div key={item.id} className="w-100">
              <div className="rounded-xl relative overflow-hidden cursor-pointer">
                <img
                  src={item.img}
                  className="rounded-3xl hover:scale-125 transition-all duration-800 w-full h-full"
                />
              </div>
              <div className="py-4">
                <p className="text-red-500 font-bold ">{item.title}</p>
                <p className="text-slate-700 font-bold text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
