import { Link } from 'react-router';
import { Factory, Ship, Leaf, Settings, ChevronRight, Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const services = [
  {
    icon: Factory,
    title: 'Factory Compliance & Audits',
    path: '/services/compliance',
    description: 'Complete compliance solutions for Bangladesh factories. From boiler inspections to foreign buyer audit preparation.',
    features: [
      'Boiler Registration & Renewal (Office of the Chief Inspector)',
      'Safety Inspection Preparation',
      'Foreign Buyer Compliance (BSCI, WRAP, Sedex)',
      'Environmental Clearance (DoE)',
      'Fire Safety Certificate',
      'Factory License Renewal',
    ],
  },
  {
    icon: Ship,
    title: 'Equipment Import & Registration',
    path: '/services/import',
    description: 'End-to-end machinery and equipment import from China to Bangladesh. We handle everything from sourcing to installation.',
    features: [
      'Supplier Sourcing & Verification in China',
      'Price Negotiation & Contract Management',
      'Shipping & Freight Forwarding',
      'Customs Clearance ( bond / C&F )',
      'BOI Registration for Machinery',
      'Installation & Commissioning Support',
    ],
  },
  {
    icon: Leaf,
    title: 'Energy & Fuel Solutions',
    path: '/services/energy',
    description: 'Transform your factory\'s energy profile. Biomass conversions, fuel optimization, and sustainable energy consulting.',
    features: [
      'Biomass Boiler Conversion Assessment',
      'Fuel Cost Comparison & Optimization',
      'Solar PV Feasibility for Factories',
      'Energy Audit & Efficiency Reports',
      'Carbon Footprint Assessment',
      'Green Certification Support',
    ],
  },
  {
    icon: Settings,
    title: 'Industrial Consulting',
    path: '/services/consulting',
    description: 'Strategic advisory for factory setup, expansion, and process optimization in Bangladesh.',
    features: [
      'New Factory Setup Consulting',
      'Production Line Layout Optimization',
      'Feasibility Studies & Business Plans',
      'Technical Due Diligence',
      'Process Automation Advisory',
      'Quality Management Systems (ISO)',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={600}>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Our Services
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Four specialized service pillars designed to address every challenge
              Bangladesh factories face — from compliance paperwork to energy transformation.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-16 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={300 + index * 150} duration={600}>
              <div className="liquid-glass rounded-xl p-6 lg:p-8 border border-white/10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <service.icon className="text-white" size={36} />
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    Details <ChevronRight size={14} />
                  </Link>
                </div>
                <h2 className="text-xl font-medium text-white mb-2">{service.title}</h2>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                      <Check size={16} className="text-white shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                How We Work
              </h2>
              <p className="text-gray-400 text-base max-w-xl mx-auto">
                A simple 4-step process designed to get you results fast.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Assessment', desc: 'We audit your current situation — compliance status, equipment needs, or energy profile.' },
              { step: '02', title: 'Proposal', desc: 'You receive a detailed proposal with scope, timeline, and transparent pricing.' },
              { step: '03', title: 'Execution', desc: 'Our team handles everything — paperwork, sourcing, negotiations, and logistics.' },
              { step: '04', title: 'Handover', desc: 'We deliver results: certificates, installed equipment, or energy savings reports.' },
            ].map((item, index) => (
              <FadeIn key={item.step} delay={300 + index * 150} duration={600}>
                <div className="liquid-glass rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-3xl font-semibold text-white/20 mb-3">{item.step}</p>
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 text-center border border-white/10">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Book a free consultation. We will assess your situation and recommend
              the right services — no obligation.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ChevronRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
