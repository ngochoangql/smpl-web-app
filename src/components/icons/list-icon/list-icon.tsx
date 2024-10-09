import Icon from "../../atoms/icon/icon";
import { Default } from "../../atoms/icon/icon.stories";
import "./style.scss";
export interface ListIconProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}
const icons = [
  "arrow-top",
  "bell",
  "calendar",
  "clock",
  "dark",
  "dashboard",
  "detail",
  "language",
  "light",
  "menu",
  "plus",
  "power",
  "profile",
  "react",
  "relay",
  "search",
  "setting",
  "smart-plug",
  "email",
  "eye-show",
  "eye-hidden"
];
const ListIcon = ({
  margin,
  padding,
  backgroundColor,
  color,
}: ListIconProps) => {
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={`l-list-icon__container`}
    >
      {icons.map((icon, index) => (
        <Icon key={index} {...Default.args} iconName={icon} />
      ))}
    </div>
  );
};

export default ListIcon;
