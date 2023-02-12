import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputAttendancePage from "./components/InputAttendancePage";
import EditAttendancePage from "./components/EditAttendancePage";
import StartPoint from "./components/StartPoint";
import AttendanceManagementPage from "./components/AttendanceManagementPage";

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
