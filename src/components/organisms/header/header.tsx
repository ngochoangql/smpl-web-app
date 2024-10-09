import React, { memo, useContext } from "react";
import Search from "../../molecules/search/search";
import "./style.scss";
import Icon from "../../atoms/icon/icon";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom";
export interface HeaderProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}
const Header = ({ padding, margin, backgroundColor }: HeaderProps) => {
  const { menu, setMenu, theme, setTheme } = useContext(AppContext);
  const navigate = useNavigate()
  return (
    <div
      style={{
        padding,
        margin,
        backgroundColor: "initial",
        zIndex: 1,
        backgroundImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .1) 7%, rgba(255, 255, 255, .1) 93%, rgba(255, 255, 255, 0) 100%)",
      }}
      className={`o-header__container`}
    >
      <Icon modifier={theme} onClick={() => setMenu(true)} iconName="menu" />
      <div className="o-header__search">
        <Search modifier="search-header" />
      </div>

      <div className={`o-header__right`}>
        <Icon
          modifier={theme}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          iconName={theme}
        />
        <Icon modifier={theme} onClick={() => {}} iconName="language" />
        <Icon modifier={theme} onClick={() => {}} iconName="bell" />
        <Icon
          modifier={theme}
          onClick={() => navigate('/login')}
          iconName="profile"
        />
      </div>
    </div>
  );
};

export default memo(Header) ;
