import React, { useEffect, useState } from "react";
import Link from "next/link";
import customAxios from "../../http/axios";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5  mr-transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
export default function ProductDetail() {
  const [detail, setDetail] = useState<any>([]);
  const [capacity1, setCapacity1] = useState("");
  const [color1, setColor1] = useState("");
  const [btnColor, setBtnColor] = useState(detail.in_wishlist);
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.post(
        "/api/method/dipmarts_app.api.productdetail",
        { id: id }
      );
      setDetail(res.data.message);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: detail.id }
    );
    setSuccess(res.data.message);
    setBtnColor(false);
  };

  const handleChangeColor1 = async () => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: detail.id }
    );
    setSuccess(res.data.message);
    setBtnColor(true);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleAddCart = async () => {
    const cart = {
      product_id: detail.id,
      selection: detail.pre_spec.spec,
      qty: count,
      noted: "",
    };
    console.log("cart", cart);

    const res = await customAxios.post(
      "api/method/dipmarts_app.api.addtocart",
      cart
    );
  };

  const temp = detail.product_varraint;
  const capacity = temp?.find(
    (el: any) => el.name === "Capacity"
  ).product_varraint_value;
  const color = temp?.find(
    (el: any) => el.name === "Colour"
  ).product_varraint_value;

  const handleChangeCapacity = (id: string) => {
    setCapacity1(id);
  };
  const handleChangeColor = (id: string) => {
    setColor1(id);
  };

  return (
    <div>
      <nav className="fixedNav">
        <div className="w-ful flex justify-between items-center  px-3 p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <Link href={"/"}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </Link>
          </svg>

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
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"
            />
          </svg>
        </div>
      </nav>
      <div className="flex justify-evenly space-x-8 ">
        <div className="w-12/12 sm:w-12/12 h-80 ">
          <img
            src={detail.primary_image}
            alt="image"
            className="shadow rounded w-82 h-80 align-middle border-none "
          />
        </div>
      </div>

      {/* product detail */}
      <div className="bg-white myShadow mx-auto max-w-[1024px] max-w-sm-[0px] w-full  border-1 rounded-t-3xl">
        <h1 className="font-bold text-xl pl-4 pt-4 ">{detail.name}</h1>
        <h1 className="text-purple-900 font-bold text-xl pl-4 pt-2">
          ${detail.default_price}
        </h1>
        <p className="text-md pl-4 ">
          Availability :
          <span className="text-purple-900 font-bold">{detail.stock} </span> in
          Stock
        </p>
        <div className="flex w-max absolute top-[440px] right-4 ">
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
          <span className="mx-2">{count}</span>
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
        </div>
        <h1 className="font-bold text-md pl-4 pt-4 ">Capacity: </h1>
        <div className=" pl-4 pt-4 ">
          {capacity?.map((item: any) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleChangeCapacity(item.id)}
              className={`${
                capacity1 === item.id ? "bg-red-600" : "bg-gray-400"
              } rounded-lg w-16 h-9 mr-4`}
            >
              {item.value}
            </button>
          ))}
        </div>
        <div className="pl-4 pt-1">
          <p className="text-md -pl-1 pt-4 ">
            <span className="text-gray-900/80 text-lg mb-8">Color: </span>
            <span className="font-bold"></span>
          </p>
          {color?.map((item: any) => (
            <button
              style={{ background: `${item.value}` }}
              key={item.id}
              onClick={() => handleChangeColor(item.id)}
              className={`${
                color1 === item.id
                  ? "border-4 border-blue-600 "
                  : " border-4 border-rose-600 "
              }rounded-full w-8 h-8 mx-1 mt-2`}
            ></button>
          ))}

          <p className="text-sm pt-4 mr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A morbi
            convallis velit volutpat sit erat est. Eu malesuada amet, vestibulum
            eu. Mi, iaculis lectus nulla adipiscing sit sodales quam neque.
          </p>
          <br />
        </div>
      </div>
      <div className="mr-4 ml-4 ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Product Description
          </AccordionHeader>
          <div className="w-3/4 grid grid-rows-4  ">
            {detail.product_spec?.map((item: any) => (
              <AccordionBody key={item.id}>
                <span className="whitespace-pre-wrap ">{item.value}</span>
                <span>{item.value_spec[0].value}</span>
              </AccordionBody>
            ))}
          </div>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Fearture
          </AccordionHeader>
          <AccordionBody>
            <div className="grid grid-cols-2 gap-4 p-6 ml-16">
              {detail.product_feature?.map((item: any) => (
                <div
                  key={item.id}
                  className="flex flex-col  shadow-md rounded-lg bg-gray-200 text-center p-2 w-24 h-30 -ml-4 mt-6"
                >
                  <a>
                    <img
                      src={item.image_path}
                      alt="image"
                      className=" w-[90px] h-[33px] pr-[30px] mt-2 ml-4 object-contain"
                    />
                    <h1>{item.value}</h1>
                  </a>
                </div>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      {/* card bttom */}
      <div className=" sticky bottom-0 left-0 right-0 myShadow mx-auto py-2 max-w-[1024px] max-w-sm-[0px] bg-white h-16 mt-20 ">
        <div className=" flex w-max gap-4   justify-center absolute top-3 left-7">
          {btnColor ? (
            <button
              type="button"
              className={"rounded-lg w-12 h-10 border-2 border-black-900"}
              name="wishlistfalse"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-red-600  absolute top-1 left-2"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
             
            </button>
          ) : (
            <button
              name="wishlisttrue"
              type="button"
              className={"rounded-lg w-12 h-10 border-2 border-black-900"}
              onClick={handleChangeColor1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8  absolute top-1 left-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          )}
          <button
            onClick={() => {
              handleAddCart();
              {
                detail.spec;
              }
            }}
            className="rounded-lg border-2 border-blue-900 w-32 h-10  text-blue-900 "
          >
            Add to Cart
          </button>
          <button className="rounded-lg w-24 h-10 bg-blue-900  text-white">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
