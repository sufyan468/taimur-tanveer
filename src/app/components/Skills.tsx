import React, { FC } from "react";
import { SkillsType } from "../utils/types";
import ProgressBar from "./General/ProgressBar";

type SkillsProps = {
  data: SkillsType[];
  subtitle?: string;
  title: string;
  description?: string;
};

const Skills: FC<SkillsProps> = ({ data, subtitle, title, description }) => {
  return (
    <div className="w-100" id="experience">
      <div className="pt-4 pb-14 text-center font-medium ">
        <p className="text-red-500 font-bold pb-2">{subtitle}</p>
        <h1 className="text-4xl pb-5 font-bold text-slate-800">{title}</h1>
        <p className="text-slate-700">{description}</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid  gap-x-28 gap-y-12 pt-8 pb-24 grid-col-2  sm:grid-cols-1 lg:grid-cols-2 ">
          {/* {data.length > 0 &&
            data?.map((item: SkillsType) => (
              <ProgressBar
                key={item.id}
                percentage={item.percentage}
                label={item.label}
              />
            ))} */}

          <div className="flex w-full content-between rounded-lg px-8 py-4 text-white shadow-xl bg-slate-600  border-red-500 border-l-2 hover:bg-slate-600 hover:text-white">
            <div className="flex-1">
              <span className=" text-xl font-bold">
                ➢ Innovations Group UAE (DU){" "}
              </span>
              <p>• Senior Android Developer </p>
              <p>• Feb2023 – Present</p>
            </div>
          </div>

          <div className="flex w-full content-between rounded-lg px-8 py-4 shadow-xl border-red-400 border-l-2 hover:bg-slate-600 hover:text-white">
            <div className="flex-1">
              <span className=" text-xl font-bold">➢ Celfocus</span>
              <p>• Senior Android Developer </p>
              <p>• Jan2022 – Feb 2023</p>
            </div>
          </div>

          <div className="flex w-full content-between rounded-lg px-8 py-4 shadow-xl border-red-400 border-l-2 hover:bg-slate-600 hover:text-white">
            <div className="flex-1">
              <span className=" text-xl font-bold hover:text-white">
                ➢ Systems Limited
              </span>
              <p>• Senior Software Engineer</p>
              <p>• Aug 2019 - Jan 2022</p>
            </div>
          </div>

          <div className="flex w-full content-between rounded-lg px-8 py-4 shadow-xl border-red-400 border-l-2 hover:bg-slate-600 hover:text-white">
            <div className="flex-1">
              <span className=" text-xl font-bold">➢ Glixen Technologies</span>
              <p>• Android Application Developer</p>
              <p>• Nov 2017 - Aug 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
