import Link from "next/link";
import React, { useEffect, useState } from "react";
import customAxios from "../http/axios";

function ProductItem({ product }: any) {
  const [btnColor, setBtnColor] = useState("");
  const [success, setSuccess] = useState("");

  const handleClick = async () => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: product.id }
    );
    setSuccess(res.data.message);
  };

  return (
    <div className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center p-3">
      <div className=" bg-red-600 rounded-none text-[15px] absolute -left-1 top-2 -p-1">
        <h1>{product.is_top_sell}</h1>
      </div>
      <div>
        <button
         
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 rounded-full bg-slate-300 border-4 ml-16  absolute right-2 top-2 -p-1"
             onClick={() =>  {
              handleClick()
            btnColor === "red"
              ? setBtnColor("transparent")
              : setBtnColor("red");
              {product.in_wishlist ? "red" : 'transparent'}
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
        src={product.primary_image}
        alt="item"
        className="w-full h-[140px] object-contain "
      />
      </Link>
      <h1 className="  font-bold w-[108px] h-[15px] bg-red-6000 text-left">
        {product.name}
      </h1>

      <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-4 justify-between ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 w-[30px] h-[35px] -pb-4"
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
            ${product.default_price}
          </p>
          <p className="line-through  text-red-600 ml-4">{product.discount}</p>
        </div>
      </div>
     
    </div>
  );
}

export default ProductItem;
