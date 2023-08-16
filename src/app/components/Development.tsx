import React, { FC } from "react";
import Image from "next/image";
import { DevelopmentDataType } from "../utils/types";

type DevelopmentProps = {
  data: DevelopmentDataType[];
};

const Development: FC<DevelopmentProps> = ({ data }) => {
  return (
    <div className="w-100 relative  px-4" id="skills">
      <div className="container  mx-auto py-14 ">
        <div className="grid  py-14 grid-col-2  sm:grid-cols-1 lg:grid-cols-2 ">
          {data.length > 0 &&
            data.map((item: DevelopmentDataType) => (
              <div
                className={`${item.bg} h-100 p-8 sm:p-8 lg:p-16 ${item.radius} development-hover`}
                style={{
                  background: item.bg,
                }}
                key={item.id}
              >
                <div className="flex flex-col gap-6 pb-8">
                  <div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={75}
                      width={75}
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="development-shape " />
    </div>
  );
};

export default Development;
