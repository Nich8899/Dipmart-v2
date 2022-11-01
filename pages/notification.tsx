import React from "react";
import LayoutSetting from "../components/LayoutSetting";
import { Switch } from "@material-tailwind/react";

type Props = {};

function Notification({}: Props) {
  return (
    <div>
      <LayoutSetting>
        <br></br>
        <div className="pl-[30px] pr-[10px] pt-4 shadow-sm p-4 bg-gray-100 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col -ml-[6px]">
                <span className=" text-[20px]">Promotion and Offers</span>
              </div>
            </div>
            <Switch color="green" defaultChecked />
          </div>
        </div>
        <div className=" p-4 ">
        <p> Send me notifications from DiPMarts about new products,<br></br> Special store events, personalized recommendations and <br></br></p>
        <p>promotions.</p>
        </div>
         
      </LayoutSetting>
    </div>
  );
}
export default Notification;
