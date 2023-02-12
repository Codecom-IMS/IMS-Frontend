import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputAttendancePage from "./components/InputAttendancePage";
import EditAttendancePage from "./components/EditAttendancePage";
import StartPoint from "./components/StartPoint";
import AttendanceManagementPage from "./components/AttendanceManagementPage";
import LandingPage from "./components/LandingPage/index.jsx";
import AdminLogin from "./components/Login/AdminLogin/index.jsx";
import TeacherLogin from "./components/Login/TeacherLogin/index.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard/adminDashboard.jsx";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/teacherDashboard.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPoint />,
      children: [
        {
          path: "/attendanceManagementPage",
          element: <AttendanceManagementPage />,
        },
        {
          path: "/attendanceManagementPage/editAttendance",
          element: <EditAttendancePage/>,
        },
        {
          path: "/attendanceManagementPage/inputAttendance",
          element: <InputAttendancePage/>,
        },{
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/admin",
          element: <AdminLogin />,
        },
        {
          path: "/admin-dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "/teacher",
          element: <TeacherLogin />,
        },
  
        {
          path: "/teacher-dashboard",
          element: <TeacherDashboard />,
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
