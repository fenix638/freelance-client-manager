import FooterLayout from "../../../layouts/FooterLayout.tsx";
import { motion } from "framer-motion"
import NavbarLayout from "../../../layouts/NavbarLayout.tsx";
import { container, item } from "../../../styles/animations"
import {Link} from "react-router-dom";


export default function HomePage() {

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <NavbarLayout />

            {/* HERO */}
            <motion.main
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex-grow"
            >
                <section className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 py-32 text-center">

                        <motion.h1
                            variants={item}
                            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
                        >
                            Manage your freelance business
                            <span className="block text-sky-500 mt-2">
                without the chaos
              </span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="mt-6 max-w-2xl mx-auto text-lg text-slate-600"
                        >
                            Clients, projects, and invoices in one clean, fast, and
                            beautifully designed platform for freelancers.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mt-10 flex justify-center gap-4"
                        >
                            <Link to="/register" className="z-10">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm"
                                >
                                    Start for free
                                </motion.button>
                            </Link>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white/50 border border-slate-300 px-6 py-3 rounded-xl text-sm text-slate-700 z-10"
                            >
                                View demo
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute inset-x-0 -bottom-32 h-96 bg-gradient-to-r from-sky-400/20 via-sky-300/20 to-sky-500/20 blur-3xl" />
                </section>

                {/* FEATURES */}
                <section
                    id="features"
                    className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24"
                >
                    <motion.h2 variants={item} className="text-3xl font-semibold text-slate-900 text-center">
                        Features
                    </motion.h2>

                    <div className="mt-12 grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Client management",
                                desc: "Track contacts, notes, and status in one place.",
                            },
                            {
                                title: "Invoices & payments",
                                desc: "Create invoices and get paid faster.",
                            },
                            {
                                title: "Project tracking",
                                desc: "Always know what you’re working on next.",
                            },
                        ].map((f) => (
                            <motion.div
                                key={f.title}
                                variants={item}
                                whileHover={{ y: -6 }}
                                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
                            >
                                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PRICING */}
                <section
                    id="pricing"
                    className="scroll-mt-20 bg-slate-50 py-24"
                >
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <motion.h2 variants={item} className="text-3xl font-semibold text-slate-900">
                            Simple pricing
                        </motion.h2>

                        <motion.p variants={item} className="mt-4 text-slate-600">
                            Start free. Upgrade when you grow.
                        </motion.p>

                        <motion.div variants={item} className="mt-12 max-w-md mx-auto p-8 bg-white rounded-2xl shadow border">
                            <h3 className="text-xl font-semibold text-slate-900">Pro</h3>
                            <p className="mt-2 text-4xl font-bold text-slate-900">
                                €12<span className="text-base font-normal text-slate-500">/month</span>
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-slate-600">
                                <li>Unlimited clients</li>
                                <li>Unlimited invoices</li>
                                <li>Email support</li>
                            </ul>
                            <Link to="/register">
                                <motion.button whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }} className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl text-sm">
                                    Get started
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* CONTACT */}
                <section
                    id="contact"
                    className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24 text-center"
                >
                    <motion.h2 variants={item} className="text-3xl font-semibold text-slate-900">
                        Get in touch
                    </motion.h2>

                    <motion.p variants={item} className="mt-4 text-slate-600">
                        Have questions or feedback? Let’s talk.
                    </motion.p>

                    <motion.button
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-8 bg-sky-500 text-white px-6 py-3 rounded-xl text-sm"
                    >
                        Contact us
                    </motion.button>
                </section>
            </motion.main>

            <FooterLayout />
        </div>
    )
}
