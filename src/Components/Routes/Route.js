import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../DashBoard/DashboardLayout";
import Form from "../Form/Form";
import Home from "../Home/Home";
import SimplePage from "../Pages/SimplePage";
import Root from "../Root/Root";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/Signup";
import UploadedProducts from "../Upload/UploadedProducts";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Form></Form>,
      },
      {
        path: "/dashboard/myproducts",
        element: <UploadedProducts></UploadedProducts>,
      },
    ],
  },
]);
