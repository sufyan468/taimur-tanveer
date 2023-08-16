import React, { FC } from "react";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import emailIcon from "../assets/icons/EmailIcon.svg";

import { ContactItemsType } from "../utils/types";

type ContactPropsType = {
  data: ContactItemsType[];
};

const Contact: FC<ContactPropsType> = ({ data }) => {
  return (
    <div className="w-100 px-2 py-20 relative">
      <div
        className="container lg:px-28 lg:py-16  p-4 px-4  mx-auto rounded-3xl"
        style={{ background: "#0B1C77" }}
        id="contact"
      >
        <div className="mb-7">
          <p className="text-red-500 font-bold ">Don't be shy</p>
          <h1 className="text-5xl pb-5 font-bold text-white">
            Drop Me a Message
          </h1>
        </div>
        <div className="grid grid-col-2 gap-16 sm:grid-cols-1 lg:grid-cols-2">
          <div className="w-100">
            <input
              type="text"
              className="form-input px-4 py-5 mb-7 rounded-ful w-full rounded-2xl fill-slate-200"
              placeholder="Name"
            />
            <input
              type="Email"
              className="peer ... form-input px-4 py-5 mb-2 rounded-ful w-full rounded-2xl fill-slate-200"
              placeholder="Email"
            />
            <p className="invisible peer-invalid:visible text-white text-sm">
              Please provide a valid email address.
            </p>
            <textarea
              className="form-textarea
            px-4 py-5 mb-2 rounded-ful w-full rounded-2xl fill-slate-200"
              minLength={20}
              rows={7}
              placeholder="Message"
            />
            <button className="bg-red-500 z-10 w-full hover:bg-red-700 text-white font-bold py-4 px-7 rounded-2xl">
              Submit
            </button>
          </div>
          <div>
            <div className="flex flex-col justify-center -space-x-14">
              <div>
                {data.length > 0 &&
                  data.map((item: ContactItemsType) => (
                    <div
                      key={item.id}
                      className="flex justify-start gap-8 mb-7"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: "#6e7fd1" }}
                      >
                        {item.title === "Address" ? (
                          <GlobeAltIcon className="h-8 w-8 text-white" />
                        ) : item.title === "Email" ? (
                          <Image src={emailIcon} alt="email" />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h1 className="text-3xl pb-1 font-bold text-white">
                          {item.title}
                        </h1>
                        <p className="text-slate-400 text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mix-blend-multiply bg-pink-900 ..."></div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-shape-right" />
      <div className="contact-shape-left" />
    </div>
  );
};

export default Contact;
