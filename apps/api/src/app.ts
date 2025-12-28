import express from "express"
import cors from "cors"
import { errorMiddleware } from "./middleware/error.middleware"
import authRoutes from "./routes/auth.routes"
import clientRoutes from "./routes/client.routes"

export const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/clients", clientRoutes)

app.use(errorMiddleware)
