import React from "react";
import { useEffect, useState } from "react";
import LayoutAll from "../components/LayoutAll";
import ProductItem from "../components/ProductItem";
import customAxios from "../http/axios";

interface Allproduct {
  id: string;
  name: string;
  primary_image: string;
}

function AllProduct() {
  const [allproduct, setAllproduct] = useState<Array<Allproduct>>([]);

  useEffect(() => {
    const listData = async () => {
      const res = await customAxios.get(
        "/api/method/dipmarts_app.api.allproduct",
        { params: { current_page: 4 } }
      );
      console.log("res", res);
      setAllproduct(res.data.message.result);
    };
    listData();
  }, []);

  return (
    <div>
      <LayoutAll>
        <div className="grid grid-cols-2 gap-4 p-5">
          {allproduct.map((item: any, index) => (
            <ProductItem product={item} key={index} />
          ))}
        </div>
      </LayoutAll>
    </div>
  );
}
export default AllProduct;
