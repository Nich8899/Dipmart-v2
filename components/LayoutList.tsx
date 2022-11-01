import React from 'react'
import NavbarCategory from './NavbarCategory';
import NavbarBottom from './NavbarBottom';
type Props = {
    children: any;
}

function Layout({children}: Props) {
  return (
    <div>
        <NavbarCategory />
        {children}
        <NavbarBottom />
    </div>
  )
}

export default Layout
