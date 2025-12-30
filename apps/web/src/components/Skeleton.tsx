import { motion } from "framer-motion"

interface SkeletonProps {
    className?: string
}

export default function Skeleton({ className = "" }: SkeletonProps) {
    return (
        <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className={`bg-slate-200 dark:bg-slate-800 rounded-xl ${className}`}
        />
    )
}
