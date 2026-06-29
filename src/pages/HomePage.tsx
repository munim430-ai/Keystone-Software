import { Link } from 'react-router';
import { Factory, Ship, Leaf, Settings, Shield, Users, FileCheck, Clock, Award, ChevronRight } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';

const serviceGateways = [
  {
    icon: Factory,
    title: 'Factory Compliance & Audits',
    description: 'Navigate Bangladesh boiler regulations, safety inspections, and foreign buyer compliance requirements.',
    path: '/services/compliance',
  },
  {
    icon: Ship,
    title: 'Equipment Import & Registration',
    description: 'End-to-end machinery import from China — sourcing, shipping, customs clearance, and BOI registration.',
    path: '/services/import',
  },
  {
    icon: Leaf,
    title: 'Energy & Fuel Solutions',
    description: 'Biomass boiler conversions, fuel cost optimization, and sustainable energy consulting for factories.',
    path: '/services/energy',
  },
  {
    icon: Settings,
    title: 'Industrial Consulting',
    description: 'Feasibility studies, factory setup, process optimization, and technical advisory services.',
    path: '/services/consulting',
  },
];

const trustIndicators = [
  { icon: Shield, label: 'Licensed & Registered', sub: 'TIN + Trade License' },
  { icon: Users, label: '50+ Factory Clients', sub: 'Across Bangladesh' },
  { icon: FileCheck, label: '95%+ Audit Success Rate', sub: 'Zero Failed Remediation' },
  { icon: Clock, label: 'Since 2020', sub: '5+ Years Experience' },
];

const whyChooseUs = [
  {
    title: 'Local Expertise, Global Standards',
    description: 'Deep knowledge of Bangladesh regulations combined with international best practices for factory compliance.',
  },
  {
    title: 'End-to-End Service',
    description: 'From paperwork to installation — we handle every step so you can focus on production.',
  },
  {
    title: 'China-Bangladesh Bridge',
    description: 'Direct relationships with Chinese manufacturers mean better prices and faster delivery.',
  },
  {
    title: 'Proven Track Record',
    description: '50+ factories trust us with their compliance, equipment import, and energy optimization.',
  },
];

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-14 lg:pb-24">
        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8 lg:gap-16">
          {/* Left Column */}
          <div>
            <AnimatedHeading
              text="Industrial Solutions\nfor Bangladesh"
              className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6"
              charDelay={25}
            />
            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                Your trusted partner for factory compliance, equipment import, and energy
                solutions. Helping Bangladesh industries grow since 2020.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Get Free Assessment
                  <ChevronRight size={18} />
                </Link>
                <a
                  href="https://wa.me/8801941646278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05a] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <Link
                  to="/services"
                  className="liquid-glass border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
                >
                  Explore Services
                  <ChevronRight size={18} />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Tag */}
          <FadeIn delay={1400} duration={1000}>
            <div className="flex items-end justify-start lg:justify-end mt-10 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-5 rounded-2xl">
                <p className="text-xl md:text-2xl font-light text-white tracking-wide">
                  Compliance. Import. Energy.
                </p>
                <p className="text-sm text-gray-400 mt-1.5">
                  One partner. Every solution.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="px-6 md:px-12 lg:px-16 py-8 border-y border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((item, index) => (
            <FadeIn key={item.label} delay={200 + index * 100} duration={600}>
              <div className="flex items-center gap-3">
                <item.icon className="text-gray-400 shrink-0" size={24} />
                <div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Service Gateways */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <FadeIn delay={200} duration={600}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
              Our Service Gateways
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Four specialized pillars designed to solve every industrial challenge
              Bangladesh factories face today.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceGateways.map((service, index) => (
            <FadeIn key={service.title} delay={300 + index * 150} duration={600}>
              <Link to={service.path} className="group block">
                <div className="liquid-glass rounded-xl p-6 lg:p-8 h-full hover:bg-white/5 transition-all duration-300 border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <service.icon
                      className="text-white group-hover:scale-110 transition-transform"
                      size={32}
                    />
                    <ChevronRight
                      className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                      size={20}
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200} duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
                Why Choose Us
              </h2>
              <p className="text-gray-400 text-base max-w-2xl mx-auto">
                We combine local regulatory expertise with international manufacturing
                connections to deliver unmatched value.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <FadeIn key={item.title} delay={300 + index * 150} duration={600}>
                <div className="liquid-glass-strong rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-white" size={20} />
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <FadeIn delay={200} duration={800}>
          <div className="liquid-glass rounded-2xl p-8 md:p-12 lg:p-16 text-center border border-white/10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Ready to Optimize Your Factory?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
              Get a free assessment of your factory&apos;s compliance status, energy
              efficiency, and equipment needs. No obligations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get Free Assessment
                <ChevronRight size={18} />
              </Link>
              <a
                href="https://wa.me/8801941646278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20c05a] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
