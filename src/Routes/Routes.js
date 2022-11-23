import { createBrowserRouter } from "react-router-dom";


import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import SignIn from "../components/SignUp/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ],
  },
]);

export default router;
