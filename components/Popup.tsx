import React from "react";
import Tab from "../components/Tab";


export default function Popup(props) {
  return props.trigger ? (
    <div className="position fixed  bottom-[100px] right-0  left-0 w-[100%] h-[20vh]  flex justify-center items-center">
      <div className="position  p-[1px] w-[100%] max-w-[640px] bg-gray-50 ">
        <Tab />
         
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
}
