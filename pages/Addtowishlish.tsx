import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavbarBottom from "../components/NavbarBottom";
import customAxios from "../http/axios";

function Addtowishlish() {
  const router = useRouter()
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = async () => {
    const res = await customAxios.get("/api/method/dipmarts_app.api.wishlist");
    setWishlist(res.data.message.result);
    console.log("res", res);
  };

  const handleDelete = (id) => {
   try {
    customAxios.post("/api/method/dipmarts_app.api.itemtowishlist", 
    {product_id: id,})
    router.reload()
   } catch (error: any) {
    alert(error.message)
    
   }
  };

  return (
    <div>
      <div className="fixedNav shadow-sm p-4 text-center font-bold text-xl bg-white ">
        <h1 className="text-center">Wish List</h1>
      </div>
      <div className="grid grid-rows- gap-4">
        {wishlist.map((item: any, index) => (
          <div
            key={item.id}
            className="flex flex-row drop-shadow-lg rounded-lg bg-white p-2 w-80 mt-5  h-50 pr-[20px] ml-7 "
          >
            <img
              src={item.primary_image}
              alt="item"
              className="w-full h-[100px] object-contain mr-56"
            />
            <div className="absolute top-6 right-24 ">
              <h1 className="  font-bold w-[108px] h-[15px] ">{item.name} </h1>
              <p className=" mt-2">${item.default_price}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="drop-shadow-lg rounded-lg bg-white text-red-800 text-xs w-12 h-5 absolute top-14 left-36"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <NavbarBottom />
    </div>
  );
}
export default Addtowishlish;
