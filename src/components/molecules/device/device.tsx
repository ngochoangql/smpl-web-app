import "./style.scss";
import Icon from "../../atoms/icon/icon";
import { useNavigate } from "react-router-dom";
import Switch from "../switch/switch";
import { DeviceModel } from "../../../apis/device/device.api";

export interface DeviceProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  device: DeviceModel;
  onClick?: () => void;
}

const Device = ({
  margin,
  padding,
  backgroundColor,
  color,
  device,
  onClick ,
}: DeviceProps) => {
  const navigate = useNavigate()
  return (
    <div
     
      style={{ margin, padding, backgroundColor, color }}
      className={`m-device__container ${device.status ? "m-device--active" : ""}  `}
    >
      <div className="m-device__info">
        <div>{device.name ? device.name : "--"}</div>
        <div>{device.room ? device.room : "--"}</div>
        <div>{device.ip_address ? device.ip_address : "--"}</div>
        <div> {device.status ? "Đang hoạt động" : "Đang tắt" }</div>
      </div>
      <div className="m-device__right">
        <Icon onClick={() => navigate(`device?device_id=${device.device_id}`)} iconName="detail" />
          <Switch active={device.status} onClick={onClick && onClick} />
      </div>
      
    </div>
  );
};

export default Device;
