import { motion } from "framer-motion"
export default function AuthNavbarLayout() {

    return (


        <header className="sticky top-0 z-50">
            <div className="bg-white/70 backdrop-blur border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
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
            </div>
        </header>

    )
}
