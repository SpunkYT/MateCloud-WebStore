"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "es" | "pt-BR"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navegación
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.how": "Cómo Funciona",
    "nav.faq": "FAQ",
    "nav.login": "Iniciar Sesión",
    "nav.home": "Inicio",
    "nav.dashboard": "Dashboard",
    "nav.myPCs": "Mis PCs",
    "nav.billing": "Facturación",
    "nav.settings": "Configuración",

    // Hero
    "hero.title": "Tu PC en la nube, siempre disponible",
    "hero.subtitle":
      "Accede a un PC potente desde cualquier dispositivo. Trabaja, juega y crea sin límites con Mate Cloud.",
    "hero.start": "Empezar ahora",
    "hero.plans": "Ver planes",
    "hero.accessAnywhere": "Acceso desde cualquier lugar",

    // Características
    "features.title": "Características",
    "features.subtitle": "Todo lo que necesitas en un PC virtual",
    "features.description":
      "Mate Cloud ofrece una experiencia de computación completa con todas las herramientas que necesitas.",
    "features.universal.title": "Acceso Universal",
    "features.universal.description": "Accede a tu PC desde cualquier dispositivo con conexión a internet.",
    "features.performance.title": "Alto Rendimiento",
    "features.performance.description": "Procesadores potentes y memoria RAM abundante para cualquier tarea.",
    "features.storage.title": "Almacenamiento SSD",
    "features.storage.description": "Almacenamiento rápido y confiable para todos tus archivos y aplicaciones.",
    "features.security.title": "Seguridad Avanzada",
    "features.security.description": "Protección de datos y copias de seguridad automáticas.",
    "features.availability.title": "Disponibilidad 24/7",
    "features.availability.description": "Tus aplicaciones y datos siempre disponibles, sin interrupciones.",
    "features.scalability.title": "Escalabilidad",
    "features.scalability.description": "Aumenta o reduce recursos según tus necesidades en cualquier momento.",

    // Precios
    "pricing.title": "Precios",
    "pricing.subtitle": "Elige tu plan con spot",
    "pricing.description": "Elige el plan que mejor se adapte a tus necesidades y presupuesto.",
    "pricing.basic.title": "Basic",
    "pricing.ultra7.title": "Ultra 7",
    "pricing.ultra.title": "Ultra",
    "pricing.week": "/7 días",
    "pricing.month": "/mes",
    "pricing.select": "Seleccionar",
    "pricing.popular": "MÁS POPULAR",
    "pricing.cpuCores": "núcleos CPU",
    
    // Especificaciones
    "specs.title": "Especificaciones",
    "specs.cpu": "INTEL XEON 16 VCPUS",
    "specs.ram": "16GB RAM",
    "specs.location": "SERVIDOR BRASILEIRO",
    "specs.storage": "350GB SSD PERMANENTE",
    "specs.gpu.gtx1060": "GPU EQUIVALENTE GTX 1060",
    "specs.gpu.rtx2060": "GPU EQUIVALENTE RTX 2060",
    "specs.gpu.rtx2060s": "GPU EQUIVALENTE RTX 2060 SUPER",
    "specs.gpu.rtx2060ti": "GPU EQUIVALENTE RTX 2060 TI",
    "specs.network": "100MBps DOWNLOAD",
    "specs.resolution": "RESOLUCIÓN: HASTA 4K",
    
    // Sistema Operativo
    "os.windows11": "Windows 11",
    
    // Títulos de sección
    "sectionTitle.plans": "Planes sin Spot",
    "sectionTitle.plansDesc": "Estos son ejemplos de planes sin spot. Puedes cambiar los nombres y características después.",
    "sectionTitle.spotPlans": "Planes con Spot",
    "sectionTitle.spotPlansDesc": "Planes con disponibilidad limitada. Precios especiales por tiempo limitado.",

    // Cómo funciona
    "how.title": "Cómo Funciona",
    "how.subtitle": "Comienza en minutos",
    "how.description": "Configurar tu PC en la nube es rápido y sencillo.",
    "how.step1.title": "Elige tu plan",
    "how.step1.description": "Selecciona el plan que mejor se adapte a tus necesidades de rendimiento.",
    "how.step2.title": "Configura tu PC",
    "how.step2.description": "Personaliza tu sistema operativo y aplicaciones según tus preferencias.",
    "how.step3.title": "Comienza a usar",
    "how.step3.description": "Accede a tu PC en la nube desde cualquier dispositivo y comienza a trabajar.",

    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.description": "Respuestas a las preguntas más comunes sobre Mate Cloud.",
    "faq.q1": "¿Qué es un PC en la nube?",
    "faq.a1":
      "Un PC en la nube es un ordenador virtual alojado en servidores remotos al que puedes acceder desde cualquier dispositivo con conexión a internet.",
    "faq.q2": "¿Necesito un ordenador potente para usar Mate Cloud?",
    "faq.a2":
      "No, solo necesitas un dispositivo con conexión a internet. Todo el procesamiento se realiza en nuestros servidores.",
    "faq.q3": "¿Puedo instalar cualquier software?",
    "faq.a3":
      "Sí, puedes instalar cualquier software compatible con el sistema operativo de tu PC en la nube, igual que en un PC físico.",
    "faq.q4": "¿Mis datos están seguros?",
    "faq.a4":
      "Sí, utilizamos encriptación de extremo a extremo y realizamos copias de seguridad regulares para garantizar la seguridad de tus datos.",
    "faq.q5": "¿Puedo cambiar de plan en cualquier momento?",
    "faq.a5": "Sí, puedes actualizar o reducir tu plan en cualquier momento según tus necesidades.",
    "faq.q6": "¿Qué sucede si tengo problemas técnicos?",
    "faq.a6": "Ofrecemos soporte técnico 24/7 para ayudarte con cualquier problema que puedas tener.",

    // CTA
    "cta.title": "Listo para comenzar con Mate Cloud",
    "cta.description": "Accede a un PC potente desde cualquier lugar. Comienza hoy mismo.",
    "cta.start": "Empezar ahora",
    "cta.contact": "Contactar ventas",

    // Footer
    "footer.rights": "© 2025 Mate Cloud. Todos los derechos reservados.",
    "footer.terms": "Términos de servicio",
    "footer.privacy": "Privacidad",

    // Login
    "login.title": "Iniciar Sesión",
    "login.description": "Ingresa tus credenciales para acceder a tu cuenta",
    "login.email": "Email",
    "login.password": "Contraseña",
    "login.forgot": "¿Olvidaste tu contraseña?",
    "login.button": "Iniciar Sesión",
    "login.noAccount": "¿No tienes una cuenta?",
    "login.register": "Regístrate",

    // Register
    "register.title": "Crear Cuenta",
    "register.description": "Ingresa tus datos para crear una cuenta en Mate Cloud",
    "register.firstName": "Nombre",
    "register.lastName": "Apellido",
    "register.email": "Email",
    "register.password": "Contraseña",
    "register.confirmPassword": "Confirmar Contraseña",
    "register.button": "Crear Cuenta",
    "register.hasAccount": "¿Ya tienes una cuenta?",
    "register.login": "Iniciar Sesión",

    // Dashboard
    "dashboard.activePCs": "PCs Activos",
    "dashboard.cpuUsage": "Uso de CPU",
    "dashboard.ramUsage": "Uso de RAM",
    "dashboard.storage": "Almacenamiento",
    "dashboard.lastMonth": "desde el último mes",
    "dashboard.myCloudPCs": "Mis PCs en la Nube",
    "dashboard.workPC": "PC de Trabajo",
    "dashboard.designPC": "PC de Diseño",
    "dashboard.connect": "Conectar",
    "dashboard.createPC": "Crear Nuevo PC",
    "dashboard.currentPlan": "Plan Actual",
    "dashboard.currentPlanDescription": "Estás en el plan Profesional",
    "dashboard.professionalPlan": "Plan Profesional",
    "dashboard.nextBilling": "Próxima facturación",
    "dashboard.paymentMethod": "Método de pago",
    "dashboard.cardEnding": "Visa terminada en 4242",
    "dashboard.changePlan": "Cambiar Plan",
    "dashboard.updatePayment": "Actualizar Método de Pago",
    "dashboard.myAccount": "Mi Cuenta",
    "dashboard.logout": "Cerrar sesión",

    // Selector de idioma
    "language.select": "Seleccionar idioma",
    "language.es": "Español",
    "language.ptBR": "Português (Brasil)",
  },
  "pt-BR": {
    // Navegação
    "nav.features": "Recursos",
    "nav.pricing": "Preços",
    "nav.how": "Como Funciona",
    "nav.faq": "FAQ",
    "nav.login": "Entrar",
    "nav.home": "Início",
    "nav.dashboard": "Dashboard",
    "nav.myPCs": "Meus PCs",
    "nav.billing": "Faturamento",
    "nav.settings": "Configurações",

    // Hero
    "hero.title": "Seu PC na nuvem, sempre disponível",
    "hero.subtitle": "Acesse um PC potente de qualquer dispositivo. Trabalhe, jogue e crie sem limites com Mate Cloud.",
    "hero.start": "Começar agora",
    "hero.plans": "Ver planos",
    "hero.accessAnywhere": "Acesso de qualquer lugar",

    // Recursos
    "features.title": "Recursos",
    "features.subtitle": "Tudo o que você precisa em um PC virtual",
    "features.description":
      "Mate Cloud oferece uma experiência de computação completa com todas as ferramentas que você precisa.",
    "features.universal.title": "Acesso Universal",
    "features.universal.description": "Acesse seu PC de qualquer dispositivo com conexão à internet.",
    "features.performance.title": "Alto Desempenho",
    "features.performance.description": "Processadores potentes e memória RAM abundante para qualquer tarefa.",
    "features.storage.title": "Armazenamento SSD",
    "features.storage.description": "Armazenamento rápido e confiável para todos os seus arquivos e aplicativos.",
    "features.security.title": "Segurança Avançada",
    "features.security.description": "Proteção de dados e backups automáticos.",
    "features.availability.title": "Disponibilidade 24/7",
    "features.availability.description": "Seus aplicativos e dados sempre disponíveis, sem interrupções.",
    "features.scalability.title": "Escalabilidade",
    "features.scalability.description":
      "Aumente ou reduza recursos de acordo com suas necessidades a qualquer momento.",

    // Preços
    "pricing.title": "Preços",
    "pricing.subtitle": "Planos para cada necessidade",
    "pricing.description": "Escolha o plano que melhor se adapta às suas necessidades e orçamento.",
    "pricing.basic.title": "Basic",
    "pricing.ultra7.title": "Ultra 7",
    "pricing.ultra.title": "Ultra",
    "pricing.week": "/7 dias",
    "pricing.month": "/mês",
    "pricing.select": "Selecionar",
    "pricing.popular": "MAIS POPULAR",
    "pricing.cpuCores": "núcleos de CPU",
    
    // Especificações
    "specs.title": "Especificações",
    "specs.cpu": "INTEL XEON 16 VCPUS",
    "specs.ram": "16GB RAM",
    "specs.location": "SERVIDOR BRASILEIRO",
    "specs.storage": "350GB SSD PERMANENTE",
    "specs.gpu.gtx1060": "GPU EQUIVALENTE GTX 1060",
    "specs.gpu.rtx2060": "GPU EQUIVALENTE RTX 2060",
    "specs.gpu.rtx2060s": "GPU EQUIVALENTE RTX 2060 SUPER",
    "specs.gpu.rtx2060ti": "GPU EQUIVALENTE RTX 2060 TI",
    "specs.network": "100MBps DOWNLOAD",
    "specs.resolution": "RESOLUÇÃO: ATÉ 4K",
    
    // Sistema Operacional
    "os.windows11": "Windows 11",
    
    // Títulos de seção
    "sectionTitle.plans": "Planos sem Spot",
    "sectionTitle.plansDesc": "Estes são exemplos de planos sem spot. Você pode alterar os nomes e recursos depois.",
    "sectionTitle.spotPlans": "Planos com Spot",
    "how.step1.description": "Selecione o plano que melhor se adapta às suas necessidades de desempenho.",
    "how.step2.title": "Configure seu PC",
    "how.step2.description": "Personalize seu sistema operacional e aplicativos de acordo com suas preferências.",
    "how.step3.title": "Comece a usar",
    "how.step3.description": "Acesse seu PC na nuvem de qualquer dispositivo e comece a trabalhar.",

    // FAQ
    "faq.title": "Perguntas Frequentes",
    "faq.description": "Respostas para as perguntas mais comuns sobre o Mate Cloud.",
    "faq.q1": "O que é um PC na nuvem?",
    "faq.a1":
      "Um PC na nuvem é um computador virtual hospedado em servidores remotos que você pode acessar de qualquer dispositivo com conexão à internet.",
    "faq.q2": "Preciso de um computador potente para usar o Mate Cloud?",
    "faq.a2":
      "Não, você só precisa de um dispositivo com conexão à internet. Todo o processamento é realizado em nossos servidores.",
    "faq.q3": "Posso instalar qualquer software?",
    "faq.a3":
      "Sim, você pode instalar qualquer software compatível com o sistema operacional do seu PC na nuvem, assim como em um PC físico.",
    "faq.q4": "Meus dados estão seguros?",
    "faq.a4":
      "Sim, utilizamos criptografia de ponta a ponta e realizamos backups regulares para garantir a segurança dos seus dados.",
    "faq.q5": "Posso mudar de plano a qualquer momento?",
    "faq.a5": "Sim, você pode atualizar ou reduzir seu plano a qualquer momento de acordo com suas necessidades.",
    "faq.q6": "O que acontece se eu tiver problemas técnicos?",
    "faq.a6": "Oferecemos suporte técnico 24/7 para ajudá-lo com qualquer problema que possa ter.",

    // CTA
    "cta.title": "Pronto para começar com o Mate Cloud",
    "cta.description": "Acesse um PC potente de qualquer lugar. Comece hoje mesmo.",
    "cta.start": "Começar agora",
    "cta.contact": "Contatar vendas",

    // Footer
    "footer.rights": "© 2025 Mate Cloud. Todos os direitos reservados.",
    "footer.terms": "Termos de serviço",
    "footer.privacy": "Privacidade",

    // Login
    "login.title": "Entrar",
    "login.description": "Digite suas credenciais para acessar sua conta",
    "login.email": "Email",
    "login.password": "Senha",
    "login.forgot": "Esqueceu sua senha?",
    "login.button": "Entrar",
    "login.noAccount": "Não tem uma conta?",
    "login.register": "Registre-se",

    // Register
    "register.title": "Criar Conta",
    "register.description": "Digite seus dados para criar uma conta no Mate Cloud",
    "register.firstName": "Nome",
    "register.lastName": "Sobrenome",
    "register.email": "Email",
    "register.password": "Senha",
    "register.confirmPassword": "Confirmar Senha",
    "register.button": "Criar Conta",
    "register.hasAccount": "Já tem uma conta?",
    "register.login": "Entrar",

    // Dashboard
    "dashboard.activePCs": "PCs Ativos",
    "dashboard.cpuUsage": "Uso de CPU",
    "dashboard.ramUsage": "Uso de RAM",
    "dashboard.storage": "Armazenamento",
    "dashboard.lastMonth": "desde o último mês",
    "dashboard.myCloudPCs": "Meus PCs na Nuvem",
    "dashboard.workPC": "PC de Trabalho",
    "dashboard.designPC": "PC de Design",
    "dashboard.connect": "Conectar",
    "dashboard.createPC": "Criar Novo PC",
    "dashboard.currentPlan": "Plano Atual",
    "dashboard.currentPlanDescription": "Você está no plano Profissional",
    "dashboard.professionalPlan": "Plano Profissional",
    "dashboard.nextBilling": "Próxima cobrança",
    "dashboard.paymentMethod": "Método de pagamento",
    "dashboard.cardEnding": "Visa terminado em 4242",
    "dashboard.changePlan": "Mudar Plano",
    "dashboard.updatePayment": "Atualizar Método de Pagamento",
    "dashboard.myAccount": "Minha Conta",
    "dashboard.logout": "Sair",

    // Selector de idioma
    "language.select": "Selecionar idioma",
    "language.es": "Español",
    "language.ptBR": "Português (Brasil)",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: string): string => {
    if (!mounted) return key // Devolver la clave durante la hidratación del servidor
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
