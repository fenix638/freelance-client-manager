import { motion } from "framer-motion"
import { container, item } from "../styles/animations"

export default function FooterLayout() {
    return (
        <motion.footer
            className="w-full bg-slate-900 text-slate-300"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                <motion.div variants={item}>
                    <h3 className="text-xl font-semibold text-white">
                        Freelance<span className="text-sky-500">Manager</span>
                    </h3>
                    <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                        Manage clients, projects, and invoices in one clean and simple platform built for freelancers.
                    </p>
                </motion.div>

                <motion.div variants={item}>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        {["Dashboard", "Clients", "Invoices", "Projects"].map(link => (
                            <motion.li
                                key={link}
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a href="#" className="hover:text-sky-400 transition-colors">{link}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div variants={item}>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        {["About", "Roadmap", "Contact"].map(link => (
                            <motion.li
                                key={link}
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a href="#" className="hover:text-sky-400 transition-colors">{link}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div variants={item}>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        {["Privacy Policy", "Terms of Service"].map(link => (
                            <motion.li
                                key={link}
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a href="#" className="hover:text-sky-400 transition-colors">{link}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div className="border-t border-slate-700" variants={item}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} Freelance Manager. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with ❤️ for freelancers</p>
                </div>
            </motion.div>
        </motion.footer>
    )
}
