import React, { useEffect, useState } from "react";
import "./style.scss";
import Icon from "../../atoms/icon/icon";
import axios from "axios";

export interface WeatherProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
}

const Weather = ({ margin, padding, backgroundColor, color }: WeatherProps) => {
  const [temp, setTemp] = useState<string>("20");
  const [humi, setHumi] = useState<string>("20");
  const [wind, setWind] = useState<string>("20");
  const [location, setLocaiton] = useState<string>("VN- HCM City");
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Kiểm tra xem trình duyệt có hỗ trợ Geolocation hay không
    if (!navigator.geolocation) {
      setError('Geolocation không được hỗ trợ trên trình duyệt của bạn.');
      return;
    }

    // Gọi hàm getCurrentPosition
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9fc44d8955553b337294f28a1702626a`)
        .then(
          (res) => {
            console.log(res.data);
            setTemp((res.data.main.temp - 273).toFixed(2)+" °C")
            setHumi((res.data.main.humidity).toFixed(2)+" %")
            setWind((res.data.wind.speed).toFixed(2)+" m/s")
            setLocaiton(res.data.sys.country + " / "+res.data.name)
          }
        ).then(
          (error) => {
            console.log(error);
          }
        )
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);
  return (
    <div
      style={{ margin, padding, backgroundColor, color }}
      className={"m-weather__container"}
    >
      <div className="m-weather__value">
        <div className="m-weather-left">
          <p>Nhiệt độ:</p>
          <p>Độ ẩm:</p>
          <p>Sức gió: </p>
        </div>
        <div className="m-weather-right">
          <p>{temp}</p>
          <p>{humi}</p>
          <p>{wind}</p>
        </div>
      </div>
      <div className="m-weather__location">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"}}>
             <Icon iconName="location"/><div>{location}</div>
        </div>
   
      </div>
    </div>
  );
};

export default Weather;
