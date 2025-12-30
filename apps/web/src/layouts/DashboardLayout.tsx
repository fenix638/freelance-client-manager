import { Outlet, Navigate } from "react-router-dom"
import { getToken } from "../lib/storage"

export default function DashboardLayout() {
    if (!getToken()) {
        return <Navigate to="/login" />
    }

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-slate-900 text-white p-6">
                <h2 className="text-lg font-semibold mb-6">Freelance CM</h2>

                <nav className="space-y-2">
                    <a className="block px-3 py-2 rounded hover:bg-white/10">
                        Clients
                    </a>
                    <a className="block px-3 py-2 rounded hover:bg-white/10">
                        Projects
                    </a>
                </nav>
            </aside>

            <main className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
    )
}
