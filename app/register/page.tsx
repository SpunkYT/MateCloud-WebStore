"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import { LanguageSelector } from "@/components/language-selector"
import { CurrencySelector } from "@/components/currency-selector"
import { MateCloudLogo } from "@/components/mate-cloud-logo"
import { motion } from "framer-motion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function RegisterPage() {
  const { t } = useLanguage()
  const { register, loading } = useAuth()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validación básica
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    const result = await register({ firstName, lastName, email, password })
    if (!result.success) {
      setError(result.message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-mate-50">
      <div className="flex h-16 items-center border-b px-4 lg:px-6 bg-white">
        <MateCloudLogo />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/"
            className="flex items-center h-8 px-3 text-sm font-medium rounded-md hover:text-mate-600 transition-colors"
          >
            {t("nav.home")}
          </Link>
          <LanguageSelector />
          <CurrencySelector />
        </nav>
      </div>
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <Card className="border-mate-200 shadow-mate">
            <CardHeader>
              <CardTitle className="text-2xl text-mate-900">{t("register.title")}</CardTitle>
              <CardDescription className="text-mate-700">{t("register.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name" className="text-mate-900">
                      {t("register.firstName")}
                    </Label>
                    <Input
                      id="first-name"
                      className="border-mate-200 focus:border-mate-400 focus:ring-mate-400"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name" className="text-mate-900">
                      {t("register.lastName")}
                    </Label>
                    <Input
                      id="last-name"
                      className="border-mate-200 focus:border-mate-400 focus:ring-mate-400"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-mate-900">
                    {t("register.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="border-mate-200 focus:border-mate-400 focus:ring-mate-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-mate-900">
                    {t("register.password")}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="border-mate-200 focus:border-mate-400 focus:ring-mate-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password" className="text-mate-900">
                    {t("register.confirmPassword")}
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="border-mate-200 focus:border-mate-400 focus:ring-mate-400"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-mate-600 hover:bg-mate-700 text-white" disabled={loading}>
                  {loading ? "Loading..." : t("register.button")}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mt-4 text-center text-sm text-mate-700">
                {t("register.hasAccount")}{" "}
                <Link href="/login" className="text-mate-600 underline-offset-4 hover:underline">
                  {t("register.login")}
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
      <footer className="border-t py-4 px-4 lg:px-6 bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MateCloudLogo size="sm" />
            <p className="text-sm text-mate-700">{t("footer.rights")}</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm text-mate-700 hover:text-mate-900 transition-colors" href="#">
              {t("footer.terms")}
            </Link>
            <Link className="text-sm text-mate-700 hover:text-mate-900 transition-colors" href="#">
              {t("footer.privacy")}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
