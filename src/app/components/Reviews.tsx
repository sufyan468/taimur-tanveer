"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../globals.css";
import Quotes from "../assets/quotes.svg";
import { ReviewType } from "../utils/types";

type ReviewsProps = {
  data: ReviewType[];
  subtitle: string;
  title: string;
  description: string;
};

const Reviews: FC<ReviewsProps> = ({ data, subtitle, title, description }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="w-100 relative">
      <div className="container  mx-auto px-4  p-10 ">
        <div className="pt-4 pb-14 text-center font-medium ">
          <p className="text-red-500 font-bold pb-2">Testimonials</p>
          <h1 className="text-4xl pb-5 font-bold text-slate-800">
            What Clients Say
          </h1>
          <p className="text-slate-700">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
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
                    <img src={item.userImg} className="rounded-full" />
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
