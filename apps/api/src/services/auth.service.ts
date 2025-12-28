import { prisma } from "../lib/prisma"
import { hashPassword, comparePassword } from "../lib/hash"
import { signToken } from "../lib/jwt"

export async function register(email: string, password: string) {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) throw new Error("Email already in use")

    const hashed = await hashPassword(password)

    const user = await prisma.user.create({
        data: { email, password: hashed }
    })

    const token = signToken({ id: user.id })

    return { user, token }
}

export async function login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error("Invalid credentials")

    const valid = await comparePassword(password, user.password)
    if (!valid) throw new Error("Invalid credentials")

    const token = signToken({ id: user.id })

    return { user, token }
}
