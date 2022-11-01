import React from "react";
import AllProduct from "../pages/AllProduct";
import Navbar from "./NavbarAll";
import NavbarBottom from "./NavbarBottom";
type Props = {
  children: any;
};

function LayoutProduct({ children }: Props) {
  return (
    <div>
      <Navbar />
      {/* <AllProduct /> */}
      <NavbarBottom />
    </div>
  );
}

export default LayoutProduct;
