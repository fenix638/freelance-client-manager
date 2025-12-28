import { motion } from "framer-motion"
import { useAuth } from "../hooks"
import { useState } from "react"

export default function LoginPage() {
    const { login, loading } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-xl shadow-xl w-96"
            >
                <h1 className="text-2xl font-bold mb-6">Welcome back</h1>

                <input
                    className="w-full mb-3 p-2 border rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full mb-4 p-2 border rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    disabled={loading}
                    onClick={() => login(email, password)}
                    className="w-full bg-black text-white py-2 rounded hover:opacity-90"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </motion.div>
        </div>
    )
}
