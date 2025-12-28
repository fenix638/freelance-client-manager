import { Router } from "express"
import * as authController from "../controllers/auth.controller"
import { z } from "zod"
import { ClientDTO } from "@fcm/types"
import {authMiddleware} from "../middleware/auth.middleware";
import {prisma} from "../lib/prisma";


const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})

const router = Router()


router.get("/", authMiddleware, async (req, res) => {
    const userId = (req as any).user.id

    const clients = await prisma.client.findMany({
        where: { userId }
    })

    const result: ClientDTO[] = clients.map((c) => ({
        id: c.id,
        name: c.name,
        email: c.email ?? undefined
    }))

    res.json(result)
})

router.post("/register", authController.register)

router.post("/login", async (req, res, next) => {
    try {
        req.body = loginSchema.parse(req.body)
        await authController.login(req, res)
    } catch (err) {
        next(err)
    }
})

export default router
