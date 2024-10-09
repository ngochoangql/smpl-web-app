import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./components/pages/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/login";
import DeviceDetail from "./components/pages/device-detail/device-detail";
import ScheduleAction from "./components/pages/schedule-action/schedule-action";
import Schedules from "./components/pages/schedules/schedules";
import CountDown from "./components/pages/count-down/count-down";
import Activity from "./components/pages/activity/activity";
export const AppContext = createContext<any>({
  menu: false,
  setMenu: () => {},
});
function App() {
  const [menu, setMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("dark");

  return (
    <Router>
      <AppContext.Provider value={{ menu, setMenu, theme, setTheme }}>
        <div className={theme} style={{ width: "100%", height: "100%",position:"relative" }}>
          <Routes>
            <Route path="/login" Component={LoginPage} />
            <Route path="/" Component={HomePage} />
            <Route path="/device" Component={DeviceDetail} />
            <Route path="/schedule" Component={ScheduleAction} />
            <Route path="/schedules" Component={Schedules} />
            <Route path="/countdown" Component={CountDown} />
            <Route path="/activity" Component={Activity} />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
