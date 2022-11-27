import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import AdvertisedItems from "../components/AdvertisedItems";
import AllSellers from "../components/AllSellers";
import AllUsers from "../components/AllUsers";
import Blogs from "../components/Blogs";


import ErrorPage from "../components/ErrorPage";
import CategoryProducts from "../components/Home/CategoryProducts";
import Home from "../components/Home/Home";
import MyOrders from "../components/MyOrders";
import MyProducts from "../components/MyProducts";
import MyWishList from "../components/MyWishList";
import ReportedItems from "../components/ReportedItems";
import SignIn from "../components/SignUp/SignIn";
import SignUp from "../components/SignUp/SignUp";
import DashbordRoot from "./DashbordRoot";
import PrivateRoute from "./PrivateRoute";
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
        path: "/category/:id",
        element: <CategoryProducts/>,
        loader:({params}) => fetch (`http://localhost:5000/category/${params.id}`)
      },

      {
        path: "/advertise",
        element: <AdvertisedItems/>,
      },
      {
        path: "/myProducts",
        element: <PrivateRoute><MyProducts/></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
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
  {
    path:'/dashboard',
    element:<DashbordRoot/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/dashboard',
        element: <AddProduct/>
      },
      {
        path:'/dashboard/allSeller',
        element: <AllSellers/>
      },
      {
        path:'/dashboard/allUsers',
        element: <AllUsers/>
      },
      {
        path:'/dashboard/myOrders',
        element: <MyOrders/>
      },
      {
        path:'/dashboard/myWishList',
        element: <MyWishList/>
      },
      {
        path:'/dashboard/reportedItem',
        element: <ReportedItems/>
      },
    ]
  }
]);

export default router;
