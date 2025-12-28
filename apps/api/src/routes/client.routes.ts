import { Router } from "express"
import { authMiddleware } from "../middleware/auth.middleware"
import { prisma } from "../lib/prisma"

const router = Router()

router.get("/", authMiddleware, async (req, res) => {
    const userId = (req as any).user.id

    const clients = await prisma.client.findMany({
        where: { userId }
    })

    res.json(clients)
})

export default router
