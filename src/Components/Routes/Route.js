import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import DashboardLayout from "../DashBoard/DashboardLayout";
import Form from "../Form/Form";
import Home from "../Home/Home";
import MyPurchases from "../MyPurchases/MyPurchases";
import SimplePage from "../Pages/SimplePage";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";
import Root from "../Root/Root";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/Signup";
import UnsoldProductsPage from "../UnsoldProductsPage/UnsoldProductsPage";
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
        path: "/unsoldproducts",
        element: <UnsoldProductsPage></UnsoldProductsPage>,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage></ProductDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allproducts/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
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
      {
        path: "/dashboard/mypurchase",
        element: <MyPurchases></MyPurchases>,
      },
    ],
  },
]);
