import Link from 'next/link'

export default function ProductShowcase() {
  const products = [
    {
      name: 'AMS Platform',
      subtitle: 'For Insurance Agencies',
      description: 'Multi-tenant commission platform with real-time agent visibility. Watch commissions update LIVE as you reconcile carrier statements.',
      icon: '🏢',
      features: [
        '3-Status Commission Tracking (Due → Reconciled → Paid)',
        'Mirror Architecture - agents see updates in real-time',
        '4-Role Hierarchy (Admin, Manager, Agent, Owner)',
        'Commission splits & chargeback handling',
        'Multi-location support',
      ],
      pricing: '$299-$999/month',
      setupFee: '$2,500-$10,000 setup',
      link: '/products/ams',
      cta: 'Request Demo',
      highlight: true,
    },
    {
      name: 'Commission Tracker',
      subtitle: 'For Independent Agents',
      description: 'Track policies, reconcile carrier statements, and catch every dollar. The foundation that grows with you.',
      icon: '💰',
      features: [
        'Policy & commission tracking',
        'Automated reconciliation',
        'Statement import & matching',
        'Revenue ledger & reports',
        'Upgrade to Agency Mode as you grow',
      ],
      pricing: '$19.99/month',
      setupFee: '14-day free trial',
      link: '/products/commission-tracker',
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Agent CRM',
      subtitle: 'Launching Q1 2026',
      description: 'Full-featured sales pipeline and quote management. One person = one card forever. Horse race visualization for competitive quotes.',
      icon: '📇',
      features: [
        'Contact management (no duplicates!)',
        'Sales pipeline kanban view',
        'Multi-carrier quote tracking',
        'Unified timeline for all notes',
        'ACORD forms generation',
      ],
      pricing: '$49-$99/month',
      setupFee: 'Bundled with Commission Tracker',
      link: '/contact',
      cta: 'Join Waitlist',
      highlight: false,
    },
    {
      name: 'WRAP Proposal Generator',
      subtitle: 'Launching December 2025',
      description: 'Create professional high net-worth insurance proposals in minutes. Perfect for wrapping multiple policies with competitive analysis.',
      icon: '📊',
      features: [
        'Professional PDF proposals',
        'Multi-policy comparisons',
        'Automatic premium calculations',
        'Current vs. proposed carrier comparison',
        'Supports all policy types',
      ],
      pricing: '$29/month',
      setupFee: 'Standalone or bundled',
      link: '/contact',
      cta: 'Join Waitlist',
      highlight: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            Our Product Suite
          </h2>
          <p className="text-xl text-neutral-light max-w-3xl mx-auto">
            Choose the solution that fits your business today. Upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${
                product.highlight ? 'ring-2 ring-accent transform lg:scale-105' : ''
              }`}
            >
              {product.highlight && (
                <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 flex-grow">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-neutral mb-2">{product.name}</h3>
                <p className="text-accent font-semibold mb-4">{product.subtitle}</p>
                <p className="text-neutral-light mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 flex-shrink-0">✓</span>
                      <span className="text-sm text-neutral">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-neutral-lighter pt-6 mb-6">
                  <div className="text-2xl font-bold text-neutral mb-1">{product.pricing}</div>
                  <div className="text-sm text-neutral-light">{product.setupFee}</div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href={product.link}
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition ${
                    product.highlight
                      ? 'bg-accent text-white hover:bg-accent-dark'
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  {product.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
