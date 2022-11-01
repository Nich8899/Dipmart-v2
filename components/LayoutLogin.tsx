import React from 'react'
import NavbarBottom from './NavbarBottom';
import NavbarLogin from './NavbarLogin';
type Props = {
    children: any;
}

function LayoutLogin({children}: Props) {
  return (
    <div>
        <NavbarLogin />
        {children}
        <NavbarBottom />
    </div>
  )
}

export default LayoutLogin;
