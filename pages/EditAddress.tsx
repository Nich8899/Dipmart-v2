import Link from "next/link";
import React from "react";
// import GoogleMapReact from "google-map-react";
import { Input } from "@material-tailwind/react";

// const MapMarker = ({ text }) => <div>{text}</div>;

export default function EditAddress() {
  const [openTab, setOpenTab] = React.useState(true);
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };

  return (
    <div>
      <div className="fixedNav shadow-sm p-4 flex justify-between items-center bg-white">
        <Link href="/ReviewAddress">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="text-center font-bold text-xl">Edit Address</h1>
        <h1 className="text-center font-bold text-xl text-red-900">Delete</h1>
        <div />
      </div>
      {/* <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "MY API KEY IS HERE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker text="My Marker" />
      </GoogleMapReact>
    </div> */}
      <div className="flex w-80 flex-col gap-4 ml-7 mt-6">
        <Input size="lg" className="bg-gray-200" label="Receiver Name" />
        <Input size="lg" className="bg-gray-200" label="Phone Number " />
        <Input size="lg" className="bg-gray-200" label="Email" />
        <Input size="lg" className="bg-gray-200" label="Noted to delivery" />
      </div>
      <h1 className="font-bold ml-7 mt-4">Add address Type</h1>
      <div className="grid grid-cols-4 p-5 ml-2">
        <div>
          <button
            className={
              "rounded-full focus:ring-4 focus:ring-light-blue-200  dark:hover:bg-blu focus:outline-none dark:focus:ring-red-900" +
              (openTab === false
                ? "text-white bg-blueGray-600"
                : "text-blueGray-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  rounded-full border-2 bg-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
          <h1 className=" text-xs ">Home</h1>
        </div>
        <div>
          <button
            className={
              "rounded-full focus:ring-4 focus:ring-light-blue-200  dark:hover:bg-blu focus:outline-none dark:focus:ring-red-900" +
              (openTab === false
                ? "text-white bg-blueGray-600"
                : "text-blueGray-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  rounded-full border-2 bg-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>

          <h1 className=" text-xs ">work</h1>
        </div>
        <div>
          <button
            className={
              "rounded-full focus:ring-4 focus:ring-light-blue-200  dark:hover:bg-blu focus:outline-none dark:focus:ring-red-900" +
              (openTab === false
                ? "text-white bg-blueGray-600"
                : "text-blueGray-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  rounded-full border-2 bg-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <h1 className=" text-xs mr-2 ">Favorite</h1>
        </div>
        <div>
          <button
            className={
              "rounded-full focus:ring-4 focus:ring-light-blue-200  dark:hover:bg-blu focus:outline-none dark:focus:ring-red-900" +
              (openTab === true
                ? "text-white bg-blueGray-600"
                : "text-blueGray-600 bg-white")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6  rounded-full border-2 bg-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <h1 className=" text-xs ">Other</h1>
        </div>
      </div>
     <div className="ml-6 w-80">
     <div className={openTab === true ? "block" : "hidden"} id="link1" >
     <Input size="lg" className="bg-gray-200" label="e.g. friend House" />
      </div>
     </div>
      <div>
        <button
          name="openmodal-btn"
          type="button"
          className=" w-11/12 py-[13px] bg-blue-900 text-center  rounded-xl ml-4 mt-8 "
        >
          <span className="font-bold text-[18px] text-white">
            Confirm
          </span>
        </button>
      </div>
    </div>
  );
}
