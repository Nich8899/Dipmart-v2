import React from "react";
import NavbarAll from "./NavbarAll";
import NavbarBottom from "./NavbarBottom";

type Props = {
  children: any;
};

export default function LayoutAll({ children }: Props) {
  return (
    <>
       <NavbarAll />
      {children}
      <NavbarBottom />
    </>
  );
}
