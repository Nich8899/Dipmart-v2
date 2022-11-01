import React from 'react'
import NavbarBottom from './NavbarBottom';
import NavbarSetting from './NavbarSetting'
type Props = {
    children: any
}

 function LayoutSetting({children}: Props) {
  return (
    <div>
      <NavbarSetting />
        {children}
        <NavbarBottom />
    </div>
  )
}
export default LayoutSetting;