import Slideshow from "../components/Slide";
import Brand from "../components/Brand";
import ProductItem from "../components/ProductItem";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import customAxios from "../http/axios";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

interface Banner {
  id: string;
  title: string;
  image: string;
}
interface Allproduct {
  id: string;
  name: string;
  primary_image: string;
}

let currentPage: number = 1;

export default function Home() {
  const [popularproduct, setPopularproduct] = useState([]);
  const [banner, setBanner] = useState<Array<Banner>>([]);
  const [secondbanner, setSecondbanner] = useState([]);
  const [allproduct, setAllproduct] = useState<Array<Allproduct>>([]);
  // const [currentpage, setCurrentpage] = useState<number>(1);
  const [pagination, setPagination] = useState<any>([]);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        "https://dev.dipmarts.com/api/method/dipmarts_app.api.homepage"
      );

      setBanner(res.data.message.advertisement);
      setPopularproduct(res.data.message.popular_products);
      setSecondbanner(res.data.message.secondary_banner);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const listData = async () => {
      const res = await customAxios.get(
        "https://dev.dipmarts.com/api/method/dipmarts_app.api.allproduct",
        { params: { current_page: page } }
      );
      const product = await res.data.message.result;
      setPagination([...pagination, ...product]);
    };
    listData();
  }, [page]);

  return (
    <div className="mx-auto max-w-[1024px] max-w-sm-[10px]">
      <Layout>
        <Slideshow banner={banner} />
        <Brand />
        <div className="grid grid-cols-2 gap-4 p-5">
          {popularproduct.map((item: any, index) => (
            <ProductItem product={item} key={index} />
          ))}
        </div>
        <Slideshow banner={secondbanner} />
        <div className="pl-[30px] pr-[10px] pt-6 text-center">
          <Link href="/AllProduct">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-col -ml-[6px]">
                  <span className=" text-[20px] font-bold">All Product</span>
                  <span className=" text-[18px] justify-end  absolute right-10 top-30 text-blue-600">
                    See all
                  </span>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-cyan-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Link>
        </div>
        <InfiniteScroll
          dataLength={pagination.length} //This is important field to render the next data
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          // below props only if you need pull down functionality
        >
          <div className="grid grid-cols-2 gap-4 p-5">
            {pagination.map((item: any, index) => (
              <ProductItem product={item} key={index} />
            ))}
          </div>
        </InfiniteScroll>
        <div className="text-2xl ml-5">
          <h1>Popular</h1>
        </div>
      </Layout>
    </div>
  );
}
