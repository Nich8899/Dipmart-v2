import React from "react";
// import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarBottom from "../components/NavbarBottom";
import Navbarbybrand from "../components/Navbarbybrand";
import customAxios from "../http/axios";

interface Props {
  id: string;
  name: string;
  logo: string;
  Apple: string;
}

function Shopbybrand() {
  const [value, setValue] = useState("");
  const [brand, setBrand] = useState<Array<Props>>([]);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "https://dev.dipmarts.com/api/method/dipmarts_app.api.brandlist"
      );

      const data = await res.data.message;
      setBrand(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "https://dev.dipmarts.com/api/method/dipmarts_app.api.brandproduct",
        { params: { id: value ? value : "Apple" } }
      );
      //[ (brand=== ? value : " ")]
      setproduct(res.data.message.product_list);
      console.log(product);
    };
    fetchData();
  }, [value]);

  console.log(value);

  return (
    <div>
      <Navbarbybrand />
      <br />
      <div className="  absolute ">
        {brand.map((item: any) => (
          <ul className="relative" key={item.id}>
            <li className="relative round-lg shadow-md ">
              <button
                className="flex flex-col  rounded-none text-center p-1 overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap  hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                // href={"Shopbybrand?id:"+ item.name}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                onClick={() => setValue(item.id)}
              >
                <img
                  src={item.logo}
                  alt="logo"
                  className=" w-[70px] h-[30px] object-contain "
                />

                <h1>{item.name}</h1>
              </button>
            </li>
          </ul>
        ))}
      </div>
      <div className="w-full flex justify-between items-center ">
        <h1 className=" text-sm ml-[100px]">Apple</h1>
        <h1 className="text-blue-800/100 mr-5 text-sm">see all</h1>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 p-6 absolute left-12 top-30 ml-4">
          {product.map((item: any, index) => (
            <div
              key={index}
              className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center p-1 w-[90px] h-[115px]"
            >
              <div className=" bg-light-blue-400 rounded-none text-[10px] absolute -left-1 top-2 -p-1">
                <h1>{item.is_top_sell}</h1>
              </div>
              <img
                src={item.primary_image}
                alt="item"
                className="w-[90px] h-[70px] object-contain p-1 justify-center"
              />
              <h1 className="font-bold text-[10px]  text-left">{item.name}</h1>

              <div className=" text-sm mr-14  -mt-[4] ">
                <p className="text-blue-800/100 mr-5 text-sm mb-8 ">
                 ${item.default_price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
}
export default Shopbybrand;
