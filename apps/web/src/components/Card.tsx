import { motion } from "framer-motion"
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="bg-surface dark:bg-slate-900 rounded-xl shadow-sm p-4"
        >
            {children}
        </motion.div>
    )
}
