'use client'

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { content } from "../content/page-content"

export function Contact() {
  const { title, subtitle, form } = content.contact

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica de envio do formulário
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                Formulário de Contato
              </CardTitle>
              <CardDescription>
                Preencha os dados abaixo e a equipe da Bensystem entrará em contato em até 24 horas úteis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {form.nameLabel}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {form.emailLabel}
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {form.phoneLabel}
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    {form.addressLabel}
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    className="w-full"
                    placeholder="Endereço para instalação"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {form.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none"
                    placeholder="Descreva sua necessidade de segurança para que a Bensystem possa fazer uma análise inicial"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                    size="lg"
                  >
                    {form.buttonText}
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Suas informações são confidenciais e serão utilizadas apenas para contato pela Bensystem.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 