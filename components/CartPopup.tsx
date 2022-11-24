import Link from "next/link";
import React, { useEffect, useState } from "react";
import customAxios from "../http/axios";
interface Props {
  id: string;
  trigger: any;
  img: string;
  qty: number;
  name: string;
  value: string;
  color: string;
  note: string;
  price: number;
  productId: string;
  handleClose: () => void;
  popupUpdate: boolean;
  popupAdd: boolean;
}

export default function CartPopup({
  id,
  trigger,
  img,
  qty,
  productId,
  value,
  color,
  note,
  price,
  handleClose,
  popupUpdate,
  popupAdd,
}: Props) {
  const [detail, setDetail] = useState<any>([]);
  const [color1, setColor1] = useState("");
  const [capacity1, setCapacity1] = useState("");
  const [changeColor, setChangeColor] = useState(color);
  const [changeCapacity, setChangeCapacity] = useState(value);
  const [changeNote, setChangeNote] = useState(note);
  // console.log('id', id);
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.post(
        "/api/method/dipmarts_app.api.productdetail",
        { id: productId }
      );
      setDetail(res?.data.message);
    };
    fetchData();
  }, [productId]);
  const handleAdd = async () => {
    const AddCart = {
      product_id: productId,
      selection: [color1, capacity1],
      qty: 1,
      noted: "",
    };
    const res = await customAxios.post(
      "/api/method/dipmarts_app.api.addtocart",
      AddCart
    );
  };
  const handleUpdate = async () => {
    const Update = {
      id: id,
      selection: [color1, capacity1],
      qty: 1,
      noted: "",
    };
    const res = await customAxios.post(
      "/api/method/dipmarts_app.api.updatecart",
      Update
    );
  
  };
  const handleClick = (id: string, value: string) => {
    setCapacity1(id);
    setChangeCapacity(value);
  };
  const handleChange = (id: string, color: string, note: string) => {
    setColor1(id);
    setChangeColor(color);
    setChangeNote(note);
  };
  const temp = detail?.product_varraint;
  const capacity = temp?.find(
    (el: any) => el.name === "Capacity"
  ).product_varraint_value;
  const colors = temp?.find(
    (el: any) => el.name === "Colour"
  ).product_varraint_value;

  return (
    trigger && (
      <div className=" position fixed z-30 bottom-0 right-0 rounded-lg left-0 w-[100%] h-[45vh] bg-white flex justify-center items-center">
        <div className="position w-[100%] mt-20 bg-gray-50 ">
          <div className=" w-full h-[580px] top-[211px] rounded-lg border-solid border-1">
            <>
              <div className="rounded-md ">
                <div
                  onClick={handleClose}
                  className="flex flex-row-reverse space-x-24 space-x-reverse mr-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 rounded-xl bg-gray-200 stroke-blue-500 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <h1 className="font-bold text-xl mt-2">{productId}</h1>
                </div>
                <div className="flex space-x-4">
                  <img
                    src={img}
                    alt="image"
                    className="w-24 h-34 object-contain ml-4 mt-4"
                  />
                  <div className="flex space-x-2 text-xs mt-4">
                    <p className="">QTY:</p>
                    <span>{qty}</span>
                  </div>
                  <div className="flex flex-row-reverse space-x-2 space-x-reverse mt-4 mr-4 text-xs">
                    <h1 className="font-bold">{changeCapacity}</h1>
                    <span>Capacity: </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 -mt-16 ml-32 ">
                <button
                  style={{
                    backgroundColor: `${changeColor}`,
                  }}
                  className={`rounded-full w-4 h-4 mx-1 `}
                ></button>
                <p className="text-xs ">{changeNote}</p>
              </div>
              <div className="ml-32 mt-4">
                <p className="font-bold">${price}</p>
              </div>
              <hr className=" ml-4 my-4 h-px bg-gray-300 border-0 w-11/12 dark:bg-gray-700 mt-8"></hr>
              <div className="grid grid-flow-col-2">
                <h1 className="font-semibold ml-4">Capacity :</h1>
                <div className=" pl-4 pt-4 ">
                  {capacity?.map((item: any) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleClick(item.id, item.value)}
                      className={`${
                        capacity1 === item.id ? "bg-red-600" : "bg-gray-600"
                      } rounded-lg w-16 h-9 mr-4`}
                    >
                      <span className="text-white"> {item.value}</span>
                    </button>
                  ))}
                </div>
                <div className="pl-4 pt-1  ">
                  <p className="text-md -pl-1 pt-4 ">
                    <span className="text-gray-900/80 text-lg mb-8 ">
                      Color:
                    </span>
                  </p>
                  {colors?.map((item: any) => (
                    <button
                      style={{ background: `${item.value}` }}
                      key={item.id}
                      onClick={() =>
                        handleChange(item.id, item.value, item.note)
                      }
                      className={`${
                        color1 === item.id
                          ? "border-4 border-blue-600 "
                          : " border-4 border-rose-600 "
                      }rounded-full w-8 h-8 mx-1 mt-2`}
                    ></button>
                  ))}
                </div>
              </div>
            </>

            {popupAdd ? (
              <div className="rounded-lg bg-blue-900 w-80 h-10 ml-7 mt-4">
                <button
                  onClick={() => handleAdd()}
                  className="text-white font-bold p-2 px-28 ml-5 text-sm"
                >
                  Add to cart
                </button>
              </div>
            ) : null}
            {popupUpdate ? (
              <div className="grid grid-cols-2 p-4 gap-4">
                <Link href={`/ProductDetail/${productId}`}>
                  <button className=" text-blue-700 rounded-md border-2 border-blue-600 font-bold  text-sm">
                    Product Detail
                  </button>
                </Link>
                <button
                  onClick={() => handleUpdate()}
                  className="text-white font-bold p-2  rounded-md border- text-sm bg-blue-900"
                >
                  Confirm
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  );
}
