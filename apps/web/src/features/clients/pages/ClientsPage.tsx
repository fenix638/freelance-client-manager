import { useEffect, useState } from "react"
import { api } from "../../../lib/api.ts"
import { motion } from "framer-motion"
import type {ClientDTO} from "@fcm/types"

export default function ClientsPage() {
    const [clients, setClients] = useState<ClientDTO[]>([])

    useEffect(() => {
        api.get("/clients").then((res) => setClients(res.data))
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1 className="text-2xl font-bold mb-4">Clients</h1>

            <div className="grid grid-cols-3 gap-4">
                {clients.map((c: any) => (
                    <motion.div
                        key={c.id}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white p-4 rounded-xl shadow"
                    >
                        {c.name}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
