import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputAttendancePage from "./components/inputAttendancePage";
import EditAttendancePage from "./components/editAttendancePage";
import StartPoint from "./components/StartPoint";
import AttendanceManagementPage from "./components/attendanceManagementPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPoint />,
      children: [
        {
          path: "/",
          element: <AttendanceManagementPage />,
        },
        {
          path: "/editAttendance",
          element: <EditAttendancePage/>,
        },
        {
          path: "/inputAttendance",
          element: <InputAttendancePage/>,
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
