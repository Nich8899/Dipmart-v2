import Link from "next/link";
import React from "react";

export default function Success() {
  return (
    <div>
      <h1 className="font-bold text-green-500 text-3xl text-center mt-4">
        Success
      </h1>
      <div className="px-24 mt-36">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-20 h-20 text-white rounded-full bg-green-500 ml-14"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      </div>
      <h1 className=" text-lg font-serif text-black-800/75 ml-24 mt-8">Your order has been placed</h1>
      <p className="ml-12 mt-2 text-sm text-gray-600/50">We will contact shortly for delivery. You will be</p>
      <p  className="ml-14 text-sm text-gray-600/50">notified by the app of your order progress</p>
      <div className="flex flex-col2 ml-4 ">
      <Link href="/">
       <div>
          <button
            name="openmodal-btn"
            type="button"
            className=" w-36 h-10 bg-gray-200 text-center  rounded-xl ml-4 mt-80 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <span className=" text-[14px] text-blue-900">Back home</span>
          </button>
        </div>
        </Link>
        <Link href="/OrderDetail">
       <div>
          <button
            name="openmodal-btn"
            type="button"
            className=" w-36 h-10  bg-blue-900 text-center  rounded-xl ml-4 mt-80 "
          >
            <span className="font-bold text-[14px] text-white">see your order</span>
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
}
