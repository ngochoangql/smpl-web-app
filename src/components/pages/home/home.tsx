import { addDoc, collection } from "firebase/firestore";
import Icon from "../../atoms/icon/icon";
import GroupDevice from "../../molecules/group-device/group-device";
import Weather from "../../molecules/weather/weather";
import Header from "../../organisms/header/header";
import { DefaultHeader } from "../../organisms/header/header.stories";
import SideBar from "../../organisms/side-bar/side-bar";
import "./style.scss";
import { database } from "../../../../firebase";
import AddDevice from "../../molecules/add-device/add-device";
import { useState } from "react";
const HomePage = () => {
  console.log();
  const [dialog,setDialog] = useState(false)
  return (
    <div className={`p-home__container`}>
      <Header {...DefaultHeader.args} />
      <SideBar />
      <Weather />
      <GroupDevice dialog={dialog} />
      {dialog && <AddDevice setDialog={setDialog}/>}
      <div onClick={() => setDialog(true)} className="p-home__add-device">
        <Icon iconName="plus" />
      </div>
    </div>
  );
};

export default HomePage;
