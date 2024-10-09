import { useContext } from "react";
import Button from "../../atoms/button";
import { NaviagateButton } from "../../atoms/button/index.stories";
import Icon from "../../atoms/icon/icon";
import "./style.scss";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
export interface SideBarProps {
  // position?: "absolute" | "relative";
  left?:string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const SideBar = ({ margin,left , padding, backgroundColor, color }: SideBarProps) => {
  const {menu,setMenu} = useContext(AppContext)
  const navigation = useNavigate()
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigation('/login')
      localStorage.removeItem("user_id")
      localStorage.removeItem("token")
      console.log("User signed out");
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  }
  return (
    <>
      <div
        style={{ margin, padding, backgroundColor, color,left }}
        className={`o-side-bar__container ${menu ? "o-side-bar__container--active" : ""}`}
        
      >
        <Icon onClick={() => {}} iconName="smart-plug" width="200px" height="60px" />
        <Button onClick={() => {navigation("/");setMenu(false)}} {...NaviagateButton.args} icon="dashboard" text="Dashboard" />
        <Button onClick={() => {navigation("/schedules");setMenu(false)}} {...NaviagateButton.args} icon="calendar" text="Calendar" />
        <Button onClick={() => {navigation("/activity")}} {...NaviagateButton.args} icon="power" text="Power" />
        <Button onClick={() => {navigation("")}} {...NaviagateButton.args} icon="setting" text="Setting" />
        <Button onClick={handleLogout} {...NaviagateButton.args} icon="logout" text="Logout" />
      </div>
      <div onClick={() => setMenu(false)} className={`o-side-bar__out-left  ${menu ? "o-side-bar__out-left--active" : ""}`}></div>
    </>
  );
};

export default SideBar;
