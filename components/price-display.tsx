"use client"

import { useCurrency } from "@/contexts/currency-context"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PriceDisplayProps {
  amount: number
  className?: string
  showCurrency?: boolean
  period?: string
}

export function PriceDisplay({ amount, className, showCurrency = false, period }: PriceDisplayProps) {
  const { formatPrice, currency } = useCurrency()
  const [isChanging, setIsChanging] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  // Efecto para animar el cambio de precio
  useEffect(() => {
    if (!mounted) return
    setIsChanging(true)
    const timer = setTimeout(() => setIsChanging(false), 300)
    return () => clearTimeout(timer)
  }, [currency, mounted])

  if (!mounted) {
    // Renderizado simple durante la hidratación del servidor
    return (
      <span className={className}>
        {`R$ ${amount.toFixed(2)}`}
        {period && <span className="text-sm text-muted-foreground">{period}</span>}
      </span>
    )
  }

  return (
    <span className={cn("transition-all duration-300", isChanging && "scale-110 text-emerald-600", className)}>
      {formatPrice(amount)}
      {showCurrency && <span className="text-xs ml-1 opacity-70">{currency}</span>}
      {period && <span className="text-sm text-muted-foreground">{period}</span>}
    </span>
  )
}
