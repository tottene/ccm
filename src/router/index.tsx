import {
    createBrowserRouter,
} from "react-router-dom"
import { Home } from "@/pages/home"
import { Ccm } from "@/pages/ccm"
import { Templates } from "@/pages/ccm/templates"
import { Template } from "@/pages/ccm/templates/register"
import { Saude } from "@/pages/saude"
import { Odonto } from "@/pages/odonto"
import { Prev } from "@/pages/prev"
import { Vida } from "@/pages/vida"
import { Login } from "@/pages/auth/login"
import { AuthLayout } from "@/pages/_layouts/auth"
import PrivateRoute from "./private-route"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/ccm", element: <Ccm /> },
            { path: "/ccm/templates", element: <Templates /> },
            { path: "/ccm/templates/new", element: <Template /> },
            { path: "/odonto", element: <Odonto /> },
            { path: "/prev", element: <Prev /> },
            { path: "/saude", element: <Saude /> },
            { path: "/vida", element: <Vida /> }
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
