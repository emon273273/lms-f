import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/common/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import Blog from "./pages/Blog";

import UserDashBoard from "./pages/dashboard/UserDashBoard";
import UserDashboard from "./pages/dashboard/UserDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

         {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },

  {

    path:"/dashboard",
    element:<UserDashboard />,
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
