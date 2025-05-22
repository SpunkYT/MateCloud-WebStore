import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { LanguageProvider } from "@/contexts/language-context"
import { CurrencyProvider } from "@/contexts/currency-context"
import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Mate Cloud | Cloud PC Service",
  description: "Access powerful PCs from anywhere with Mate Cloud",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <LanguageProvider>
              <CurrencyProvider>{children}</CurrencyProvider>
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
