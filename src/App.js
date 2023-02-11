import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputAttendancePage from "./components/inputAttendancePage";
import EditAttendancePage from "./components/editAttendancePage";
import StartPoint from "./components/StartPoint";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPoint />,
      children: [
        {
          path: "/",
          element: <InputAttendancePage />,
        },
        {
          path: "/editAttendance",
          element: <EditAttendancePage/>,
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
