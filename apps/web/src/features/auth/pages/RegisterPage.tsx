import { motion } from "framer-motion"
import { useAuth } from "../hooks"
import { useState } from "react"
import AuthNavbarLayout from "../../../layouts/AuthNavbarLayout.tsx"

export default function RegisterPage() {
    const { register, loading } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const passwordChecks = {
        length: password.length >= 8,
        number: /\d/.test(password),
    }

    const canSubmit =
        isValidEmail(email) &&
        passwordChecks.length &&
        passwordChecks.number


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
                        Create your account
                    </h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Start managing your freelance business
                    </p>

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
                                Please enter a valid email address
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <ul className="mt-2 space-y-1 text-xs">
                            <li className={`flex items-center gap-2 ${
                                passwordChecks.length ? "text-green-600" : "text-slate-400"
                            }`}>
                                ✓ At least 8 characters
                            </li>
                            <li className={`flex items-center gap-2 ${
                                passwordChecks.number ? "text-green-600" : "text-slate-400"
                            }`}>
                                ✓ Contains a number
                            </li>
                        </ul>
                    </div>

                    <button
                        disabled={!canSubmit || loading}
                        onClick={() => register(email, password)}
                        className={`w-full py-2.5 rounded-lg transition
    ${canSubmit
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "bg-slate-300 text-slate-500 cursor-not-allowed"
                        }`}
                    >
                        {loading ? "Creating account..." : "Create account"}
                    </button>

                    <p className="mt-4 text-sm text-center text-slate-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-sky-500 hover:underline">
                            Log in
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
