import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputAttendancePage from "./components/inputAttendancePage";
import EditAttendancePage from "./components/editAttendancePage";
import Dashboard from "./components/dashboard";
import StartPoint from "./components/StartPoint";
import ReportsPage from "./components/reportsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPoint />,
      children: [
        {
          path: "/inputAttendance",
          element: <InputAttendancePage />,
        },
        {
          path: "/editAttendance",
          element: <EditAttendancePage/>,
        },
        {
          path: "/dashBoard",
          element: <Dashboard />,
        },
        {
          path: "/reports",
          element: <ReportsPage/>
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
