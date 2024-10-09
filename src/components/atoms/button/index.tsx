import  { memo } from "react";
import "./index.scss";
import Icon from "../icon/icon";
import { Default } from "../icon/icon.stories";
export interface ButtonProps {
  text?: string;
  icon?: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  modifier?: "default" | "login" | "search" | "navigate" | "feature" | "weekend" |"button-default" | "cancel" | "accept";
  width?: string;
  height?: string;
  active?: boolean,
  onClick?: () => void;
}
const Button = ({
  text,
  icon,
  backgroundColor,
  color,
  padding,
  margin,
  height,
  width,
  modifier = "default",
  onClick,
  active
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`a-button a-button--${modifier} ${ active ? `a-button a-button--${modifier}--active` :""}`}
      style={{
        backgroundColor,
        padding,
        color,
        height,
        width: `${width ? width : ""}`,
        margin,
      }}
    >
      {icon && (
        <div>
          <Icon width="15px" height="15px" {...Default.args} iconName={icon} />
        </div>
      )}
      <p>{text}</p>
    </button>
  );
};

export default memo(Button) ;
