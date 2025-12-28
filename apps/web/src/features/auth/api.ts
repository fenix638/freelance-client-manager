import { api } from "../../lib/api"
import type {
    LoginRequest,
    RegisterRequest,
    AuthResponse
} from "@fcm/types"

export async function login(data: LoginRequest): Promise<AuthResponse> {
    const res = await api.post("/auth/login", data)
    return res.data
}

export async function register(data: RegisterRequest): Promise<AuthResponse> {
    const res = await api.post("/auth/register", data)
    return res.data
}
