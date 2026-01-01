import { motion } from "framer-motion"
import { useAuth } from "../hooks"
import { useState, useEffect } from "react"
import AuthNavbarLayout from "../../../layouts/AuthNavbarLayout.tsx"
import {getToken} from "../../../lib/storage.ts";
import {useNavigate} from "react-router-dom";

const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function LoginPage() {
    const { login, loading } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const token = getToken()
        if (token) {
            navigate("/dashboard", { replace: true })
        }
    }, [navigate])

    const canSubmit = isValidEmail(email) && password.length > 0

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Navbar */}
            <AuthNavbarLayout />

            {/* Centered content */}
            <div className="flex flex-1 items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl"
                >
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">
                        Welcome back
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Log in to your Freelance Manager account
                    </p>

                    {/* Email */}
                    <div className="mb-4">
                        <input
                            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2
                ${email && !isValidEmail(email)
                                ? "border-red-400 focus:ring-red-300"
                                : "border-slate-300 focus:ring-sky-500"
                            }`}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {email && !isValidEmail(email) && (
                            <p className="mt-1 text-xs text-red-500">
                                Please enter a valid email
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute right-2 top-3 text-xs text-slate-500 hover:text-slate-700"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        disabled={!canSubmit || loading}
                        onClick={() => login(email, password)}
                        className={`w-full py-2.5 rounded-lg transition
              ${canSubmit
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-slate-300 text-slate-500 cursor-not-allowed"
                        }`}
                    >
                        {loading ? "Logging in..." : "Log in"}
                    </button>

                    {/* Footer links */}
                    <p className="mt-4 text-sm text-center text-slate-600">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-sky-500 hover:underline">
                            Create one
                        </a>
                    </p>

                    <p className="mt-2 text-xs text-center text-slate-400">
                        Forgot your password?{" "}
                        <a href="/forgot-password" className="hover:underline">
                            Reset it
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
