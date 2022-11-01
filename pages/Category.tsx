import React, { useEffect, useState } from "react";
import customAxios from "../http/axios";
import LayoutList from "../components/LayoutList";

type Props = {
  id: string;
  name: string;
  image_id: string;
};

function Category({}: Props) {
  const [category, setCategory] = useState<Array<Props>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "api/method/dipmarts_app.api.categorylist"
      );
      const data = await res.data.message.result.dipmart_cartgory;
      setCategory(data);
    };
    fetchData();
  }, []);

  return (
    <LayoutList>
    <div className=" grid grid-cols-2 gap-4 p-5 ">
      {category?.map((item: any) => (
        <div key={item.id} className=" bg-white text-center p-2">
          <img
            src={item.image_id}
            alt="category"
            className="w-full h-full object-contain rounded-lg "
          />
          {/* <h1 className="  absolute left-12 top-60 -p-1 text-black-800/100 mr-2 text-sm">{item.name}</h1> */}
        </div>
      ))}
    </div>
    </LayoutList>
  );
}
export default Category;
