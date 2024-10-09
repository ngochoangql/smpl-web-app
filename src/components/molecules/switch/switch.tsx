import React, { FC, memo, useContext } from 'react'
import './style.scss'
interface SwitchProps {
    active: boolean;
    onClick?: () => void
}
const Switch: FC<SwitchProps> = ({active,onClick}) => {
  console.log("NonUpdatingComponent re-rendered");
  return (
    <div onClick={onClick} className='m-switch__container'>
        <div className={`m-switch__thumb  ${active ? "m-switch__thumb--active" : ""}`}><div className={`m-switch__track ${active ? "m-switch__track--active" : ""}`}></div></div>
        
    </div>
  )
}

export default memo(Switch) 