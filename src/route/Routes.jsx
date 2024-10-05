import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import MainLayout from "../layout/MainLayout";
import SignUp from "../page/SignUp/SignUp";
import SignIn from "../page/SignIn/SignIn";
import Products from "../page/product/Products";
import ProductDetails from "../page/product/ProductDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/products',
                element: <PrivateRoute><Products /></PrivateRoute>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/products/${params.id}`)
            }
        ]
    },
]);