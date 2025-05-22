"use client"

import { ArrowRight, Monitor, Cpu, HardDrive } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // No renderizar nada durante la hidratación del servidor
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-mate-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-mate-900">
                {t("hero.title")}
              </h1>
              <p className="max-w-[600px] text-mate-700 md:text-xl">{t("hero.subtitle")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-mate-600 hover:bg-mate-700 text-white">
                {t("hero.start")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-mate-600 text-mate-600 hover:bg-mate-50">
                {t("hero.plans")}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
                className="bg-white rounded-xl shadow-mate p-6 border border-mate-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      src="/images/mate-cloud-logo.png"
                      alt="Mate Cloud Logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="ml-2 font-semibold text-mate-900">Mate Cloud</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-mate-50 rounded-lg flex items-center justify-center">
                    <Monitor className="h-16 w-16 text-mate-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-mate-50 p-4 rounded-lg flex flex-col items-center">
                      <Cpu className="h-8 w-8 text-mate-600 mb-2" />
                      <span className="text-sm font-medium text-mate-900">8 Core CPU</span>
                    </div>
                    <div className="bg-mate-50 p-4 rounded-lg flex flex-col items-center">
                      <HardDrive className="h-8 w-8 text-mate-600 mb-2" />
                      <span className="text-sm font-medium text-mate-900">512GB SSD</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-mate-100 rounded-lg p-4 shadow-md border border-mate-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 rounded-full bg-mate-400 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white animate-pulse-slow" />
                  </div>
                  <span className="text-sm font-medium text-mate-900">{t("hero.accessAnywhere")}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
