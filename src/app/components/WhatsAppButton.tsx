'use client'

import { BsWhatsapp } from 'react-icons/bs'
import { getWhatsAppLink } from '@/lib/env'

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contato via WhatsApp"
    >
      <BsWhatsapp className="w-6 h-6" />
    </button>
  )
} 