import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Stats />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
