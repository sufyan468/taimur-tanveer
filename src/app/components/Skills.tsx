import React, { FC } from "react";
import { SkillsType } from "../utils/types";
import ProgressBar from "./General/ProgressBar";

type SkillsProps = {
  data: SkillsType[];
  subtitle: string;
  title: string;
  description: string;
};

const Skills: FC<SkillsProps> = ({ data, subtitle, title, description }) => {
  return (
    <div className="w-100">
      <div className="pt-4 pb-14 text-center font-medium ">
        <p className="text-red-500 font-bold pb-2">{subtitle}</p>
        <h1 className="text-4xl pb-5 font-bold text-slate-800">{title}</h1>
        <p className="text-slate-700">{description}</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid  gap-x-28 gap-y-12 pt-8 pb-24 grid-col-2  sm:grid-cols-1 lg:grid-cols-2 ">
          {data.length > 0 &&
            data?.map((item: SkillsType) => (
              <ProgressBar
                key={item.id}
                percentage={item.percentage}
                label={item.label}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
