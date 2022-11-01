import React from "react";

export default function CartPopup(props) {
  return props.trigger ? (
    <div className=" position fixed z-30 bottom-0 right-0 rounded-lg left-0 w-[100%] h-[45vh] bg-white flex justify-center items-center">
      <div className="position w-[100%] mb-64 bg-gray-50 ">
        <div className=" w-full h-[180px] top-[211px] rounded-lg    border-solid border-1 bg-white">
          <div className=" flex justify-between items-center px-3 ">
            <img
              src="data:image/jpeg;base64,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"
              alt="image"
              className="w-15 h-20 mt-6 ml-4"
            />
            <h1 className="mr-24 mb-8">iPhone 13 Pro</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mb-8 stroke-blue-900 border-2 border-indigo-500/100 rounded-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className=" grid grid-cols-2   absolute top-[20px] left-16 text-xs">
            <p className="ml-14">
              QTY: <span className="font-bold">1</span>
            </p>
            <p>
              Capacity:<span className="font-bold">256GB</span>
            </p>
          </div>
          <div className=" grid grid-cols-2 ml-28 mt-6 ">
            <p className="font-bold">$1,199.00</p>
          </div>
          <div className=" grid grid-cols-2 ml-28 mt-6 absolute top-[30px] left-1">
            <button className="rounded-full bg-red-900 w-5 h-5 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"></button>
            <p>Red</p>
          </div>
          <hr className=" ml-4 my-4 h-px bg-gray-200 border-0 w-11/12 dark:bg-gray-700"></hr>
          <h1 className="ml-6 font-bold mt-4">Capacity</h1>
          <div className=" pl-4 pt-4 ml-2">
            <button
              type="button"
              className=" rounded-lg w-12 h-7 mr-4 bg-gray-500 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              128GB
            </button>
            <button
              type="button"
              className=" rounded-lg w-12 h-7 mr-4 bg-gray-500 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              256GB
            </button>
            <button
              type="button"
              className=" rounded-lg w-12 h-7 mr-4 bg-gray-500 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              512GB
            </button>
            <button
              type="button"
              className=" rounded-lg w-12 h-7 mr-4 bg-gray-500 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              1TB
            </button>
          </div>
          <div className="ml-2 pl-4 pt-4 ">
            <p className="slate-50">Color: <span className="font-bold">Red</span></p>
            <button className={`rounded-full bg-orange-800 w-8 h-8 mt-2 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}></button>
            <button className={`rounded-full bg-black w-8 h-8 mx-4 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}></button>
            <button className={`rounded-full bg-blue-900 w-8 h-8 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}></button>
            <button className={`rounded-full bg-pink-600 w-8 h-8 mx-4 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}></button>
            <button className={`rounded-full bg-purple-800 w-8 h-8 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}></button>
          </div>
          <div className="grid grid-cols-2 ml-7 mt-2">
          <button
            name="openmodal-btn"
            type="button"
            className=" w-36 h-10 py-[6px]  border-2 border-blue-500 text-center rounded-lg  "
          >
            <span className="font-bold text-[14px]  text-blue-900">Product Detail </span>
          </button>
          <button
            name="openmodal-btn"
            type="button"
            className=" w-36 h-10 py-[6px] bg-blue-900 text-center rounded-lg  "
          >
            <span className="font-bold text-[14px]  text-white">Confirm </span>
          </button>
          </div>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
}
