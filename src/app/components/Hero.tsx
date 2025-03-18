import { Shield, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { content } from "../content/page-content"

export function Hero() {
  const { title, subtitle, buttonText } = content.hero

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-blue-500/20">
        <Shield className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 left-10 text-blue-500/20">
        <Lock className="w-24 h-24" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100 px-8"
            >
              {buttonText}
            </Button>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>15+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span>+1500 Instalações Realizadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 