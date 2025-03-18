'use client'

import { BsWhatsapp } from 'react-icons/bs'

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5541997799375?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20sistema%20de%20segurança%20da%20Bensystem', '_blank')
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