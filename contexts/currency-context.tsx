"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Currency = "USD" | "BRL" | "ARS"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (amount: number) => string
  convertPrice: (amount: number) => number
}

// Tasas de cambio fijas para la demostración
// En una aplicación real, estas tasas se obtendrían de una API
// Ahora las tasas son relativas a BRL (Real Brasileño) como moneda base
const exchangeRates = {
  BRL: 1,
  USD: 0.18, // 1 BRL = 0.18 USD
  ARS: 200.48, // 1 BRL = 163.64 ARS
}

// Información de formato para cada divisa
const currencyFormats = {
  USD: {
    locale: "en-US",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  BRL: {
    locale: "pt-BR",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  ARS: {
    locale: "es-AR",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("BRL")
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  // Convierte un precio en BRL a la divisa seleccionada
  const convertPrice = (amountBRL: number): number => {
    if (!mounted) return amountBRL // Durante la hidratación del servidor
    return amountBRL * exchangeRates[currency]
  }

  // Formatea un precio según la divisa seleccionada usando Intl.NumberFormat
  const formatPrice = (amountBRL: number): string => {
    if (!mounted) return `R$ ${amountBRL.toFixed(2)}` // Durante la hidratación del servidor

    const convertedAmount = convertPrice(amountBRL)
    const format = currencyFormats[currency]

    return new Intl.NumberFormat(format.locale, {
      style: "currency",
      currency: format.currency,
      minimumFractionDigits: format.minimumFractionDigits,
      maximumFractionDigits: format.maximumFractionDigits,
    }).format(convertedAmount)
  }

  const value = {
    currency,
    setCurrency,
    formatPrice,
    convertPrice,
  }

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
