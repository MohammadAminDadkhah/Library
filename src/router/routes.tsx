import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [

        ],
    },
    {
        path: '/login',
        element: <p>Login</p>,
    },
    {
        path: '/register',
        element: <p>Register</p>,
    },

]);

export default router;