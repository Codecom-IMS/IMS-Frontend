import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/index.jsx";
import AdminLogin from "./components/Login/AdminLogin/index.jsx";
import { Waves } from "./components";
import TeacherLogin from "./components/Login/TeacherLogin/index.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard/adminDashboard.jsx";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/teacherDashboard.jsx";
import StartPoint from "./components/StartPoint";
import "./_App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPoint />,
    children: [
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
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inner-header flex">
          <RouterProvider router={router} />
        </div>
        <Waves />
      </header>
    </div>
  );
}

export default App;
