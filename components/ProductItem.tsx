import Link from "next/link";
import React, { useState } from "react";
import customAxios from "../http/axios";
import { incrementAddCart} from "../slices/counterSlice";
import { useDispatch } from "react-redux";

function ProductItem({ product }: any) {
  const [success, setSuccess] = useState("");
  const [btnColor, setBtnColor] = useState(product.in_wishlist);
  const dispatch = useDispatch();
  const handleClick = async () => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: product.id }
    );
    setSuccess(res.data.message);
    setBtnColor(false);
  };

  const handleChangeColor1 = async () => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: product.id }
    );
    setSuccess(res.data.message);
    setBtnColor(true);
    // dispatch(decrementWishList())
  };
  const handleAdd = async () => {
    const cart = {
      product_id: product.id,
      selection: product.pre_spec.spec,
      qty: 1,
      noted: "",
    };

    const res = await customAxios.post(
      "api/method/dipmarts_app.api.addtocart",
      cart
    );
  };

  return (
    <div className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center p-3">
      <div className=" bg-blue-400 rounded-none text-[15px] absolute -left-1 top-2 -p-1">
        <h1>{product.is_top_sell}</h1>
      </div >
      <div>
        {btnColor ? (
          <button
            type="button"
            className={
              "rounded-full bg-slate-300 border-4 ml-16  absolute right-2 top-2 -p-1"
            }
            name="wishlistfalse"
            onClick={handleClick}
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-600 "
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            {product.in_wishlist}
          </button>
        ) : (
          <button
            name="wishlisttrue"
            type="button"
            className={
              "rounded-full bg-slate-300 border-4 ml-16  absolute right-2 top-2 -p-1"
            }
            onClick={handleChangeColor1}
            //onChange={() => dispatch(decrementWishList())}
          >
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {product.in_wishlist}
          </button>
        )}
      </div>
      <Link href={`/ProductDetail/${product.id}`}>
        <img
          src={product.primary_image}
          alt="item"
          className="w-full h-[140px] object-contain "
        />
      </Link>
      <h1 className="  font-bold  bg-red-6000 text-left">
        {product.name}
      </h1>

      <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-4 justify-between ">
        <div onClick={() => dispatch(incrementAddCart())}>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" w-6 h-6 -pb-4 rounded-full border-2 stroke-blue-500"
            onClick={() => {
              handleAdd();
              {
                product.spec;
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
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
