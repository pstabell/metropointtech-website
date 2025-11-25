export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Integration Services
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We don't just provide software - we become your technology partner.
            Our team specializes in connecting your existing systems to create a unified,
            efficient workflow that matches how YOUR agency operates.
          </p>
        </div>
      </section>

      {/* Why Custom Integrations Matter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Your Agency is Unique. Your Technology Should Be Too.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔌</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Carrier Connections</h3>
              <p className="text-primary">
                Direct API integrations with your carriers for real-time quoting,
                policy downloads, and commission data. No more manual entry.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Rater Integrations</h3>
              <p className="text-primary">
                Connect to EZLynx, Applied Epic, Vertafore, or any rating platform.
                Quote data flows directly into your AMS automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Accounting Sync</h3>
              <p className="text-primary">
                QuickBooks, Xero, or your existing accounting system - we'll sync
                commission data, invoicing, and financial reporting automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-neutral-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            How We Work With You
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-accent">1.</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Discovery Call</h3>
                  <p className="text-primary">
                    We spend time understanding your current workflow, pain points, and the
                    systems you're already using. What carriers do you write with? What raters?
                    What's frustrating you most about your current setup?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-accent">2.</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Custom Integration Plan</h3>
                  <p className="text-primary">
                    We map out exactly which integrations will save you the most time and eliminate
                    the most errors. No cookie-cutter solutions - this is designed specifically for
                    how YOUR agency operates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-accent">3.</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Phased Implementation</h3>
                  <p className="text-primary">
                    We don't flip a switch and disrupt your business. Integrations are implemented
                    gradually, tested thoroughly, and refined based on your feedback. You stay in
                    control the entire time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-accent">4.</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Ongoing Support & Optimization</h3>
                  <p className="text-primary">
                    As carriers update their APIs or you add new systems, we maintain and optimize
                    your integrations. Your technology partner for the long haul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Real-World Integration Examples
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-lighter p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Carrier Direct Downloads</h3>
              <p className="text-primary mb-4">
                We can connect to carrier APIs to automatically download:
              </p>
              <ul className="space-y-2 text-primary">
                <li>✓ Policy documents and declarations pages</li>
                <li>✓ Commission statements and payment data</li>
                <li>✓ Loss runs and claims information</li>
                <li>✓ Renewal notices and policy changes</li>
                <li>✓ Real-time policy status updates</li>
              </ul>
            </div>

            <div className="bg-neutral-lighter p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Email & Document Processing</h3>
              <p className="text-primary mb-4">
                Smart automation for routine tasks:
              </p>
              <ul className="space-y-2 text-primary">
                <li>✓ Parse commission emails and auto-record payments</li>
                <li>✓ Extract policy numbers from email attachments</li>
                <li>✓ Auto-file documents to correct client folders</li>
                <li>✓ Send automated renewal reminders to clients</li>
                <li>✓ Alert team when quotes are ready for review</li>
              </ul>
            </div>

            <div className="bg-neutral-lighter p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Rater Platform Integration</h3>
              <p className="text-primary mb-4">
                Connect your favorite rating tools:
              </p>
              <ul className="space-y-2 text-primary">
                <li>✓ Pull quote data into AMS automatically</li>
                <li>✓ Sync client contact information both ways</li>
                <li>✓ Track which quotes convert to policies</li>
                <li>✓ Unified dashboard showing all activity</li>
                <li>✓ No more duplicate data entry</li>
              </ul>
            </div>

            <div className="bg-neutral-lighter p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Custom Workflows</h3>
              <p className="text-primary mb-4">
                Build workflows that match your process:
              </p>
              <ul className="space-y-2 text-primary">
                <li>✓ Multi-step approval processes for large accounts</li>
                <li>✓ Automated task assignment based on policy type</li>
                <li>✓ Custom notifications for specific triggers</li>
                <li>✓ Role-based access and permissions</li>
                <li>✓ Integration with your CRM or lead sources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gradient-to-br from-accent-light to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Built by an Agent Who Gets It
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Our founder has been running Metro Point Insurance for 30 years. He built this
              technology because he was frustrated with the same disconnected systems you're
              dealing with right now.
            </p>
            <p className="text-lg mb-6">
              When we talk about carrier integrations, commission tracking, renewal workflows,
              and policy management - we're not guessing. We live this every single day.
            </p>
            <p className="text-lg font-semibold">
              We understand insurance operations because we ARE an insurance operation.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Transparent Pricing Model
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-lighter p-8 rounded-xl mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Discovery Call: Free</h3>
              <p className="text-primary">
                No obligation. We'll discuss your needs and see if we're a good fit.
                Even if we're not, you'll walk away with ideas for improving your workflow.
              </p>
            </div>

            <div className="bg-neutral-lighter p-8 rounded-xl mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Integration Scoping: $500</h3>
              <p className="text-primary mb-4">
                Deep-dive into your systems, carriers, and workflows. We'll deliver a detailed
                integration plan with timeline and cost estimates for each component.
              </p>
              <p className="text-sm text-primary italic">
                This fee is credited toward implementation if you move forward.
              </p>
            </div>

            <div className="bg-neutral-lighter p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Custom Integration Development</h3>
              <p className="text-primary mb-4">
                Priced based on complexity and scope. Typical projects range from $2,500 for
                simple integrations to $15,000+ for comprehensive multi-carrier, multi-system setups.
              </p>
              <p className="text-primary">
                All integration work includes testing, documentation, training, and 90 days of
                post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-neutral-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Is This Right For Your Agency?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-accent">This IS for you if:</h3>
              <ul className="space-y-3 text-primary">
                <li>✓ You're tired of re-entering the same data multiple times</li>
                <li>✓ You want your systems to talk to each other</li>
                <li>✓ You're ready to invest in efficiency and automation</li>
                <li>✓ You write enough premium that time savings = money savings</li>
                <li>✓ You want technology customized to YOUR workflow, not vice versa</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">This is NOT for you if:</h3>
              <ul className="space-y-3 text-primary">
                <li>✗ You're looking for a cheap, out-of-the-box solution</li>
                <li>✗ You're not ready to invest in custom development</li>
                <li>✗ You prefer manual processes and spreadsheets</li>
                <li>✗ You're a solo agent writing minimal premium</li>
                <li>✗ You want plug-and-play software with no customization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Talk About Your Technology Stack
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free discovery call to explore how custom integrations could
            transform your agency's efficiency.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Schedule Discovery Call
          </a>
          <p className="mt-6 text-sm text-blue-100">
            No pressure, no sales pitch - just a conversation about your needs
          </p>
        </div>
      </section>
    </div>
  )
}
