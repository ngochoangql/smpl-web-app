import { memo, useState } from "react";
import "./style.scss";

export interface IconProps {
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  padding?: string;
  iconName?: string;
  modifier?:"light" | "dark",
  onClick?: () => void;
}

const Icon = ({
  iconName,
  color,
  height = "24px",
  width = "24px",
  backgroundColor,
  backgroundColorHover,
  padding = "4px",
  onClick,
  modifier,
}: IconProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? backgroundColorHover : backgroundColor,
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        padding,
      }}
    >
      <i
        className={`a-icon a-icon--${modifier}`}
        style={{
          color,
          height,
          width,
          maskImage: `url(/assets/${iconName}.svg)`,
        }}
      />
    </div>
  );
};

export default memo (Icon);
