import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative text-white py-20 md:py-32" style={{background: 'linear-gradient(135deg, #003B5C 0%, #005B82 50%, #8BA5B8 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insurance Software Built by Agents, <span className="text-accent">for Agents</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            30 years of agency experience transformed into powerful software solutions.
            We build what we need, so you know it works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              Request a Demo
            </Link>
            <Link
              href="/products/commission-tracker"
              className="bg-white text-primary hover:bg-neutral-lighter px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-lg font-semibold mb-1">Built by Agents</div>
              <div className="text-sm text-blue-100">30 years of agency experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">💡</div>
              <div className="text-lg font-semibold mb-1">Community-Driven</div>
              <div className="text-sm text-blue-100">Features shaped by agent feedback</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-lg font-semibold mb-1">No Client Services</div>
              <div className="text-sm text-blue-100">Products, not custom projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
