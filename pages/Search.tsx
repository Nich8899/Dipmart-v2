import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@material-tailwind/react";
import customAxios from "../http/axios";

function Search() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const listData = async () => {
      const res = await customAxios.get("/api/method/dipmarts_app.api.search", 
      { params: { id: text },
      });
      setSearch(res.data.message.result.product_list);
    };
    listData();
  }, [text]);
  
  
  const handleOnClick = () => {
    const findNames =
      search && search?.length > 0
        ? search?.filter((u) => u?.id === text)
        : undefined;
    setSearch(findNames);
  };
  return (
    <div>
      <div className="shadow-sm w-ful flex justify-between items-center p-4 bg-white">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>

        <Input
          className="  "
          type="text"
          placeholder="Search for phone or other "
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button disabled={!text} onClick={handleOnClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <div />
      </div>
      <h1 className="font-bold text-xs ml-2 p-4">Trending</h1>
      <div>
        {search &&
          search?.length > 0 &&
          search?.map((item: any) => {
            return (
              <div key={item.id}>
                <Link href={`/Searchsuggestion/${item.name}`}>
                <div className="flex space-x-4 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 rounded-full bg-gray-200 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                    />
                  </svg>
                  <h1 > {item.id}</h1>
                </div>
                </Link> 
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Search;
