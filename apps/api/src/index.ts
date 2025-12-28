import "dotenv/config"
import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import {prisma} from "./lib/prisma";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
console.log("DB URL:", process.env.DATABASE_URL)


app.get("/health", (_req, res) => {
    res.json({ status: "ok" })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
})

app.get("/debug/users", async (_req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})
