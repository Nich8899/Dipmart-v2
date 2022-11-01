import React, { useEffect, useState } from "react";
import NavbarBottom from "../components/NavbarBottom";
import Link from "next/link";
import { Input } from "@material-tailwind/react";
import customAxios from "../http/axios";

type Props = {};

function Search({}: Props) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (value.length > 0) {
    }
    const fetchData = async () => {
      const res = await customAxios.get("api/method/dipmarts_app.api.search", {
        params: {
          id: value,
        },
      });
      setResult([]);
      const data = await res.data.message.result.product_list;
      console.log("data: ", data);
      setResult(data);
    };
    fetchData();
  }, [value]);
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
        {result.map((item: any) => (
          <div key={item.id} className="w-72 text-center font-bold text-xl">
            <Input
              label="Search"
              onChange={(event) => setValue(event.target.value)}
              //   value={value}
            />
          </div>
        ))}
        <div />
      </div>
      <NavbarBottom />
    </div>
  );
}
export default Search;
