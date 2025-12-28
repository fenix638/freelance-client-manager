import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../features/auth/pages/LoginPage"
import RegisterPage from "../features/auth/pages/RegisterPage"
import DashboardLayout from "../layouts/DashboardLayout"
import ClientsPage from "../features/clients/pages/ClientsPage"

export const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    {
        path: "/",
        element: <DashboardLayout />,
        children: [{ path: "clients", element: <ClientsPage /> }]
    }
])
