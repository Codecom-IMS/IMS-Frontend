import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReportPage from "./components/ReportsPage";
import ReportsPageMain from "./components/ReportsPageMain";

import InputAttendancePage from "./components/InputAttendancePage";
import EditAttendancePage from "./components/EditAttendancePage";
import StartPoint from "./components/StartPoint";
import AttendanceManagementPage from "./components/attendanceManagementPage";
import LandingPage from "./components/LandingPage/index.jsx";
import AdminLogin from "./components/Login/AdminLogin/index.jsx";
import TeacherLogin from "./components/Login/TeacherLogin/index.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard/adminDashboard.jsx";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/teacherDashboard.jsx";
import {
  AddStudentPage,
  AddTeacherPage,
  DeleteStudentPage,
  DeleteTeacherPage,
  MainPage,
  StudentPage,
  TeacherPage,
  UpdateStudentPage,
  UpdateTeacherPage,
} from "./components/index";
import FeeManagement from "./components/FeeManagement";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPoint />,
      children: [
        {
          path: "/teacher-dashboard/attendanceManagementPage",
          element: <AttendanceManagementPage />,
        },
        {
          path: "/teacher-dashboard/attendanceManagementPage/editAttendance",
          element: <EditAttendancePage />,
        },
        {
          path: "/teacher-dashboard/attendanceManagementPage/inputAttendance",
          element: <InputAttendancePage />,
        },
        {
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
        },
        {
          path: "/teacher-dashboard/mainPage",
          element: <MainPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/studentPage",
          element: <StudentPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/teacherPage",
          element: <TeacherPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/studentPage/addStudentPage",
          element: <AddStudentPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/studentPage/updateStudentPage",
          element: <UpdateStudentPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/studentPage/deleteStudentPage",
          element: <DeleteStudentPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/teacherPage/addTeacherPage",
          element: <AddTeacherPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/teacherPage/updateTeacherPage",
          element: <UpdateTeacherPage />,
        },
        {
          path: "/teacher-dashboard/mainPage/teacherPage/deleteTeacherPage",
          element: <DeleteTeacherPage />,
        },
        {
          path:"/teacher-dashboard/feeManagement",
          element: <FeeManagement />,
        },
        {
          path: "/teacher-dashboard/reportsPage/feeReports",
          element: (
            <ReportPage
              endPoint1="getOneStudentFeeReport"
              endPoint2="getWholeClassFeeReport"
              children="Fee Report"
            />
          ),
        },
        {
          path: "/teacher-dashboard/reportsPage/attendanceReports",
          element: (
            <ReportPage
              endPoint1="getOneStudentAttendance"
              endPoint2="getClassAttendance"
              children="Attendance Report"
            />
          ),
        },
        {
          path: "/teacher-dashboard/reportsPage",
          element: <ReportsPageMain />,
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
