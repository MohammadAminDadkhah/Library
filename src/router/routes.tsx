import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Login from "../page/login/Login.tsx";
import Register from "../page/register/Register.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [],
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },

]);

export default router;