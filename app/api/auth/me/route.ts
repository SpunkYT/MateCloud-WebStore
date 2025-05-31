import { NextResponse } from "next/server"
import { cookies } from "next/headers"

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

export async function GET() {
  try {
    // Obtener sesión de la cookie
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("session")

    if (!sessionCookie) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const session = JSON.parse(sessionCookie.value)

    // Verificar si la sesión ha expirado
    if (new Date(session.expires) < new Date()) {
      const response = NextResponse.json({ message: "Session expired" }, { status: 401 })
      response.cookies.delete("session")
      return response
    }

    // Buscar usuario por ID
    const user = MOCK_USERS.find((u) => u.id === session.userId)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Devolver usuario sin contraseña
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error("Get user error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
