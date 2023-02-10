import "./App.css";
import { Layout, Test, FeeManagement } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FeeManagement />,
      children: [
        
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
