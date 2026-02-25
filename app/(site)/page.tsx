import type { Metadata } from 'next'
import HeroSlider from '@/components/HeroSlider'
import TrustBar from '@/components/TrustBar'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import TestimonialsSection from '@/components/TestimonialsSection'
import CitiesSection from '@/components/CitiesSection'
import WhySteel from '@/components/WhySteel'
import FAQSection from '@/components/FAQSection'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Metalic Estrutura | Estrutura Metálica em Curitiba PR SP SC RJ MG',
  description: 'A Metalic Estrutura oferece soluções completas em estrutura metálica, coberturas metálicas, mezaninos, escadas e alambrados. Mais de 2.000 obras em todo o Brasil. Curitiba - PR.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsCarousel />
      <TestimonialsSection />
      <CitiesSection />
      <WhySteel />
      <FAQSection />
      <CTABand />
    </>
  )
}
