"use client"

import Link from "next/link"
import { CheckCircle, Cpu, Globe, HardDrive, Laptop, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useCurrency } from "@/contexts/currency-context"
import { LanguageSelector } from "@/components/language-selector"
import { CurrencySelector } from "@/components/currency-selector"
import { PriceDisplay } from "@/components/price-display"
import { MateCloudLogo } from "@/components/mate-cloud-logo"
import { HeroSection } from "@/components/hero-section"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Precios base en BRL (Reales Brasileños)
const basePrices = {
  pulse: 29.9, // Precio semanal para Mate Pulse en BRL
  core: 99.9, // Precio quincenal para Mate Core en BRL
  nova: 399.9, // Precio mensual para Mate Nova en BRL
}

export default function Home() {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  if (!mounted) {
    return null // No renderizar nada durante la hidratación del servidor
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <MateCloudLogo />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-mate-600 transition-colors" href="#features">
            {t("nav.features")}
          </Link>
          <Link className="text-sm font-medium hover:text-mate-600 transition-colors" href="#pricing">
            {t("nav.pricing")}
          </Link>
          <Link className="text-sm font-medium hover:text-mate-600 transition-colors" href="#how-it-works">
            {t("nav.how")}
          </Link>
          <Link className="text-sm font-medium hover:text-mate-600 transition-colors" href="#faq">
            {t("nav.faq")}
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <LanguageSelector />
          <CurrencySelector />
          <Button asChild className="bg-mate-600 hover:bg-mate-700 text-white">
            <Link href="/login">{t("nav.login")}</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-mate-100 px-3 py-1 text-sm text-mate-700">
                  {t("features.title")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-mate-900">
                  {t("features.subtitle")}
                </h2>
                <p className="max-w-[900px] text-mate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("features.description")}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Laptop className="h-6 w-6 text-mate-600" />,
                  title: t("features.universal.title"),
                  description: t("features.universal.description"),
                },
                {
                  icon: <Cpu className="h-6 w-6 text-mate-600" />,
                  title: t("features.performance.title"),
                  description: t("features.performance.description"),
                },
                {
                  icon: <HardDrive className="h-6 w-6 text-mate-600" />,
                  title: t("features.storage.title"),
                  description: t("features.storage.description"),
                },
                {
                  icon: <Server className="h-6 w-6 text-mate-600" />,
                  title: t("features.security.title"),
                  description: t("features.security.description"),
                },
                {
                  icon: <Globe className="h-6 w-6 text-mate-600" />,
                  title: t("features.availability.title"),
                  description: t("features.availability.description"),
                },
                {
                  icon: <MateCloudLogo size="sm" showText={false} />,
                  title: t("features.scalability.title"),
                  description: t("features.scalability.description"),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 rounded-lg border border-mate-100 p-6 shadow-sm hover:shadow-mate transition-shadow"
                >
                  <div className="rounded-full bg-mate-100 p-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-mate-900">{feature.title}</h3>
                  <p className="text-center text-mate-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-mate-50">
  <div className="container px-4 md:px-6">
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
      className="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-mate-100 px-3 py-1 text-sm text-mate-700">
          Planos sin Spot
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-mate-900">
          Elige tu plan sin spot
        </h2>
        <p className="max-w-[900px] text-mate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Elige el plan que mejor se adapte a tus necesidades y presupuesto.
        </p>
      </div>
    </motion.div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
      {[
        {
          title: "Basic",
          price: 180.0,
          period: "/Mes",
          features: [
            {
              section: "Especificaciones",
              items: ["INTEL XEON 16 VCPUS", "16GB RAM", "SERVIDOR BRASILEIRO", "350GB SSD PERMANENTE", "GPU EQUIVALENTE GTX 1060", "GPU EQUIVALENTE RTX 2060", "100MBps DOWNLOAD", " RESOLUÇÃO: ATÉ 4K"]
            },
            {
              section: "Sistema Operativo",
              items: ["Windows 11"]
            }
          ],
          popular: true,
        },
        {
          title: "Ultra 7",
          price: 109.90,
          period: "/7 días",
          features: [
            {
              section: "Especificaciones",
              items: ["INTEL XEON 16 VCPUS", "16GB RAM", "SERVIDOR BRASILEIRO", "350GB SSD PERMANENTE", "GPU EQUIVALENTE GTX 1060", "GPU EQUIVALENTE RTX 2060", "GPU EQUIVALENTE RTX 2060 SUPER", "GPU EQUIVALENTE RTX 2060 TI", "100MBps DOWNLOAD", " RESOLUÇÃO: ATÉ 4K"]
            },
            {
              section: "Sistema Operativo",
              items: ["Windows 11"]
            }
          ],
          popular: false,
        },
        {
          title: "Ultra",
          price: 309.90,
          period: "/Mes",
          features: [
            {
              section: "Especificaciones",
              items: ["INTEL XEON 16 VCPUS", "16GB RAM", "SERVIDOR BRASILEIRO", "350GB SSD PERMANENTE", "GPU EQUIVALENTE GTX 1060", "GPU EQUIVALENTE RTX 2060", "GPU EQUIVALENTE RTX 2060 SUPER", "GPU EQUIVALENTE RTX 2060 TI", "100MBps DOWNLOAD", " RESOLUÇÃO: ATÉ 4K"]
            },
            {
              section: "Sistema Operativo",
              items: ["Windows 11"]
            }
          ],
          popular: false,
        },
      ].map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex flex-col rounded-lg border ${
            plan.popular ? "border-mate-400" : "border-mate-200"
          } bg-white shadow-sm ${plan.popular ? "shadow-mate" : ""} relative`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-mate-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Más popular
            </div>
          )}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-mate-900">{plan.title}</h3>
            <div className="mt-4 text-center">
              <PriceDisplay amount={plan.price} className="text-4xl font-bold text-mate-900" />
              <span className="text-sm text-mate-600">{plan.period}</span>
            </div>
            <div className="mt-6 space-y-6">
              {plan.features.map((section: { section: string; items: string[] }, sectionIndex: number) => (
                <div key={sectionIndex} className="space-y-3">
                  <h4 className="font-medium text-mate-700">{section.section}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-mate-600 flex-shrink-0" />
                        <span className="text-mate-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto p-6 pt-0">
            <Button
              className={`w-full ${plan.popular ? "bg-mate-600 hover:bg-mate-700 text-white" : "bg-white text-mate-600 border border-mate-600 hover:bg-mate-50"}`}
            >
              Seleccionar
            </Button>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Aquí termina la sección de sin spot. */}

    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
      className="flex flex-col items-center justify-center space-y-4 text-center mt-16"
    >
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-mate-100 px-3 py-1 text-sm text-mate-700">
          Planos con Spot
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-mate-900">
          {t("pricing.subtitle")}
        </h2>
        <p className="max-w-[900px] text-mate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {t("pricing.description")}
        </p>
      </div>
    </motion.div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
      {[
        {
          title: t("pricing.basic.title"),
          price: basePrices.pulse,
          period: t("pricing.week"),
          features: [
            {
              section: "Especificaciones Estándar",
              items: [`1 ${t("pricing.cpuCores")}`, "2GB RAM", "64GB SSD"]
            },
            {
              section: "Especificaciones Mejoradas",
              items: [`2 ${t("pricing.cpuCores")}`, "4GB RAM", "128GB SSD"]
            },
            {
              section: "Sistema Operativo",
              items: ["Windows 11"]
            }
          ],
          popular: false,
        },
        {
          title: t("pricing.standard.title"),
          price: basePrices.core,
          period: t("pricing.fortnight"),
          features: [
            {
              section: "Especificaciones",
              items: [`4 ${t("pricing.cpuCores")}`, "8GB RAM", "256GB SSD"]
            },
            {
              section: "Sistema Operativo",
              items: ["Windows 11 Pro"]
            }
          ],
          popular: true,
        },
        {
          title: t("pricing.premium.title"),
          price: basePrices.nova,
          period: t("pricing.month"),
          features: [
            {
              section: "Especificaciones",
              items: [`8 ${t("pricing.cpuCores")}`, "16GB RAM", "512GB SSD + 1TB HDD"]
            },
            {
              section: "Sistema Operativo",
              items: ["Windows Server 2022"]
            }
          ],
          popular: false,
        },
      ].map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex flex-col rounded-lg border ${
            plan.popular ? "border-mate-400" : "border-mate-200"
          } bg-white shadow-sm ${plan.popular ? "shadow-mate" : ""} relative`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-mate-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              {t("pricing.popular")}
            </div>
          )}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-mate-900">{plan.title}</h3>
            <div className="mt-4 text-center">
              <PriceDisplay amount={plan.price} className="text-4xl font-bold text-mate-900" />
              <span className="text-sm text-mate-600">{plan.period}</span>
            </div>
            <div className="mt-6 space-y-6">
              {plan.features.map((section: { section: string; items: string[] }, sectionIndex: number) => (
                <div key={sectionIndex} className="space-y-3">
                  <h4 className="font-medium text-mate-700">{section.section}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-mate-600 flex-shrink-0" />
                        <span className="text-mate-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col p-6 pt-0">
            <Button
              className={`${
                plan.popular
                  ? "bg-mate-600 hover:bg-mate-700 text-white"
                  : "bg-white text-mate-600 border border-mate-600 hover:bg-mate-50"
              }`}
            >
              {t("pricing.select")}
            </Button>
          </div>
        </motion.div>
      ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-mate-100 px-3 py-1 text-sm text-mate-700">
                  {t("how.title")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-mate-900">{t("how.subtitle")}</h2>
                <p className="max-w-[900px] text-mate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("how.description")}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: t("how.step1.title"),
                  description: t("how.step1.description"),
                },
                {
                  step: 2,
                  title: t("how.step2.title"),
                  description: t("how.step2.description"),
                },
                {
                  step: 3,
                  title: t("how.step3.title"),
                  description: t("how.step3.description"),
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mate-100 text-mate-900">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-mate-900">{step.title}</h3>
                  <p className="text-center text-mate-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-mate-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-mate-100 px-3 py-1 text-sm text-mate-700">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-mate-900">{t("faq.title")}</h2>
                <p className="max-w-[900px] text-mate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("faq.description")}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              {[
                { q: t("faq.q1"), a: t("faq.a1") },
                { q: t("faq.q2"), a: t("faq.a2") },
                { q: t("faq.q3"), a: t("faq.a3") },
                { q: t("faq.q4"), a: t("faq.a4") },
                { q: t("faq.q5"), a: t("faq.a5") },
                { q: t("faq.q6"), a: t("faq.a6") },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border border-mate-200 bg-white p-6 shadow-sm hover:shadow-mate transition-shadow"
                >
                  <h3 className="text-lg font-bold text-mate-900">{faq.q}</h3>
                  <p className="mt-2 text-mate-700">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-mate-900 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("cta.title")}</h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">{t("cta.description")}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-mate-900 hover:bg-mate-100">
                  {t("cta.start")}
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-mate-800">
                  {t("cta.contact")}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6 bg-white">
        <div className="flex items-center gap-2">
          <MateCloudLogo size="sm" />
          <p className="text-sm text-mate-700">{t("footer.rights")}</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm text-mate-700 hover:text-mate-900 transition-colors" href="#">
            {t("footer.terms")}
          </Link>
          <Link className="text-sm text-mate-700 hover:text-mate-900 transition-colors" href="#">
            {t("footer.privacy")}
          </Link>
        </nav>
      </footer>
    </div>
  )
}
