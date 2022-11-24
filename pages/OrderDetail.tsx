import Link from 'next/link'
import React from 'react'



export default function OrderDetail() {
  return (
    <div>
         <div className="fixedNav shadow-sm p-4 flex justify-between items-center bg-white">
        <Link href="/ReviewPayment">
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
        <h1 className="text-center font-bold text-xl">Order Detail</h1>
        <div />
      </div>
      <div className='rounded-lg border-2 mt-4 ml-7 w-80 h-40'>
       <div className='mt-2 ml-7'>
       <span className='text-blue-900 px-8 text-xs font-bold'>ORDER IN SAL-ORD-2022-00598</span>
       <hr className="my-4 h-px mr-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
       <div className='flex flex-col2 gap-28 text-xs  text-gray-900/50'>
        <span>PLACED ON</span>
        <span>PAYMENT TYPE</span>
       </div>
       <div className='flex flex-col2 gap-12 text-[10px] font-bold mt-1'>
        <span>02 NOV 2022 10:11AM</span>
        <span className='ml-5'>CASH ON DELIVERY </span>
       </div>
       <div className='flex flex-col2 gap-24 text-xs  text-gray-900/50 mt-2'>
        <span>TOTAL AMOUNT</span>
        <span className='mr-4'>ORDER STATUS</span>
       </div>
       <div className='flex flex-col2 gap-32 text-xs font-bold mt-1'>
        <span>$600.00</span>
        <span className='ml-2'>Ordered </span>
       </div>
       </div>
      </div>
      <div className="border-2 mt-4 rounded-lg">
        <div className="flex space-x-4  ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-blue-500 mt-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <h1 className="font-bold text-md mt-4">Order Summary</h1>
        </div>
        <div className="flex space-x-4 mt-4 ml-2">
          <img 
          src="data:image/jpeg;base64,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" 
          className="w-20 h-50 object-contain ml-4" 
          alt="image" />
          <h1 className="text-md font-bold ">Iphone 14 pro max</h1>
        </div>
        <div className="flex space-x-14 absolute top-90 right-7 -mt-6 ">
           <h1 className="font-bold text-blue-900">$1450</h1>
           <button className="rounded-lg border-2 w-5 h-7  ">x1</button>
           <h1 className="font-bold ">$1450</h1>
          </div>
          <hr className=" ml-4 my-8 h-px w-11/12 bg-gray-400 border-0 dark:bg-gray-700"></hr>
          <h1 className="font-bold text-md -mt-4 ml-4">Fee Breakdown</h1>
           <div className=" flex justify-between mt-4 ml-4 mr-4 ">
            <span>Subtotal</span>
            <span>$1450</span>
           </div>
           <div className=" flex justify-between mt-3 ml-4 mr-4 ">
            <span>Delivery fee</span>
            <span>0.00</span>
           </div>
           <hr className=" ml-4 my-8 h-px w-11/12 bg-gray-400 border-0 dark:bg-gray-700"></hr>
           <div className=" flex justify-between  ml-4 mr-4 ">
            <p className="font-bold text-blue-800">Total <span className="text-blue-800 text-xs2">(Inc. VAT)</span></p>
            <span className="font-bold text-blue-800">$1450</span>
           </div>
          
      </div>
      <p className='mt-6 text-[10px] ml-4 text-gray-400'> <span className='text-red-600'>*</span> In case you want to cencel the order. please contact this number</p>
      <span className='underline decoration-sky-500  text-[10px]  ml-6 text-blue-900 font-bold'>011 233 634</span>
      <Link href="/Success">
       <div className="py-4 mt-4">
          <button
            name="openmodal-btn"
            type="button"
            className=" w-11/12 py-[13px] bg-blue-900 text-center  rounded-xl ml-4  "
          >
            <span className="font-bold text-[18px] text-white">Tracking</span>
          </button>
        </div>
        </Link> 
    </div>
  )
}