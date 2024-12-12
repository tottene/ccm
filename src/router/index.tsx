import {
    createBrowserRouter,
} from "react-router-dom"
import { Home } from "../pages/home"
import { Template } from "../pages/templates"
import { Saude } from "../pages/saude"
import { Login } from "../pages/auth/login"
import { AuthLayout } from "@/pages/_layouts/auth"
import PrivateRoute from "./private-route"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/template", element: <Template /> },
            { path: "/saude", element: <Saude /> }
        ]
    },
    { 
        path: "/", 
        element: <AuthLayout />,
        children: [
            { path: "/login", element: <Login /> },
        ]
    }
])
