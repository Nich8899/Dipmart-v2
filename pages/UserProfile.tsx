import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutLogin from "../components/LayoutLogin";
import Popup from "../components/Popup";


type Props = {};

export default function UserProfile({}: Props) {
  const [buttonPopup, setButtonPopup] = useState<boolean>(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 300);
  }, []);
  return (
    <div>
      <LayoutLogin>
        {/* Login And Profile */}
        <div className="pl-[30px] pr-[10px] bg-slate-100 pt-6 bg-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[60px] h-[60px] text-white bg-purple-900 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-13 h-13 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col ml-[20px]">
                <span className="font-bold text-[22px]">Login</span>
                <span className="text-gray-500 text-[14px]">
                  Start Shopping
                </span>
              </div>
            </div>

            <button onClick={() => setButtonPopup(true)}> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg></button>
            <Popup trigger={buttonPopup}>
            </Popup> 
       
          </div>
          {/* Order Button and Wish List */}
          <div className="grid grid-cols-4 gap-4 p-5 ml-4">
            <div className="w-[60px] h-[43px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              <span>Orders</span>
            </div>
            <div className="w-[60px] h-[43px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  mx-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span>Wishlist</span>
            </div>

            <div className="w-[60px] h-[43px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>View</span>
            </div>
            <div className="w-[60px] h-[43px] ">
              <svg
                className="w-6 h-6  mx-4"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 1.5C0.25 1.20163 0.368526 0.915483 0.579505 0.704505C0.790483 0.493526 1.07663 0.375 1.375 0.375H21.625C21.9234 0.375 22.2095 0.493526 22.4205 0.704505C22.6315 0.915483 22.75 1.20163 22.75 1.5V7.6875C22.0041 7.6875 21.2887 7.98382 20.7613 8.51126C20.2338 9.03871 19.9375 9.75408 19.9375 10.5C19.9375 11.2459 20.2338 11.9613 20.7613 12.4887C21.2887 13.0162 22.0041 13.3125 22.75 13.3125V19.5C22.75 19.7984 22.6315 20.0845 22.4205 20.2955C22.2095 20.5065 21.9234 20.625 21.625 20.625H1.375C1.07663 20.625 0.790483 20.5065 0.579505 20.2955C0.368526 20.0845 0.25 19.7984 0.25 19.5V1.5ZM7.09562 18.375C7.21158 18.0454 7.427 17.7599 7.71214 17.5579C7.99728 17.356 8.33808 17.2475 8.6875 17.2475C9.03692 17.2475 9.37772 17.356 9.66286 17.5579C9.948 17.7599 10.1634 18.0454 10.2794 18.375H20.5V15.036C19.6549 14.6172 18.9436 13.9706 18.4463 13.1691C17.949 12.3676 17.6855 11.4432 17.6855 10.5C17.6855 9.5568 17.949 8.63235 18.4463 7.83089C18.9436 7.02943 19.6549 6.38283 20.5 5.964V2.625H10.2794C10.1634 2.95462 9.948 3.24012 9.66286 3.44208C9.37772 3.64404 9.03692 3.75251 8.6875 3.75251C8.33808 3.75251 7.99728 3.64404 7.71214 3.44208C7.427 3.24012 7.21158 2.95462 7.09562 2.625H2.5V18.375H7.09562ZM8.6875 9.375C8.23995 9.375 7.81072 9.19721 7.49426 8.88074C7.17779 8.56428 7 8.13505 7 7.6875C7 7.23995 7.17779 6.81072 7.49426 6.49426C7.81072 6.17779 8.23995 6 8.6875 6C9.13505 6 9.56428 6.17779 9.88074 6.49426C10.1972 6.81072 10.375 7.23995 10.375 7.6875C10.375 8.13505 10.1972 8.56428 9.88074 8.88074C9.56428 9.19721 9.13505 9.375 8.6875 9.375ZM8.6875 15C8.23995 15 7.81072 14.8222 7.49426 14.5057C7.17779 14.1893 7 13.7601 7 13.3125C7 12.8649 7.17779 12.4357 7.49426 12.1193C7.81072 11.8028 8.23995 11.625 8.6875 11.625C9.13505 11.625 9.56428 11.8028 9.88074 12.1193C10.1972 12.4357 10.375 12.8649 10.375 13.3125C10.375 13.7601 10.1972 14.1893 9.88074 14.5057C9.56428 14.8222 9.13505 15 8.6875 15Z"
                  fill="#4D4C4C"
                />
              </svg>
              <span>Coupons</span>
            </div>
          </div>
        </div>
        {/* {setting component} */}
        <div className="pl-[30px] pr-[10px] pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col ml-[1px]">
                <span className=" text-[20px]">Notification Setting</span>
              </div>
            </div>
            <Link href="/notification">
              <a>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="pl-[30px] pr-[10px] pt-6 text-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col ml-[1px]">
                <span className=" text-[20px]">Language</span>
                {/* <span className=" text-[16px] justify-between">
                  English
                </span> */}
              </div>
            </div>
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="pl-[30px] pr-[10px] pt-6 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col ml-[1px]">
                <span className=" text-[20px]">Privacy Policy</span>
              </div>
            </div>
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="pl-[30px] pr-[10px] pt-6 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col ml-[1px]">
                <span className=" text-[20px]">Legal Information</span>
              </div>
            </div>
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="pl-[30px] pr-[10px] pt-6 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col ml-[1px]">
                <span className=" text-[20px]">Version</span>
              </div>
            </div>
            <span className=" text-[15px] text-slate-500">1.0.0</span>
          </div>
        </div>

        {/* <div>
          <button
            name="openmodal-btn"
            type="button"
            className="w-full py-[15px] bg-blue-900 text-center  rounded-xl mt-[30px] "
          >
            <span className="font-bold text-[18px] text-white">Log Out</span>
          </button>
        </div> */}

        {/* Profile Copyright */}
        <div className="mt-[30px] w-[183px] mx-auto mt-[15px] ">
          <img
            src="https://www.dipmarts.com/wp-content/themes/dipmarts/assets/images/DiPMart-Horizontal-Logo.png"
            alt="DipMart Logo"
            className="w-[100px] h-[60px] object-contain mx-10 p-2  "
          />
          <p className="text-center text-[12px] -mt-[15px] mb-[110px]">
            Copyright © 2022 DiPMart. All <br /> rights reserved.
          </p>
        </div>
      </LayoutLogin>
    </div>
  );
}
