import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPoint from "./components/StartPoint";
import ReportPage from "./components/ReportsPage";
import ReportsPageMain from "./components/ReportsPageMain";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPoint />,
      children: [
        {
          path: "/reportsPage",
          element: <ReportsPageMain />,
        },
        {
          path: "/reportsPage/feeReports",
          element: (
            <ReportPage
              endPoint1="getOneStudentFeeReport"
              endPoint2="getWholeClassFeeReport"
              children="Fee Report"
            />
          ),
        },
        {
          path: "/reportsPage/attendanceReports",
          element: (
            <ReportPage
              endPoint1="getOneStudentAttendance"
              endPoint2="getClassAttendance"
              children="Attendance Report"
            />
          ),
        },
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
