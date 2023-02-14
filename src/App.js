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
          path: "/admin/admin-dashboard/attendanceManagementPage",
          element: <AttendanceManagementPage />,
        },
        {
          path: "/teacher/teacher-dashboard/editAttendance",
          element: <EditAttendancePage />,
        },
        {
          path: "/admin/admin-dashboard/attendanceManagementPage/editAttendance",
          element: <EditAttendancePage />,
        },
        {
          path: "/teacher/teacher-dashboard/inputAttendance",
          element: <InputAttendancePage />,
        },
        {
          path: "/admin/admin-dashboard/attendanceManagementPage/inputAttendance",
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
          path: "/admin/admin-dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "/teacher",
          element: <TeacherLogin />,
        },

        {
          path: "/teacher/teacher-dashboard",
          element: <AttendanceManagementPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage",
          element: <MainPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/studentPage",
          element: <StudentPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/teacherPage",
          element: <TeacherPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/studentPage/addStudentPage",
          element: <AddStudentPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/studentPage/updateStudentPage",
          element: <UpdateStudentPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/studentPage/deleteStudentPage",
          element: <DeleteStudentPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/teacherPage/addTeacherPage",
          element: <AddTeacherPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/teacherPage/updateTeacherPage",
          element: <UpdateTeacherPage />,
        },
        {
          path: "/admin/admin-dashboard/mainPage/teacherPage/deleteTeacherPage",
          element: <DeleteTeacherPage />,
        },
        {
          path:"/admin/admin-dashboard/feeManagement",
          element: <FeeManagement />,
        },
        {
          path: "/admin/admin-dashboard/reportsPage/feeReports",
          element: (
            <ReportPage
              endPoint1="getOneStudentFeeReport"
              endPoint2="getWholeClassFeeReport"
              children="Fee Report"
            />
          ),
        },
        {
          path: "/admin/admin-dashboard/reportsPage/attendanceReports",
          element: (
            <ReportPage
              endPoint1="getOneStudentAttendance"
              endPoint2="getClassAttendance"
              children="Attendance Report"
            />
          ),
        },
        {
          path: "/admin/admin-dashboard/reportsPage",
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
