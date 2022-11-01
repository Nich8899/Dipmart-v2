import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartPopup from "../components/CartPopup";

export default function MyCart() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const [buttonPopup, setButtonPopup] = useState<boolean>(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect (() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 300);
  }, []);
  return (
    <div>
      <div className="fixedNav shadow-sm p-4 flex justify-between items-center bg-white">
        <Link href="/">
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
        <h1 className="text-center font-bold text-xl">My cart</h1>
        <div />
      </div>
      <div className="flex flex-col5 mt-6">
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-4">cart</h1>
          <button className=" rounded-full w-12 h-12 ml-2 bg-purple-900 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
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
        <div className=" h-1.5 rounded-full w-16 absolute top-[144px] left-20 bg-purple-900 "></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-16">Address</h1>
          <button className="absolute top-[125px] left-36 ml-6 rounded-full w-12 h-12 focus:ring-4 border-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-1 "
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
        <div className=" h-1.5 rounded-full w-16 absolute top-[145px] right-20 bg-gray-600 "></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-12">Payment</h1>
          <button className="absolute top-[125px] right-6  rounded-full w-12 h-12 border-4 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-1"
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
      <h1 className="ml-6 font-bold mt-8">Review Order</h1>
      <hr className=" ml-4 my-4 h-px bg-gray-300 border-0 w-11/12 dark:bg-gray-700"></hr>
      
      <div className=" bg-gray-200 w-full h-[180px] top-[211px] rounded-md mb-8 border-solid border-2 ">
        <div className=" flex justify-between items-center px-3 ">
          <img
            src="data:image/jpeg;base64,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"
            alt="image"
            className="w-15 h-20 mt-6 ml-4"
            onClick={() => setButtonPopup(true)}
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
        <div className=" grid grid-cols-2 ml-16  absolute top-80 right-26 text-xs">
          <p className="ml-12">
            QTY: <span className="font-bold">1</span>
          </p>
          <p>
            Capacity:<span className="font-bold">256GB</span>
          </p>
        </div>
        <div className=" grid grid-cols-2 ml-28 mt-6 absolute top-[330px] left-1">
          <button className="rounded-full bg-red-900 w-5 h-5 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"></button>
          <p>Red</p>
        </div>
        <div className=" grid grid-cols-2 ml-28 mt-6 ">
          <p className="font-bold">$1,199.00</p>
          <div className="flex w-max absolute top-[390px] right-4 ">
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5  stroke-blue-900 border-2 border-indigo-500/100 rounded-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <span className="mx-2"> {count}</span>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5  stroke-blue-900 border-2 border-indigo-500/100 rounded-lg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
            <CartPopup trigger={buttonPopup}>
            </CartPopup> 
          </div>
        </div>
      </div>
      <hr className="  my-6 h-px bg-gray-200 border-0 w-12/12 dark:bg-gray-700"></hr>
      <h1 className="ml-4 font-bold">Products you might like</h1>
      <div className="grid grid-cols-2 gap-4 p-5 ">
        <div className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4   absolute left-2 top-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          <Link href={`/ProductDetail`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTnywC_K7OKJ0qmEvMjziGOjlFPdstwtfjA&usqp=CAU"
              alt="item"
              className="w-full h-[120px] object-contain "
            />
          </Link>
          <h1 className="ml-2  font-bold text-xs bg-red-6000 text-left">
            Galaxy 21 Ultra
          </h1>

          <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-4 justify-between ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" w-[30px] h-[35px] mr-2 mb-1  stroke-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className=" text-sm ml-2 flex">
              <p className="text-blue-800/100 mr-2 text-sm ml-2 mt-2">$1399</p>
              <p className="line-through  text-red-600 ml-4 mt-2">$1550</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4   absolute left-2 top-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          <Link href={`/ProductDetail`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTnywC_K7OKJ0qmEvMjziGOjlFPdstwtfjA&usqp=CAU"
              alt="item"
              className="w-full h-[120px] object-contain "
            />
          </Link>
          <h1 className="ml-2  font-bold text-xs bg-red-6000 text-left">
            Galaxy 21 Ultra
          </h1>

          <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-4 justify-between ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" w-[30px] h-[35px] mr-2 mb-1  stroke-blue-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className=" text-sm ml-2 flex">
              <p className="text-blue-800/100 mr-2 text-sm ml-2 mt-2">$1399</p>
              <p className="line-through  text-red-600 ml-4 mt-2">$1550</p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/ReviewAddress">
      <div className="shadow-sm p-4 h-20 rounded-none border-2 flex justify-between items-center">
       <div className="grid grid-cols-2 gap-4  ">
       <h1 className="text-blue-900 font-bold ml-2 mt-6">$1,199.00</h1>
         <button className="bg-blue-900 w-40 h-9 rounded-lg mt-2">
         <span className="font-bold text-[14px]  text-white">CheckOut</span>
         </button>
       </div>
       <h1 className="absolute mb-3 ml-2 text-xs text-slate-500">Total</h1>
        <div />
      
      </div>
      </Link>
    </div>
  );
}
