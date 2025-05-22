"use client"

import { useCurrency } from "@/contexts/currency-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency()

  // Información detallada de cada divisa
  const currencies = {
    USD: {
      code: "USD",
      symbol: "$",
      name: "US Dollar",
      flag: "🇺🇸",
      fullName: "United States Dollar",
    },
    BRL: {
      code: "BRL",
      symbol: "R$",
      name: "Real Brasileiro",
      flag: "🇧🇷",
      fullName: "Brazilian Real",
    },
    ARS: {
      code: "ARS",
      symbol: "$",
      name: "Peso Argentino",
      flag: "🇦🇷",
      fullName: "Argentine Peso",
    },
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-2 min-w-[100px] px-3 relative">
          <span className="text-lg mr-1">{currencies[currency].flag}</span>
          <span className="font-medium">{currencies[currency].symbol}</span>
          <span className="text-xs text-muted-foreground">{currency}</span>
          <span className="absolute right-1 top-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mate-500"></span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[220px]">
        <DropdownMenuLabel>Seleccionar divisa</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.values(currencies).map((currencyOption) => (
          <DropdownMenuItem
            key={currencyOption.code}
            onClick={() => setCurrency(currencyOption.code as any)}
            className={cn(
              "flex items-center gap-2 cursor-pointer py-2",
              currency === currencyOption.code && "bg-muted font-medium",
            )}
          >
            <span className="text-xl">{currencyOption.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{currencyOption.code}</span>
              <span className="text-xs text-muted-foreground">{currencyOption.fullName}</span>
            </div>
            {currency === currencyOption.code && <span className="ml-auto h-2 w-2 rounded-full bg-mate-500"></span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
