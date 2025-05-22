import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// En una aplicación real, usarías una base de datos y hash de contraseñas
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
    const { email, password } = await request.json()

    // Validación básica
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    // Buscar usuario (en una app real, buscarías en la base de datos)
    const user = MOCK_USERS.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    // Crear sesión (en una app real, usarías JWT o similar)
    const session = {
      userId: user.id,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 días
    }

    // Guardar sesión en cookie
    cookies().set("session", JSON.stringify(session), {
      httpOnly: true,
      expires: session.expires,
      path: "/",
    })

    // Devolver usuario sin contraseña
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({ user: userWithoutPassword })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
