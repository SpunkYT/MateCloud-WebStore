import { NextResponse } from "next/server"

// En una aplicación real, usarías una base de datos
const MOCK_USERS = [
  {
    id: "1",
    name: "Usuario Demo",
    email: "usuario@ejemplo.com",
    password: "password123",
  },
  {
    id: "2",
    name: "Test User",
    email: "test@example.com",
    password: "test123",
  },
]

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password } = await request.json()

    // Validación básica
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Verificar si el email ya existe
    const existingUser = MOCK_USERS.find((u) => u.email === email)
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 })
    }

    // Crear nuevo usuario (en una app real, guardarías en la base de datos)
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      name: `${firstName} ${lastName}`,
      email,
      password, // En una app real, harías hash de la contraseña
    }

    MOCK_USERS.push(newUser)

    return NextResponse.json({ message: "User registered successfully" })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
