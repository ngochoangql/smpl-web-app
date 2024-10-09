import { ChangeEvent } from "react";
import Icon from "../../atoms/icon/icon";
import Input from "../../atoms/input";
import "./style.scss";
export interface InputFieldProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  type: "text" | "password";
  iconName?: string;
  placeHolder?: string;
  value?:string;
  onClick?:() => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  
}

const InputField = ({
  margin,
  padding,
  backgroundColor,
  color,
  type = "text",
  iconName,
  placeHolder,
  value,
  onClick,
  onChange,
}: InputFieldProps) => {
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={`m-input-field__container`}
    >
      {iconName && <Icon iconName={iconName} onClick={onClick} />}{" "}
      <Input  onChange={onChange} type={type} modifier="login" placeHolder={placeHolder} />
    </div>
  );
};

export default InputField;
