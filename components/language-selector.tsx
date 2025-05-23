"use client"

import { useLanguage, type Language } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  {
    code: "es",
    name: "Español",
    flag: "🇦🇷"
  },
  {
    code: "pt-BR",
    name: "Português",
    flag: "🇧🇷"
  }
]

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 gap-2 px-3 hover:bg-accent/80 transition-colors"
        >
          <span className="text-base">{currentLang.flag}</span>
          <span className="font-medium hidden sm:inline">
            {currentLang.name}
          </span>
          <ChevronDown className="h-3.5 w-3.5 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => setLanguage(lang.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
