"use client"

import Link from "next/link"
import { ArrowUpRight, CreditCard, HardDrive, LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import { PriceDisplay } from "@/components/price-display"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/contexts/currency-context"
import { useAuth } from "@/contexts/auth-context"
import { LanguageSelector } from "@/components/language-selector"
import { CurrencySelector } from "@/components/currency-selector"
import { MateCloudLogo } from "@/components/mate-cloud-logo"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()
  const { user, logout, loading } = useAuth()
  const [mounted, setMounted] = useState(false)

  // Actualizar el precio del plan profesional en BRL
  const corePlanPrice = 99.9 // Precio quincenal en BRL

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mate-600 mx-auto"></div>
          <p className="mt-4 text-mate-700">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-mate-50 lg:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-16 items-center border-b px-6 bg-white">
              <MateCloudLogo />
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-mate-100 px-3 py-2 text-mate-900 transition-all hover:text-mate-900"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-mate-700 transition-all hover:text-mate-900 hover:bg-mate-50"
                >
                  <HardDrive className="h-4 w-4" />
                  {t("nav.myPCs")}
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-mate-700 transition-all hover:text-mate-900 hover:bg-mate-50"
                >
                  <CreditCard className="h-4 w-4" />
                  {t("nav.billing")}
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-mate-700 transition-all hover:text-mate-900 hover:bg-mate-50"
                >
                  <Settings className="h-4 w-4" />
                  {t("nav.settings")}
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card className="border-mate-200">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="rounded-full bg-mate-100 p-2">
                    <User className="h-4 w-4 text-mate-700" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium text-mate-900">{user?.name || "Usuario"}</p>
                    <p className="text-xs text-mate-700">{user?.email || "usuario@ejemplo.com"}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto h-8 w-8 text-mate-700 hover:text-mate-900"
                    onClick={() => logout()}
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="sr-only">{t("dashboard.logout")}</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 sticky top-0 z-50">
            <Link href="#" className="lg:hidden">
              <MateCloudLogo size="sm" />
              <span className="sr-only">Mate Cloud</span>
            </Link>
            <div className="ml-auto flex items-center gap-4">
              <LanguageSelector />
              <CurrencySelector />
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 border-mate-200 text-mate-700 hover:text-mate-900"
              >
                <User className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">{t("dashboard.myAccount")}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1 border-mate-200 text-mate-700 hover:text-mate-900 lg:hidden"
                onClick={() => logout()}
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">{t("dashboard.logout")}</span>
              </Button>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-mate-50">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  title: t("dashboard.activePCs"),
                  value: "2",
                  subtext: `+0% ${t("dashboard.lastMonth")}`,
                  icon: <HardDrive className="h-4 w-4 text-mate-600" />,
                },
                {
                  title: t("dashboard.cpuUsage"),
                  value: "45%",
                  progress: 45,
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-mate-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  title: t("dashboard.ramUsage"),
                  value: "60%",
                  progress: 60,
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-mate-600"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  ),
                },
                {
                  title: t("dashboard.storage"),
                  value: "35%",
                  progress: 35,
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-mate-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  ),
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-mate-200 shadow-sm hover:shadow-mate transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-mate-900">{stat.title}</CardTitle>
                      {stat.icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-mate-900">{stat.value}</div>
                      {stat.progress ? (
                        <Progress value={stat.progress} className="mt-2 bg-mate-100">
                          <div className="h-full bg-mate-600 rounded-full" style={{ width: `${stat.progress}%` }}></div>
                        </Progress>
                      ) : (
                        <p className="text-xs text-mate-700">{stat.subtext}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-4"
              >
                <Card className="border-mate-200 shadow-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-mate-900">{t("dashboard.myCloudPCs")}</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="rounded-lg border border-mate-200">
                      <div className="grid gap-4 p-4">
                        {[
                          {
                            name: t("dashboard.workPC"),
                            specs: "Windows 11 Pro • 4 CPU • 8GB RAM • 256GB SSD",
                          },
                          {
                            name: t("dashboard.designPC"),
                            specs: "Windows 11 Pro • 8 CPU • 16GB RAM • 512GB SSD",
                          },
                        ].map((pc, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                          >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-mate-600" />
                            <div className="grid gap-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium leading-none text-mate-900">{pc.name}</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 gap-1 border-mate-200 text-mate-700 hover:text-mate-900"
                                >
                                  <span className="whitespace-nowrap">{t("dashboard.connect")}</span>
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                              <p className="text-sm text-mate-700">{pc.specs}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-mate-600 hover:bg-mate-700 text-white">
                      {t("dashboard.createPC")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <Card className="border-mate-200 shadow-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-mate-900">{t("dashboard.currentPlan")}</CardTitle>
                    <CardDescription className="text-mate-700">{t("dashboard.currentPlanDescription")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-mate-100 p-1">
                            <MateCloudLogo size="sm" showText={false} />
                          </div>
                          <span className="text-sm font-medium text-mate-900">{t("dashboard.professionalPlan")}</span>
                        </div>
                        <PriceDisplay
                          amount={corePlanPrice}
                          className="text-sm font-bold text-mate-900"
                          period={t("pricing.twoWeeks")}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-mate-700">{t("dashboard.nextBilling")}</span>
                          <span className="text-mate-900">15 de junho, 2025</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-mate-700">{t("dashboard.paymentMethod")}</span>
                          <span className="text-mate-900">{t("dashboard.cardEnding")}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full border-mate-200 text-mate-700 hover:text-mate-900">
                      {t("dashboard.changePlan")}
                    </Button>
                    <Button variant="outline" className="w-full border-mate-200 text-mate-700 hover:text-mate-900">
                      {t("dashboard.updatePayment")}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
