import { Link } from 'react-router';
import { Shirt, Palette, UtensilsCrossed, Factory, Check, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const industries = [
  {
    icon: Shirt,
    title: 'RMG & Textile',
    description: 'Bangladesh\'s largest industry. We support garment factories with boiler compliance, steam system optimization, sewing machine imports, and buyer audit preparation (BSCI, WRAP, Sedex).',
    challenges: [
      'Boiler inspection & steam efficiency',
      'Fire & electrical safety compliance',
      'Foreign buyer audit preparation',
      'Sewing & cutting machine procurement',
      'Wastewater treatment compliance',
    ],
    services: ['/services/compliance', '/services/import', '/services/energy'],
  },
  {
    icon: Palette,
    title: 'Dyeing & Printing',
    description: 'High-energy, high-water-usage industry with strict environmental regulations. We specialize in boiler optimization, ETP compliance, and energy-efficient equipment sourcing.',
    challenges: [
      'High steam demand & fuel costs',
      'ETP/CETP compliance (DoE)',
      'Chemical handling permits',
      'Color kitchen equipment import',
      'Heat recovery system design',
    ],
    services: ['/services/energy', '/services/compliance', '/services/import'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Processing',
    description: 'Hygienic production requirements combined with heat processing needs. We help with food safety certifications, steam boiler setup, and processing equipment import.',
    challenges: [
      'BFSA license & food safety compliance',
      'Steam boiler for heat processing',
      'Cold chain equipment procurement',
      'HACCP implementation',
      'Packaging machinery sourcing',
    ],
    services: ['/services/compliance', '/services/import', '/services/consulting'],
  },
  {
    icon: Factory,
    title: 'General Manufacturing',
    description: 'From pharmaceuticals to plastics, ceramics to steel fabrication — we support diverse manufacturing sectors with tailored compliance, equipment, and consulting solutions.',
    challenges: [
      'Factory license & environmental clearance',
      'Production machinery import',
      'Compressed air system optimization',
      'Generator & power backup setup',
      'Workplace safety compliance',
    ],
    services: ['/services/import', '/services/consulting', '/services/compliance'],
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-16">
        <FadeIn delay={200} duration={600}>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Industries We Serve
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Deep expertise across Bangladesh&apos;s key industrial sectors.
              Every industry has unique challenges — we have tailored solutions.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Industries */}
      <section className="px-6 md:px-12 lg:px-16 pb-16 lg:pb-24">
        <div className="space-y-8">
          {industries.map((industry, index) => (
            <FadeIn key={industry.title} delay={300 + index * 150} duration={600}>
              <div className="liquid-glass rounded-xl p-6 lg:p-8 border border-white/10">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <industry.icon className="text-white" size={32} />
                      <h2 className="text-xl md:text-2xl font-medium text-white">
                        {industry.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((path) => (
                        <Link
                          key={path}
                          to={path}
                          className="liquid-glass border border-white/10 text-white px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-black transition-all inline-flex items-center gap-1"
                        >
                          {path.split('/').pop()?.replace('-', ' ')} <ChevronRight size={12} />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-white text-sm font-medium mb-3 uppercase tracking-wide">
                      Key Challenges We Solve
                    </h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-gray-300 text-sm">
                          <Check size={16} className="text-white shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <FadeIn delay={200} duration={600}>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 text-center border border-white/10">
            <h2 className="text-2xl font-medium text-white mb-4">
              Your Industry Not Listed?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              We serve all manufacturing sectors in Bangladesh. Contact us to discuss
              your specific industry needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
              <Factory size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
