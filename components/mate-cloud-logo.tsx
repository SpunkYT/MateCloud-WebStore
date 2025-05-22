import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MateCloudLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function MateCloudLogo({ className, size = "md", showText = true }: MateCloudLogoProps) {
  const sizes = {
    sm: { width: 24, height: 24, textClass: "text-lg" },
    md: { width: 32, height: 32, textClass: "text-xl" },
    lg: { width: 48, height: 48, textClass: "text-2xl" },
  }

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Image
          src="/images/mate-cloud-logo.png"
          alt="Mate Cloud Logo"
          width={sizes[size].width}
          height={sizes[size].height}
          className="object-contain"
          priority
        />
      </div>
      {showText && <span className={cn("font-bold text-mate-900", sizes[size].textClass)}>MateCloud</span>}
    </Link>
  )
}
