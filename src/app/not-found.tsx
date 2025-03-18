'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Conteúdo principal */}
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-blue-100 text-blue-700 rounded-full">
              <AlertTriangle className="w-16 h-16" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Página não encontrada</h1>

          <p className="text-lg text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
            Verifique o endereço ou retorne à página inicial.
          </p>

          <div className="space-y-4">
            <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg">
              <Link href="/">
                Voltar para a página inicial
              </Link>
            </Button>

            <div className="pt-4">
              <p className="text-gray-500">
                Precisa de ajuda? Entre em contato com nossa equipe:
              </p>
              <a
                href="tel:+554133333333"
                className="text-blue-700 hover:text-blue-800 font-medium"
              >
                (41) 3333-3333
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer simplificado */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Bensystem Segurança Eletrônica. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
} 