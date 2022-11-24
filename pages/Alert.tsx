
import Link from "next/link";
import React, { useEffect, useState } from "react";
import customAxios from "../http/axios";
 
function Alert() {
  const [alert, setAlert] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "/api/method/dipmarts_app.api.notificationlist",
        { params: { status: "promotion" } }
      );
      const data = await res.data.message.result;
      setAlert(data);
    };
    fetchData();
  }, []);

  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <div className="shadow-sm p-4 flex justify-between items-center">
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
        <h1 className="text-center font-bold text-xl">Notification</h1>
        <div />
      </div>
     
     <div  className="w-full bg-gray-200 ">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row mr-2"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "inline-block bg-transparent text-blue-600 font-medium text-xs leading-tight rounded-full w-9 h-9 hover:text-white hover:bg-blue-800 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" +
                  (openTab === 1)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                // role="tablist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"
                  />
                </svg>
            
                <br />
                <span className="text-blue-900">New</span>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "inline-block bg-transparent text-blue-600 font-medium text-xs leading-tight rounded-full w-9 h-9 hover:text-white hover:bg-blue-800 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" +
                  (openTab === 2)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                // role="tablist"
              >
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"
                  />
                </svg>
               
              
                <br />
                <span className="text-blue-900 -ml-2">promotion</span>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "inline-block bg-transparent text-blue-600 font-medium text-xs leading-tight rounded-full w-9 h-9 hover:text-white hover:bg-blue-800 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" +
                  (openTab === 3)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link1"
                
              >
           
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>{" "}
                <br />
                <span className="text-blue-900">Order</span>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "inline-block bg-transparent text-blue-600 font-medium text-xs leading-tight rounded-full w-9 h-9 hover:text-white hover:bg-blue-800 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" +
                  (openTab === 4)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link1"
                // role="tablist"
              >
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <br />
                <span className="text-blue-900">Delivery</span>
              </a>
            </li>
          </ul>
      </div>
      <div  className="relative flex flex-col bg-white w-full mb-6 shadow-lg rounded">
      {
        alert.length === 0
        ? 
        <div className="ml-20  h-[0px]">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-52 h-50 mt-32 stroke-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
        />
      </svg>
        <h1 className="ml-3 mt-6 font-bold">
          No Notification Ring Now!
        </h1>
        <div className="text-gray-400 mr-2">
          <p>
            We will let you know when we gets news. discount. for you
          </p>
          </div>
        </div>
      
        : alert.map((item: any) => (
          <div key={item.id} className="px-20 py-5  h-[692px]">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1 ">
              </div>
            </div>
          </div>
          ))
      }
        </div>
     </div>
    
  );
}

export default Alert;
