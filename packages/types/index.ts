export interface User {
    id: string
    email: string
    createdAt: string
}

export interface Client {
    id: string
    name: string
    email?: string
}

// AUTH

export interface AuthUser {
    id: string
    email: string
}

export interface AuthResponse {
    user: AuthUser
    token: string
}

export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    email: string
    password: string
}

// CLIENTS

export interface ClientDTO {
    id: string
    name: string
    email?: string
}

export interface CreateClientRequest {
    name: string
    email?: string
}
