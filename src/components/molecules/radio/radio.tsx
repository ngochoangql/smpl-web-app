import React, { FC, memo } from "react";
import './style.scss'
interface RadioProps {
  className?: string;
  type: string;
  text?: string;
  status: boolean;
  onClick: (type : string) => void;
}
const Radio: FC<RadioProps> = ({ className,type, text, status, onClick }) => {
  return (
    <div onClick={() => onClick(type)} className={`m-radio__container ${className}`}>
      <div className={`m-radio__out ${status ? "m-radio__out--active" : ""}`}>
        <div
          className={`m-radio__in ${status ? "m-radio__in--active" : ""}`}
        ></div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default memo(Radio);
