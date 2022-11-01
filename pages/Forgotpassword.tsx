import React from "react";
import Link from "next/link";
import { Input } from "@material-tailwind/react";

export default function Forgotpassword() {
  return (
    <div>
     
       
      <p className="text-xs flex justify-start items-center px-4 mt-[20px]">Please enter your phone number to continue</p>
      <div className="flex flex-wrap mt-[20px]">
        <div className="w-4/12 px-4">
          <div className="text-sm block my-4 p-2 text-blueGray-700 rounded border border-solid border-blueGray-100">
            <img
              src="data:image/png;base64,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"
              alt="khmer logo"
              className="w-6 h-6 object-contain "
            />
          </div>
        </div>
        <div className="w-8/12 px-4">
          <Input
            className=" after:content-['*'] text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"
            label="Phone Number"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 rounded-full bg-indigo-900 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-4">
        <button
          name="openmodal-btn"
          type="button"
          className="  w-full py-[10px] bg-blue-900 text-center  rounded-xl mt-[10px] "
        >
          <span className="font-bold text-[18px] text-white">Continue</span>
        </button>
      </div>
    </div>
  );
}
