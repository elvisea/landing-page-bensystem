import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SchemaOrg } from "./components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bensystem - Sistemas de Segurança Eletrônica",
  description: "Soluções completas em segurança eletrônica para residências e empresas. Câmeras, alarmes e monitoramento 24h.",
  keywords: "segurança eletrônica, câmeras de segurança, alarmes, monitoramento 24h, automação residencial, controle de acesso, como funciona sistema de segurança",
  authors: [{ name: "Bensystem" }],
  creator: "Bensystem",
  publisher: "Bensystem",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.bensystem.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.bensystem.com.br",
    title: "Bensystem - Sistemas de Segurança Eletrônica",
    description: "Soluções completas em segurança eletrônica para residências e empresas. Conheça nosso processo de instalação e monitoramento.",
    siteName: "Bensystem",
    images: [
      {
        url: "https://www.bensystem.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bensystem - Sistemas de Segurança Eletrônica",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a8a", // blue-900
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SchemaOrg />
      </body>
    </html>
  );
}
