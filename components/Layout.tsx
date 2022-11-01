import React from 'react'
import Navbar from './Navbar';
import NavbarBottom from './NavbarBottom';
type Props = {
    children: any;
}

function Layout({children}: Props) {
  return (
    <>
        <Navbar />
        {children}
        <NavbarBottom />
    </>
  )
}

export default Layout
