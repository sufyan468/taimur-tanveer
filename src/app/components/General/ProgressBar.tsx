import React, { FC } from "react";
import CountingAnimation from "./CountingAnimation";

type ProgressBarProps = {
  key: number;
  percentage: number;
  label: string;
};

const ProgressBar: FC<ProgressBarProps> = ({ percentage, label }) => {
  return (
    <div className="w-100 ">
      <div className="flex pb-1 w-full content-between">
        <div className="flex-1">
          <span className="text-slate-800 text-xl font-bold">{label}</span>
        </div>
        <div className="text-right flex items-baseline">
          <CountingAnimation
            className="text-red-400 text-lg font-bold"
            finalValue={percentage}
            duration={2000}
          />
          <div className="text-red-400 text-lg font-bold">%</div>
        </div>
      </div>
      <div className=" w-100 h-2 rounded-full bg-gray-200">
        <div
          className="h-full rounded-full"
          style={{ width: `${percentage}%`, background: "#142FB5" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
