import { Link } from 'react-router';
import { Ship, Check, ArrowLeft, Search, FileCheck, Truck, Hammer } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const processSteps = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and verify reliable manufacturers in China for your specific machinery needs. Factory audits, sample verification, and reference checks included.',
  },
  {
    icon: FileCheck,
    title: 'Negotiation & Contract',
    desc: 'Our China team negotiates prices 15-25% below market rates. We manage contracts, payment terms (TT/LC), and quality agreements.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight forwarding — sea freight, customs documentation, insurance, and port handling. Real-time tracking provided.',
  },
  {
    icon: Truck,
    title: 'Customs Clearance',
    desc: 'Experienced C&F agents handle Bangladesh customs clearance. We manage HS code classification, duty calculation, and duty drawback claims.',
  },
  {
    icon: FileCheck,
    title: 'BOI Registration',
    desc: 'Bangladesh Investment Development Authority registration for imported machinery. Tax exemptions and bond facility setup.',
  },
  {
    icon: Hammer,
    title: 'Installation Support',
    desc: 'Technical supervision during installation and commissioning. Chinese technician coordination if required.',
  },
];

const equipmentCategories = [
  'Industrial Boilers (Steam & Hot Water)',
  'Generator Sets (Diesel & Gas)',
  'Air Compressors',
  'Fire Safety Equipment',
  'Production Machinery (Sewing, Cutting, Printing)',
  'Water Treatment Plants',
  'Effluent Treatment Plants',
  'Electrical Panels & Transformers',
  'CNC Machines & Workshop Equipment',
  'Material Handling Equipment',
];

export default function ImportPage() {
  return (
    <div className="relative z-10">
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={400}>
          <Link
            to="/services"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 text-sm mb-6"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </FadeIn>

        <FadeIn delay={300} duration={600}>
          <div className="flex items-center gap-4 mb-4">
            <Ship className="text-white" size={40} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Equipment Import & Registration
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Import machinery from China at prices 15-25% below local market rates.
            We handle sourcing, shipping, customs, and installation — end to end.
          </p>
        </FadeIn>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <FadeIn delay={400} duration={600}>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-6">
            Our Import Process
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <FadeIn key={step.title} delay={500 + i * 100} duration={500}>
              <div className="liquid-glass rounded-xl p-6 border border-white/10">
                <step.icon className="text-white mb-3" size={28} />
                <h3 className="text-white font-medium mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">
              Equipment We Import
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {equipmentCategories.map((item, i) => (
              <FadeIn key={item} delay={300 + i * 80} duration={400}>
                <div className="liquid-glass rounded-lg p-4 border border-white/10 flex items-center gap-3">
                  <Check size={16} className="text-white shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="liquid-glass rounded-2xl p-6 md:p-10 border border-white/10">
              <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
                Pricing Model
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white">3-5%</p>
                  <p className="text-gray-400 text-sm">Commission on FOB value for equipment sourcing</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white">BDT 25K</p>
                  <p className="text-gray-400 text-sm">Flat fee for customs clearance per shipment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-white">BDT 15K</p>
                  <p className="text-gray-400 text-sm">BOI registration fee per machinery unit</p>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-6">
                All prices negotiable based on volume. Shipping costs and duties are passed through at actuals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="text-center">
            <h2 className="text-2xl font-medium text-white mb-4">
              Get a Free Import Quote
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Tell us what equipment you need. We will source the best Chinese
              manufacturers and send you a quote within 48 hours.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Request Import Quote
              <Ship size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
