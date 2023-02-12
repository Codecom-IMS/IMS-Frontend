import { Outlet } from "react-router-dom";
import Waves from "../Waves";
export default function StartPoint() {
  return (
    <div className="App-header">
      <div className="inner-header flex">
        <Outlet />
      </div>
      <div className="wavesdiv">
        <Waves />
      </div>
    </div>
  );
}
