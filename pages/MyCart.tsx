import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartPopup from "../components/CartPopup";
import customAxios from "../http/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { iteratorSymbol } from "immer/dist/internal";
import NavbarBottom from "../components/NavbarBottom";
import { useRouter } from "next/router";
interface MyCart {
  final_price: " string";
  noted: "string";
  product: Product;
  qty: number;
  selection_image: "string";
  selection: Selection[];
  name: "string";
  id: "string";
}
interface Selection {
  id: "string";
  name: "string";
  product_varraint_value: Product_varraint_value[];
  status: "string";
}
interface Product_varraint_value {
  id: "string";
  note: "string";
  price: "string";
  value: "string";
}

interface Product {
  name: "string";
}




export default function MyCart() {
  const router = useRouter()
  const [result, setResult] = useState<Array<MyCart>>([]);
  const [cartRelate, setCartRelate] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [buttonPopup, setButtonPopup] = useState<boolean>(false);
  const [timedPopup, setTimedPopup] = useState(false);
  const [id, setId] = useState("");
  const [productID, setProductID] = useState("");
  const [img, setImg] = useState("");
  const [qty, setQty] = useState(0);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState(0);
  const [popupAdd, setPopupAdd] = useState(false);
  const [popupUpdate, setPopupUpdate] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);
  const [success , setSuccess] = useState('');
  const [btnColor, setBtnColor] = useState('');
  let appendNumber = 4;
  let prependNumber = 1;

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "/api/method/dipmarts_app.api.cartlist"
      );
      const data = await res.data.message;
      setResult(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "/api/method/dipmarts_app.api.cartrelate"
      );
      const data = await res.data.message.list_product ;
      setCartRelate(data);
    };
    fetchData();
  }, []);

  const handleClick = async (id: string) => {
    const res = await customAxios.post(
      "api/method/dipmarts_app.api.itemtowishlist",
      { product_id: id }
    );
    setSuccess(res.data.message);
   
    
  };

  const handleAdd = async (item: any, ) => {
    const AddCart = {
      product_id : item.id,
      selection : item.pre_spec.spec,
      qty: 1,
      noted: "",
     }; 
    const  res = await customAxios.post(
      "api/method/dipmarts_app.api.addtocart",
      AddCart
    );
    
  }

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 300);
  }, []);

  const handleDelete = (id) => {
    try {
      customAxios.post("/api/method/dipmarts_app.api.removecart", { id: id })
      router.reload()
    } catch (error: any) {
      alert(error.message)
    }
  };
  const handleMeClick = (
    id: string,
    productID: string,
    Img: string,
    qty1: number,
    name1: string,
    selection: any,
    price1: number,
    popupUpdate1: boolean,
    popupAdd1: boolean
  ) => {
    setButtonPopup(true);
    setId(id);
    setProductID(productID);
    setImg(Img);
    setQty(qty1);
    setName(name1);
    setPrice(price1);
    setShowAdd(true);
    setShowUpdate(true);
    setPopupUpdate(popupUpdate1);
    setPopupAdd(popupAdd1);
    const capacity = selection?.find(
      (el: any) => el.name === "Capacity"
    ).product_varraint_value;
    setValue(capacity.value);
    const color = selection?.find(
      (el: any) => el.name === "Colour"
    ).product_varraint_value;
    setColor(color.value);
    const noted = selection?.find(
      (el: any) => el.name === "Colour"
    ).product_varraint_value;
    setNote(noted.note);
  };
  const handleClose = () => {
    setButtonPopup(false);
  };
  var total:any = 0;
  result.map((item) => total += item.final_price);
  
 

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div className="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };
 
  
  return (
    <div>
      <div className="fixedNav shadow-sm p-4 flex justify-between items-center bg-white">
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
        <h1 className="text-center font-bold text-xl">My cart</h1>
        <div />
      </div>

      {
        result.length === 0 ? <>
          <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqtWEXPmoRa7l9IWAB3p0Tsw7Xgm5T2HJoQ&usqp=CAU" 
        alt="logo"
        className=' mt-30 my-8 ml-20'
         />
         <div className='flex flex-col space-y-0'>
         <h1 className= 'font-bold text-blue-900 ml-24'>Your Shopping Cart is Empty</h1><br />
        <p className='  ml-20 text-sm '> Looks like you have not added anything to</p>
        <p className=' ml-44 text-sm'>your cart yet</p>
         </div>  
      </div>
      <Link href="/">
      <div className="mx-20 -mt-6">
          <button
            name="openmodal-btn"
            type="button"
            className=" w-60 h-18 py-[13px] bg-deep-purple-900 text-center  rounded-xl  mt-16 "
          >
            <span className="font-bold text-sm text-white">Start Shopping</span>
          </button>
        </div>
        </Link>
        <NavbarBottom />
        </> : (
          <>
          <div className="flex flex-col5 mt-6">
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-4">cart</h1>
          <button className=" rounded-full w-12 h-12 ml-2 bg-purple-900 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-2 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
        <div className=" h-1.5 rounded-full w-16 absolute top-[144px] left-20 bg-gray-600 "></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-16">Address</h1>
          <button className="absolute top-[125px] left-36 ml-6 rounded-full w-12 h-12 focus:ring-4 border-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </button>
        </div>
        <div className=" h-1.5 rounded-full w-16 absolute top-[145px] right-20 bg-gray-600 "></div>
        <div className=" ml-4">
          <h1 className="font-bold text-lg mb-2 ml-12">Payment</h1>
          <button className="absolute top-[125px] right-6  rounded-full w-12 h-12 border-4 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h1 className="ml-6 font-bold mt-8">Review Order</h1>
      <hr className=" ml-4 my-4 h-px bg-gray-300 border-0 w-11/12 dark:bg-gray-700"></hr>
      <div className="grid grid-flow-row gap-4 p-5">
        {result.map((mycart: any) => {
          return (
            <div
              key={mycart.id}
              className=" bg-gray-200 w-full h-[180px] top-[211px] rounded-md mb-8 border-solid border-2 "
            >
              <div className=" flex justify-between items-center px-3 ">
                <img
                  src={mycart.selection_image}
                  alt="image"
                  className="w-15 h-20 mt-6 ml-1 "
                  onClick={() =>
                    handleMeClick(
                      mycart.id,
                      mycart.product.id,
                      mycart.product.primary_image,
                      mycart.qty,
                      mycart.product.name,
                      mycart.selection,
                      mycart.final_price,
                      true,
                      false
                    )
                  }
                />
                <h1 className="mr-20 mb-8 font-bold">{mycart.product.name}</h1>
                <button onClick={() => handleDelete(mycart.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mb-8 stroke-blue-900 border-2 border-indigo-500/100 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex space-x-2 text-xs -mt-12 ml-28">
                <p className="">QTY:</p>
                <span>{mycart.qty}</span>
              </div>
              <div>
                {mycart.selection.map((item: any) => (
                  <span key={item.id}>
                    {item.name === "Capacity" ? (
                      <div className="flex flex-row-reverse space-x-2 space-x-reverse -mt-4 mr-20 text-xs">
                        <span className="font-bold">
                          {item.product_varraint_value.note}
                        </span>
                        <h1>Capacity: </h1>
                      </div>
                    ) : null}
                  </span>
                ))}
              </div>
              <div>
                {mycart.selection.map((item: any) => (
                  <span key={item.id}>
                    {item.name === "Colour" ? (
                      <div className="flex space-x-2 mt-4 ml-28">
                        <button
                          style={{
                            backgroundColor: `${item.product_varraint_value.value}`,
                          }}
                          className={`rounded-full w-4 h-4 mx-1 sfocus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
                        ></button>
                        <p className="text-xs ">
                          {item.product_varraint_value.note}
                        </p>
                      </div>
                    ) : null}
                  </span>
                ))}
              </div>
              <div className=" grid grid-cols-2 ml-28 mt-6 ">
                <p className="font-bold">${mycart.final_price}</p>
                <div className="grid grid-cols-3 ml-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5  stroke-blue-900 border-2 border-indigo-500/100 rounded-lg ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <span className="mx-2">{mycart.qty}</span>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5  stroke-blue-900 border-2 border-indigo-500/100 rounded-lg -ml-2"
                      onClick={() =>
                        handleMeClick(
                          mycart.id,
                          mycart.product.id,
                          mycart.product.primary_image,
                          mycart.qty,
                          mycart.product.name,
                          mycart.selection,
                          mycart.final_price,
                          false,
                          true
                        )
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr className="  my-6 h-px bg-gray-200 border-0 w-12/12 dark:bg-gray-700"></hr>
      <h1 className="ml-4 font-bold">Products you might like</h1>
      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={1}
          // pagination={{
          //   type: "fraction",
          // }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
           {cartRelate.map((item:any) =>{
            return(
              <SwiperSlide key={item.id}>
            <div  className="grid grid-cols-2 p-5">
                    <div  className="flex flex-col drop-shadow-lg rounded-lg bg-white text-center p-3 w-40 h-48 z-10">
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
                             onClick={() =>  {
                              handleClick(item.id)
                            btnColor === "red"
                              ? setBtnColor("transparent")
                              : setBtnColor("red");
                              {item.in_wishlist ? "red" : 'transparent'}
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
                    {/* <Link  href={`/ProductDetail/${product.id}`}> */}
                    <img
                    src={item.primary_image}
                      alt="item"
                      className="w-full h-[80px] object-contain "
                    />
                    {/* </Link> */}
                    <h1 className="  font-bold w-[108px] h-[15px] bg-red-6000 text-left">
                     {item.name}
                    </h1>
    
                    <div className="flex flex-row-reverse space-x-4 space-x-reverse mt-4 justify-between ">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className=" w-[30px] h-[35px] -pb-4"
                          onClick={() => {
                            handleAdd(item)
                              
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className=" text-sm mr-14 flex">
                        <p className="text-blue-800/100 mr-2 text-sm">${item.default_price}</p>
                        <p className="line-through  text-red-600 ml-4">{item.discount}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
            )
           })}
        </Swiper>
      </>
      <Link href="/ReviewAddress">
        <div className="bg-white shadow-sm p-4 h-20 rounded-none border-2 flex justify-between items-center  sticky bottom-0 left-0 right-0 ">
          <div className="grid grid-cols-2 gap-4  ">
            <h1 className="text-blue-900 font-bold ml-2 mt-6">${total}</h1>
            <button className="bg-blue-900 w-40 h-9 rounded-lg mt-2">
              <span className="font-bold text-[14px]  text-white">
                CheckOut
              </span>
            </button>
          </div>
          <h1 className="absolute mb-3 ml-2 text-xs text-slate-500">Total</h1>
          <div />
        </div>
      </Link>
      {showAdd ? (
        <CartPopup
          trigger={buttonPopup}
          id={id}
          productId={productID}
          img={img}
          qty={qty}
          name={name}
          value={value}
          color={color}
          note={note}
          price={price}
          handleClose={handleClose}
          popupUpdate={popupUpdate}
          popupAdd={popupAdd}
        />
      ) : null}
      {showUpdate ? (
        <CartPopup
          trigger={buttonPopup}
          id={id}
          productId={productID}
          img={img}
          qty={qty}
          name={name}
          value={value}
          color={color}
          note={note}
          price={price}
          handleClose={handleClose}
          popupUpdate={popupUpdate}
          popupAdd={popupAdd}
        />
      ) : null}
          </>
        )
      }
    </div>
  );
}
