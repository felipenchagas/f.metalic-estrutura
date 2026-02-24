import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import StatsBar from '@/components/StatsBar'
import WhySteel from '@/components/WhySteel'
import AboutSection from '@/components/AboutSection'
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
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <ProjectsCarousel />
      <WhySteel />
      <CTABand />
    </>
  )
}
