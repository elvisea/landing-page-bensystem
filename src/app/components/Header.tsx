'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { content } from '../content/page-content'

export function Header() {
  const { logo, menu } = content.header
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '#services', label: menu.services },
    { href: '#how-it-works', label: menu.howItWorks },
    { href: '#reviews', label: menu.reviews },
    { href: '#contact', label: menu.contact },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-900 flex items-center gap-2"
          >
            <Shield className="w-6 h-6" />
            {logo}
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                Orçamento
              </Button>
            </a>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">{logo}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-600 hover:text-blue-700 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 