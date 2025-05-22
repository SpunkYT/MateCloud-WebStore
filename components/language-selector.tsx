"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-2">
          <Globe className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            {language === "es" ? "Español" : "Português"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("es")}>{t("language.es")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("pt-BR")}>{t("language.ptBR")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
