import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import customAxios from "../../http/axios";

interface Searchsuggestion {
  product: "string";
  id: "string";
  in_wishlist: "string";
}

const Searchsuggestion = () => {
  const [result, setResult] = useState<Array<Searchsuggestion>>([]);
  const router = useRouter();
  const { id } = router.query;
  // console.log(id);
  

  useEffect(() => {
    const fetchData = async () => {
      const params = {id}
      // console.log(params);
      const res = await customAxios.get(
        "/api/method/dipmarts_app.api.search",{params}
      )
      const data = await res.data.message.result.product_list;
      setResult(data);
    
    };
    if(id){
      fetchData()
    }
    
  }, []);

  const [btnColor, setBtnColor] = useState("");
  const [success, setSuccess] = useState("");

  const handleClick = async (id: string) => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: id }
    );
    setSuccess(res.data.message);
  };

  return (
    <div>
      <div className="fixedNav shadow-sm p-4 flex flex-row justify-between w-full bg-white">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="text-center font-bold text-xl">{id}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-2 rounded-full border-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
      <div className="flex space-x-4 ml-4 mt-2 text-blue-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
        <h1>sort</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5">
        {result?.map((item: any, i: number) => (
          <div
            className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center p-3"
            key={i}
          >
            <div className=" bg-red-600 rounded-none text-[15px] absolute -left-1 top-2 -p-1">
              <h1>{item.is_top_sell}</h1>
            </div>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 rounded-full bg-slate-300 border-4 ml-16  absolute right-2 top-2 -p-1"
                  onClick={() => {
                    handleClick(item.id);
                    btnColor === "red"
                      ? setBtnColor("transparent")
                      : setBtnColor("red");
                    {
                      item.in_wishlist ? "red" : "transparent";
                    }
                  }}
                  style={{ backgroundColor: btnColor }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
            <Link href={`/ProductDetail`}>
              <img
                src={item.primary_image}
                alt="item"
                className="w-full h-[130px] object-contain "
              />
            </Link>
            <h1 className="  font-bold bg-red-6000 text-left">{item.name}</h1>

            <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-4 justify-between ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 w- -pb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className=" text-sm mr-14 flex">
                <p className="text-blue-800/100 mr-2 text-sm">
                  {item.default_price}
                </p>
                <p className="line-through  text-red-600 ml-4">
                  {item.discount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchsuggestion;
