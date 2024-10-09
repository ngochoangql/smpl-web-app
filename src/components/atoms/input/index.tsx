import { ChangeEvent } from 'react'
import './index.scss'
export interface InputProps {
    type: "text" | "password";
    value?: string;
    placeHolder?: string;
    modifier?: "default" |"login" | "search" | "add-device";
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({type = "text",placeHolder = "",modifier = "default",onChange,value} : InputProps) => {
  return (
    <input value={value} type={type} placeholder={placeHolder} onChange={onChange} className={`a-input a-input--${modifier}`}/>
  )
}

export default Input