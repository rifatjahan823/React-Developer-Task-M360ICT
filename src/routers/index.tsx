import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Dashborad from "../pages/Dashboard/Dashborad";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../pages/Dashboard/Users";
import Sales from "../pages/Dashboard/Sales";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children:[
        {
          index:true,
          element:<Dashborad/>
        },
        {
          path:'users',
          element:<PrivateRoute ><Users initialPage={1}/></PrivateRoute>
        },
        {
          path:'sales',
          element:<Sales/>
        }
    ]
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/signin',
    element:<SignIn/>
  },
]);

export default router