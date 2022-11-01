import Link from "next/link";
import React from "react";
import { Button } from "@material-tailwind/react";
export default function ReviewPayment() {
  return (
    <div>
      <div className="fixedNav shadow-sm p-4 flex justify-between items-center bg-white">
        <Link href="/ReviewAddress">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="text-center font-bold text-xl">Review Payment</h1>
        <div />
      </div>
      <div className="flex flex-col5 mt-6 bg-gray-200 h-32">
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-4">cart</h1>
          <button className=" rounded-full w-12 h-12 ml-2 bg-green-900 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-2 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
        <div className=" h-1.5 rounded-full w-16 absolute top-[144px] left-20 bg-green-900 "></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-16">Address</h1>
          <button className="absolute top-[125px] left-36 ml-6 rounded-full w-12 h-12  bg-green-900 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-2 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </button>
        </div>
        <div className=" h-1.5 rounded-full w-16 absolute top-[145px] right-20 bg-green-900"></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-12">Payment</h1>
          <button className="absolute top-[125px] right-6  bg-purple-900 rounded-full w-12 h-12  focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-2 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-gray-100 h-40 mt-4">
        <div className="flex space-x-4 ml-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
          <h1 className="font-bold mt-3">Payment Method:</h1>
        </div>
        <div className=" flex flex-col2 ml-7 gap-8">
          <div className="flex flex-col space-y-1 mt-7">
            <h1 className=" text-blue-900 font-bold text-[10px]">
              Cash On Delivery (COD)
            </h1>
            <Button variant="outlined" className="h-10 w-36  ">
              outlined
            </Button>
          </div>
          <div className="flex flex-col space-y-1 mt-7">
            <h1 className=" text-blue-900 font-bold text-[10px]">
              Cash On Delivery (COD)
            </h1>
            <Button variant="outlined" className="h-10 w-36 bg ">
              outlined
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
