import { motion, type HTMLMotionProps } from "framer-motion"

type ButtonProps = HTMLMotionProps<"button"> & {
    variant?: "primary" | "ghost"
}

export default function Button({
                                   variant = "primary",
                                   className = "",
                                   ...props
                               }: ButtonProps) {
    const base =
        "px-4 py-2 rounded-xl font-medium transition focus:outline-none"

    const styles = {
        primary: "bg-accent text-white hover:opacity-90",
        ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
    }

    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={`${base} ${styles[variant]} ${className}`}
            {...props}
        />
    )
}
