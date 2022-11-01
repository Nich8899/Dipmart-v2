import Link from 'next/link';
import React from "react";

type Props = {};

export default function checkOut({}: Props) {
  return (
    <div className="bg-gray-50"> 
      <div className="fixedNav shadow-sm p-4 flex justify-between items-center bg-white">
        <Link href="/MyCart">
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
        <h1 className="text-center font-bold text-xl">Review Address</h1>
        <div />
      </div>
      <div className="flex flex-col5 mt-6">
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
          <button className="absolute top-[125px] left-36 ml-6 rounded-full w-12 h-12  bg-purple-900 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
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
        <div className=" h-1.5 rounded-full w-16 absolute top-[145px] right-20 bg-gray-300 "></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-12">Payment</h1>
          <button className="absolute top-[125px] right-6  rounded-full w-12 h-12  bg-gray-300 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
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
      <div className=" w-[335px] h-[120px] top-[211px] rounded-md ml-5 mt-12 border-solid border-2 border-indigo-600 bg-white">
        <div className=" flex justify-between items-center px-3 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="flex space-x-20">
            <h1 className="font-bold ml-2 ">Work</h1>
            <h1 className="bg-gray-500 rounded-md w-14 h-6 text-md text-center -ml-12 ">
              Default
            </h1>
            <Link href="/EditAddress">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-blue-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            </Link>
          </div>
        </div>
        <div className="ml-2 mt-4">
          <span>B&S Boutique Online Store, Phnom Penh,</span>
          <br />
          <span>Cambodia</span>
        </div>
      </div>
      <div className=" w-[335px] h-[60px] top-[211px] bg-white rounded-md ml-5 mt-12 border-solid border-2  border-indigo-30">
        <div className="flex space-x-3 mt-4 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-blue-900 mb-2 stroke-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <Link href="/NewAddress">
          <h1 className="font-sans">Add New Address</h1>
          </Link>
        </div>
      </div>
      <Link href="/ReviewPayment">
       <div>
          <button
            name="openmodal-btn"
            type="button"
            className=" w-11/12 py-[13px] bg-blue-900 text-center  rounded-xl ml-4 mt-72 "
          >
            <span className="font-bold text-[18px] text-white">Confirm Address</span>
          </button>
        </div>
        </Link>
    </div>
  );
}
