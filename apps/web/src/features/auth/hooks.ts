import { useState } from "react"
import * as authApi from "./api"
import { setToken, clearToken } from "../../lib/storage"
import { useNavigate } from "react-router-dom"

export function useAuth() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function login(email: string, password: string) {
        setLoading(true)
        try {
            const { token } = await authApi.login({ email, password })
            setToken(token)
            navigate("/dashboard")
        } finally {
            setLoading(false)
        }
    }

    async function register(email: string, password: string) {
        setLoading(true)
        try {
            const { token } = await authApi.register({ email, password })
            setToken(token)
            navigate("/login")
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        clearToken()
        navigate("/login")
    }

    return { login, logout, loading, register }
}
