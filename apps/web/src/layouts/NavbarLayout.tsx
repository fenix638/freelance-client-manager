import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {Link} from "react-router-dom";
import {getToken} from "../lib/storage.ts";
import {useAuth} from "../features/auth/hooks.ts";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const token = getToken();
    const { logout } = useAuth()
    return (
        <header className="sticky top-0 z-50">
            {/* Top bar */}
            <div className="bg-white/70 backdrop-blur border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-lg font-semibold text-slate-900">
                        {/* Logo */}
                        <motion.a
                            href="/"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="text-lg font-semibold text-slate-900 tracking-tight"
                        >
                            Freelance<span className="text-sky-500">Manager</span>
                        </motion.a>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
                        <motion.a whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.97 }}
                                  className="hover:text-sky-500"
                                  href="#features">Features</motion.a>
                        <motion.a whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.97 }}
                                  className="hover:text-sky-500"
                                  href="#pricing">Pricing</motion.a>
                        <motion.a whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.97 }}
                                  className="hover:text-sky-500"
                                  href="#contact">Contact</motion.a>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        { token ? (
                            <>
                                <Link to="/dashboard">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm"
                                    >
                                        Dashboard
                                    </motion.button>
                                </Link>
                                <Link to="/">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm pa-2 ml-2"
                                        onClick={logout}
                                    >
                                        Logout
                                    </motion.button>
                                </Link>
                            </>
                            ) : (
                            <>
                                <Link to="/register">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm"
                                    >
                                        Get Started
                                    </motion.button>
                                </Link>
                                <Link to="/login">
                                    <motion.button
                                    whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm pa-2 ml-2"
                                    >
                                Login
                                    </motion.button>
                                </Link>
                            </>)}

                    </div>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100"
                        aria-label="Open menu"
                    >
                        <svg
                            className="w-6 h-6 text-slate-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-4 left-4 right-4 bg-white rounded-2xl shadow-xl z-50 p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-lg font-semibold text-slate-900">
                                    {/* Logo */}
                                    <motion.a
                                        href="/"
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="text-lg font-semibold text-slate-900 tracking-tight"
                                    >
                                        Freelance<span className="text-sky-500">Manager</span>
                                    </motion.a>
                                </div>

                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    className="p-2 rounded-lg hover:bg-slate-100"
                                >
                                    ✕
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4 text-slate-700 text-sm">
                                {["Features", "Pricing", "Contact"].map(link => (
                                    <a
                                        key={link}
                                        onClick={() => setOpen(false)}
                                        className="py-2 hover:text-slate-900 transition"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>
                            <Link to="/register">
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl text-sm hover:text-sky-500"
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                            <Link to="/register">
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-6 w-full bg-sky-500 text-white py-3 rounded-xl text-sm hover:text-slate-900"
                                >
                                    Login
                                </motion.button>
                            </Link>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
