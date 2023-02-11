import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Waves from "../Waves";
export default function StartPoint() {
  return (
    <div className="App-header">
      <div className="inner-header flex">
      <Navbar/>
      <Outlet />
      </div>
      <div className="wavesdiv">
          <Waves />
        </div>
    </div>
  );
}
