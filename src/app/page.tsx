import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import ValueProposition from '@/components/ValueProposition'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ProductShowcase />
      <CallToAction />
    </>
  )
}
