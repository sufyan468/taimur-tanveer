/* eslint-disable */

"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../globals.css";
import { ReviewType } from "../utils/types";

type ReviewsProps = {
  data: ReviewType[];
  subtitle: string;
  title: string;
  description: string;
};

const Reviews: FC<ReviewsProps> = ({ data, subtitle, title, description }) => {
  return (
    <div className="w-100 relative">
      <div className="container  mx-auto px-4  p-10 ">
        <div className="pt-4 pb-14 text-center font-medium ">
          <p className="text-red-500 font-bold pb-2">Testimonials</p>
          <h1 className="text-4xl pb-5 font-bold text-slate-800">
            What Clients Say
          </h1>
          <p className="text-slate-700">
            Clients who trust me and my services and are happy to share their
          </p>
        </div>
        <Swiper
          effect={"coverflow" as unknown as "slide"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={1}
        >
          {data.length > 0 &&
            data.map((item) => (
              <SwiperSlide key={item.id} className="drop-shadow-lg">
                <div className="p-8 flex flex-col gap-8 bg-white rounded-lg  text-center">
                  <Image
                    src={item.quoteImg}
                    alt={item.quoteImg}
                    height={48}
                    width={48}
                  />
                  <p className="text-regular text-justify  text-slate-700">
                    {item.description}
                  </p>
                  <div className="flex gap-4 items-center text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#F87171"
                      className="w-12 h-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <div>
                      <h1 className="text-2xl font-bold pt-2 text-slate-700">
                        {item.name}
                      </h1>
                      <p className=" pt-1 text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="skills-shape " />
    </div>
  );
};

export default Reviews;
