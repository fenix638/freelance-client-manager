import { Outlet, Navigate } from "react-router-dom"
import { getToken } from "../lib/storage"

export default function DashboardLayout() {
    if (!getToken()) {
        return <Navigate to="/login" />
    }

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-900 text-white p-4">
                <h2 className="text-xl font-bold">FCM</h2>
            </aside>

            <main className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
    )
}
