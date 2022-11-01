import Link from "next/link";
import React, { useEffect, useState } from "react";
import customAxios from "../http/axios";

type Props = {};

function Brand({}: Props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "https://dev.dipmarts.com/api/method/dipmarts_app.api.brandlist"
      );
      const data = await res.data.message;
   
      setList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-5 ">
      {list.slice(0, 7).map((item: any) => (
        <div
          key={item.id}
          className="flex flex-col shadow-md rounded-lg bg-white text-center p-2"
        >
          <Link href={`/sellAllBrand/${item.id}`}>
            <a>
              <img
                src={item.logo}
                alt="logo"
                className="w-full h-[30px] object-contain "
              />
              <h1>{item.name}</h1>
            </a>
          </Link>
        </div>
      ))}
      <div className="flex flex-col shadow-md rounded-lg bg-blue-400 text-center p-2">
        <Link href="/Shopbybrand">
            <a>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" w-[90px] h-[33px] pr-[30px] "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
             <h1>See all</h1>
            </a>
          </Link>
      </div>
    </div>
  );
}
export default Brand;
